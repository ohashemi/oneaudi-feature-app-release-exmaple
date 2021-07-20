import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Welcome from './Welcome';
import { findByTestAttr } from '../../../test/test-utils';

/**
 * @function setup
 * @description Setup a wrapper for testing
 * @param {object} props - Props to setup component with
 * @returns {ShallowWrapper}
 */
const setup = (): ShallowWrapper => shallow(<Welcome />);

describe('Welcome Component', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'welcome');
    expect(component.length).toBe(1);
  });
});
