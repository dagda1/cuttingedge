#!/usr/bin/env node

const { resolve } = require('path')
const { execSync } = require('child_process')
const archiver = require('archiver-promise')
const glob = require('fast-glob')
const { ls, config } = require('npm-remote-ls')
const { existsSync, copySync, removeSync, ensureDirSync } = require('fs-extra')
config({development: false, optional: false})