# install
```
yarn add @noxnox/nest-minimal-logger
```
or
```
npm install --save @noxnox/nest-minimal-logger
```

# usage
```typescript
const logger = new MinimalLogger();

logger.log('message on the console')
logger.error('error message on the console')
logger.warn('warning message on the console')
logger.debug('debug message on the console')
logger.verbose('verbose message on the console')
```