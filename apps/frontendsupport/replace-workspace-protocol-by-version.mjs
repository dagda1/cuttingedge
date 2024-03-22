import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { Command } from '@commander-js/extra-typings';
import { findWorkspacePackagesNoCheck } from '@pnpm/find-workspace-packages';

const program = new Command().argument(
  '<pathtopackagejson>',
  'the path to the package.json of which the dependencies using the "workspace:*" protocol should be replaced by the versions present in the monorepo (e.g. "./deployed-package/package.json")',
);

program.parse();

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const projects = await findWorkspacePackagesNoCheck(path.join(__dirname, '..', '..', '..'));
// first elem of returned array is the root package.json, the monorepo itself --> discard that
const [, ...workspaceProjects] = projects;

const absolutePath = path.join(process.cwd(), program.args[0]);

const packageJsonContent = JSON.parse(await fs.promises.readFile(absolutePath, 'utf-8'));

/**
 * @param {{[key: string]: string}} dependencies
 */
function replaceWorkspaceProtocolBySpecificVersion(dependencies) {
  if (typeof dependencies !== 'object' || dependencies === null) {
    return;
  }

  for (const [pkgName, pkgVersion] of Object.entries(dependencies)) {
    if (pkgVersion.startsWith('workspace:')) {
      const matchingWorkspaceProject = workspaceProjects.find((project) => project.manifest.name === pkgName);
      if (!matchingWorkspaceProject) {
        throw new Error(
          `could not replace the workspace protocol of a package, reason: package not found! pkgName=${pkgName}`,
        );
      }
      if (!matchingWorkspaceProject.manifest.version) {
        throw new Error(
          `could not replace the workspace protocol of a package, reason: package has no version! pkgName=${pkgName}`,
        );
      }

      dependencies[pkgName] = `^${matchingWorkspaceProject.manifest.version}`;
    }
  }
}

replaceWorkspaceProtocolBySpecificVersion(packageJsonContent.dependencies);
replaceWorkspaceProtocolBySpecificVersion(packageJsonContent.devDependencies);

await fs.promises.writeFile(absolutePath, JSON.stringify(packageJsonContent, undefined, 2), 'utf-8');
