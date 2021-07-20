import { defineLogger } from '@feature-hub/logger';

/**
 * @function createLogger
 * @description Returns a new logger instance
 * @returns {defineLogger} Logger instance
 */
export const createLogger = () => {
  return defineLogger((consumerUid: string) => ({
    /* eslint-disable no-console */
    debug: (...optionalParams: unknown[]) => console.debug(consumerUid, ...optionalParams),
    info: (...optionalParams: unknown[]) => console.info(consumerUid, ...optionalParams),
    error: (...optionalParams: unknown[]) => console.error(consumerUid, ...optionalParams),
    trace: (...optionalParams: unknown[]) => console.trace(consumerUid, ...optionalParams),
    warn: (...optionalParams: unknown[]) => console.warn(consumerUid, ...optionalParams),
    /* eslint-enable no-console */
  }));
};
