#!/usr/bin/env node
import path from 'path';
import fs from 'fs-extra';
import mkdirp from 'mkdirp';
import { paths } from '../config/paths';
import program from 'commander';
import { run } from '../scripts/utils/run';
import { logger } from '../scripts/logger';
import xml from 'xml';

const LogFailurePrefix = 'ossindex.sonatype.org';

export async function audit(exceptions: string[]): Promise<void> {
  try {
    let auditResult: string;

    try {
      auditResult = await run('yarn audit --json --level=moderate');
    } catch (err) {
      logger.error(JSON.stringify(err));
      logger.warn('Call to yarnkpg audit has caused an error.  Exiting for now.  Audits caught on next build');

      process.exit(0);
      return;
    }

    const [report, ...vulnerabilities] = auditResult
      .trim()
      .split('\n')
      .reverse()
      .filter((a) => {
        if (!a) {
          logger.error(a);
          return false;
        }

        return true;
      })
      .map((s) => JSON.parse(s));

    const totalDependencies = report?.data?.totalDependencies;

    if (!totalDependencies) {
      logger.error('Call to Yarn audit has failed.  Exiting for now.  Audits caught on next build');
      logger.error(report);
      logger.error(auditResult);
      process.exit(0);
    }

    const { name, version } = await import(path.join(process.cwd(), 'package.json'));
    const displayName = `${name}@${version}`;
    const logMessage = `running yarn audit for ${displayName}`;

    logger.info(logMessage);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const failures = vulnerabilities.filter((vulnerability: any) => {
      if (!vulnerability?.data?.advisory) {
        logger.info(typeof vulnerability);
        console.dir(vulnerability);
      }

      const advisory = vulnerability.data?.advisory;
      const severity = advisory?.severity;
      const packageName = advisory.module_name;

      const meetsCrieria = !!severity && exceptions.includes(packageName) === false;

      if (meetsCrieria) {
        const logMessage = `${LogFailurePrefix} - Found a ${severity} vulneability for ${packageName} in ${displayName} - ${advisory.url}`;

        logger.error(logMessage);
      }

      return meetsCrieria;
    });

    const jsonResults = {
      testsuites: [
        {
          _attr: {
            name: 'Yarn Audit',
            failures: failures.length,
            tests: totalDependencies,
          },
        },
      ],
    };

    const testSuite = {
      testsuite: [
        {
          _attr: {
            name: displayName,
            errors: 0,
            failures: failures.length,
            skipped: 0,
            timestamp: new Date().toISOString().slice(0, -5),
          },
        },
      ],
    };

    for (let i = 0; i < failures.length; i++) {
      const failure = failures[i];

      if (!failure?.data?.resolution?.path) {
        const logMessage = `irregular json = ${JSON.stringify(failure)}`;

        logger.error('Houston we have a problem.......');
        logger.error(logMessage);

        process.exit(1);
      }

      const {
        data: {
          advisory,
          recommendation,
          resolution: { path },
        },
      } = failure;
      const { overview, module_name } = advisory;
      const dependencyPath = path.split('>').length === 1 ? path : path.split('>')[0];

      const message = [overview, recommendation].join('\n');

      const testCase = {
        testcase: [
          {
            _attr: {
              id: i + 1,
              classname: module_name,
              name: module_name,
            },
          },
          {
            failure: [
              {
                _attr: {
                  message: `Dependency of ${dependencyPath}`,
                },
              },
              message,
            ],
          },
        ],
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      testSuite.testsuite.push(testCase as any);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jsonResults.testsuites.push(testSuite as any);

    const { ossIndex } = paths;

    if (!fs.existsSync(ossIndex)) {
      mkdirp(ossIndex);
    }

    fs.emptyDirSync(ossIndex);
    fs.writeFileSync(path.join(ossIndex, 'junitReport.xml'), xml(jsonResults, { indent: '  ', declaration: true }));

    const finalMessage = `audit finished with ${failures.length} found.`;

    logger.done(finalMessage);

    process.exit(0);
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
}

program
  .description('run yarn audit against the yarn.lock file in current cwd')
  .helpOption('-h, --help', 'show help')
  .option('-e, --exceptions', 'a list of packages to ignore, i.e. angular 1.3 in bpm should be the only one')
  .action(async (_, options = []) => {
    await audit(options);
  });

program.parse(process.argv);
