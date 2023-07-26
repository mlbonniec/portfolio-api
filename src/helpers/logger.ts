enum LogType {
  LOG = 'log',
  ERROR = 'error',
  WARN = 'warn'
}

export abstract class Logger {
  private static readonly PREFIX: string = '[Logger]';

  private static formatAndLog(type: LogType, ...args: [any]): void {
    const prefix: string = [Logger.PREFIX, type.toUpperCase()].join(' ');

    console[type](prefix, '-', ...args);
  }

  public static log(...args: [any]): void {
    Logger.formatAndLog(LogType.LOG, args);
  }

  public static error(...args: [any]): void {
    Logger.formatAndLog(LogType.ERROR, args);
  }

  public static warn(...args: [any]): void {
    Logger.formatAndLog(LogType.WARN, args);
  }
}
