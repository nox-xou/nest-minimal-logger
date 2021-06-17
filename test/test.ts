import { MinimalLogger } from '../src';

const logger = new MinimalLogger('Test');

logger.log('test');
logger.error('test');
logger.warn('test');
logger.debug('test');
logger.verbose('test');
