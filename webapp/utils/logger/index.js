import winston from 'winston';

let cachedLogger = null;

export function getLogger() {
  if(cachedLogger) {
    return cachedLogger;
  }

  cachedLogger = winston.createLogger({
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json()
    ),	
    transports: [
      new winston.transports.Console({
        timestamp: true,
        level: 'debug',
        handleExceptions: true,
        json: true,
        colorize: true,
    })]
  });
  return cachedLogger;
}
