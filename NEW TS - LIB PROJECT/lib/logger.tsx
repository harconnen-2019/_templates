interface LogFn {
  (message?: any, ...optionalParams: any[]): void;
}

interface Logger {
  log: LogFn;
  warn: LogFn;
  error: LogFn;
}

type LogLevel = 'log' | 'warn' | 'error';

const LOG_LEVEL: LogLevel = process.env.NODE_ENV === 'production' ? 'warn' : 'log';
const NO_OP: LogFn = () => {};

class ConsoleLogger implements Logger {
  readonly log;
  readonly warn;
  readonly error;

  constructor(options?: { level?: LogLevel }) {
    const { level } = options || {};

    this.error = console.error.bind(console); // eslint-disable-line

    if (level === 'error') {
      this.warn = NO_OP;
      this.log = NO_OP;

      return;
    }

    this.warn = console.warn.bind(console); // eslint-disable-line

    if (level === 'warn') {
      this.log = NO_OP;

      return;
    }

    this.log = console.log.bind(console); // eslint-disable-line
  }
}

export const Logger = new ConsoleLogger({ level: LOG_LEVEL });
