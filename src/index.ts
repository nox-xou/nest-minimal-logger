import { Logger, LoggerService } from '@nestjs/common';
import * as colors from 'colors/safe';

const defaultOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false,
  timeZone: 'Asia/Bangkok',
  timeZoneName: 'short',
};

export class MinimalLogger extends Logger {
  private date: Intl.DateTimeFormat = null;

  constructor(
    context?: string,
    isTimestampEnabled?: boolean,
    locale?: string,
    options?: Intl.DateTimeFormatOptions,
  ) {
    super(context, isTimestampEnabled);
    const opt = { ...defaultOptions, ...(options || {}) };
    this.date = new Intl.DateTimeFormat(locale || 'en', opt);
  }

  log(message: string, context?: string) {
    console.log(colors.white(this.format(message, context)));
  }
  error(message: string, trace?: string, context?: string) {
    console.log(colors.red(this.format(message, context)));
  }
  warn(message: string, context?: string) {
    console.log(colors.yellow(this.format(message, context)));
  }
  debug(message: string, context?: string) {
    console.log(colors.cyan(this.format(message, context)));
  }
  verbose(message: string, context?: string) {
    console.log(colors.grey(this.format(message, context)));
  }

  private format(message: string, context?: string) {
    context = context || this.context;
    let text = context ? `[${context}] ` : '';
    text += message;
    return `${this.date.format(new Date())} ${text}`;
  }
}
