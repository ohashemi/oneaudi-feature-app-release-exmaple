import { ShallowWrapper, ReactWrapper } from 'enzyme';

/**
 * @function findByTestAttr
 * @description Return node(s) with the given data-test-id attribute
 * @param {ShallowWrapper|ReactWrapper} wrapper
 * @param {string} value
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper: ShallowWrapper | ReactWrapper, value: string) =>
  wrapper.find(`[data-test-id="${value}"]`);

/**
 * @constant mockConsole
 * @description A mocked console instance which suppresses every console output
 */
export const mockConsole = {
  ...global.console,
  log: jest.fn(),
  info: jest.fn(),
  debug: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};
