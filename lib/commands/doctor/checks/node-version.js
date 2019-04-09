'use strict';
const chalk = require('chalk');
const semver = require('semver');

const errors = require('../../../errors');
const cliPackage = require('../../../../package');
const checkDirectoryAndAbove = require('./check-directory');

const taskTitle = 'Checking system Node.js version';

function nodeVersion(ctx) {
     if (ctx.local || !ctx.system.platform.linux || (ctx.argv && ctx.argv['setup-linux-user'] === false)) {
        return Promise.resolve();
    }

    return checkDirectoryAndAbove(process.argv[0], 'install node and Ghost-CLI', taskTitle);
}

module.exports = {
    title: taskTitle,
    task: nodeVersion,
    category: ['install', 'update']
};
