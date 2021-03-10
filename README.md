&nbsp;
# Install
```
yarn add @noxnox/nest-minimal-logger
```
or
```
npm install --save @noxnox/nest-minimal-logger
```
&nbsp;
# Usage
```typescript
const logger = new MinimalLogger();

logger.log('message on the console')
logger.error('error message on the console');
logger.warn('warning message on the console');
logger.debug('debug message on the console');
logger.verbose('verbose message on the console');
```
&nbsp;
## Override to Nest Logger
&nbsp;
in `main.ts`
```typescript
import { NestFactory } from '@nestjs/core';
import { MinimalLogger } from '@noxnox/nest-minimal-logger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    {
      logger: new MinimalLogger(),
    },
  );
}
```
in `app.service.ts`
```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private logger = new Logger();

  getHello(): string {

    this.logger.log('minimal logger');

    return 'Hello World!';
  }
}

```