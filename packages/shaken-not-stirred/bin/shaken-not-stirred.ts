#!/usr/bin/env node
import path from 'path';
import fs from 'fs';
import { assert } from 'assert-ts';
import { check } from '../src';

const packageJsonPath = path.join(process.cwd(), 'package.json');

function ifExists(file: string) {
  return fs.existsSync(file) ? file : null;
}

function isDirectory(file: string) {
  try {
    const stats = fs.statSync(file);
    return stats.isDirectory();
  } catch (err) {
    return false;
  }
}

function resolve(file: string) {
  if (isDirectory(file)) {
    return ifExists(`${file}/index.mjs`) || ifExists(`${file}/index.js`);
  }

  return ifExists(file) || ifExists(`${file}.mjs`) || ifExists(`${file}.js`);
}

function getInput() {
  assert(fs.existsSync(packageJsonPath), 'package.json not found');

  const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

  console.log({ m: pkg.module, main: pkg.main });

  const unresolved = pkg.module || pkg.main || 'index';
  const resolved = resolve(unresolved);

  assert(!!resolved, `Could not resolve entry point`);

  return resolved;
}

async function main() {
  const input = process.argv[2] || getInput();

  assert(!!input, 'Input file not specified');

  const relative = path.relative(process.cwd(), input);

  const result = await check(input);

  if (result.shaken) {
    console.error(`Success! ${relative} is fully tree-shakeable`);
  } else {
    console.error(`Failed to tree-shake ${relative}`);
    process.exit(1);
  }
}

main();
