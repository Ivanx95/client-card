const { createLogger, format, transports } = require('winston');

const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return  '{ "timestamp":"'+timestamp +'", "level":"'+level+'", "message":"'+message+'" }"';
});

const Logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: './logs/info.log' })
  ]
});


module.exports = Logger;
