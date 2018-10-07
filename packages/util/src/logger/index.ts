import * as winston from 'winston';
const chalk = require('chalk');

export const { info, error, debug, log } = winston.createLogger({
  level: 'debug',
  silent: process.env.NODE_ENV === 'test',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.printf(
      (l) => `${l.timestamp} ${l.level}: ${l.message}` + (l.splat !== undefined ? `${l.splat}` : ' ')
    )
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
        winston.format.printf(
          (l) =>
            `${chalk.cyan(l.timestamp)} ${l.level}: ${chalk.yellow(l.message)}` +
            (l.splat !== undefined ? `${l.splat}` : ' ')
        )
      )
    })
  ]
});
