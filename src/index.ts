import { LoggerService } from '@nestjs/common';
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

export class MinimalLogger implements LoggerService {
  private date: Intl.DateTimeFormat = null;

  constructor(locale?: string, options?: Intl.DateTimeFormatOptions) {
    const opt = { ...defaultOptions, ...(options || {}) };
    this.date = new Intl.DateTimeFormat(locale || 'en', opt);
  }

  log(message: string) {
    console.log(colors.white(this.format(message)));
  }
  error(message: string, ...args: any[]) {
    console.log(colors.red(this.format(message)));
  }
  warn(message: string) {
    console.log(colors.yellow(this.format(message)));
  }
  debug(message: string) {
    console.log(colors.cyan(this.format(message)));
  }
  verbose(message: string) {
    console.log(colors.grey(this.format(message)));
  }

  private format(message: string) {
    return `${this.date.format(new Date())} ${message}`;
  }
}
