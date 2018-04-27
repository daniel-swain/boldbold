/* global beforeAll, describe, it, expect, shallow */
import React from 'react';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import { themes, DEFAULT_THEME } from '../../../../contexts/theme';
import Burst from './index';
import { Ball } from './ball';

describe('<Burst />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Burst x={0} y={0} />);
  });

  it('should render', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('<Ball />', () => {
    it('should render', () => {
      const ballJson = toJson(shallow(<Ball theme={themes[DEFAULT_THEME]} />));
      expect(ballJson).toMatchSnapshot();
    });
  });
});
