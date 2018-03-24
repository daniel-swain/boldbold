/* eslint-disable */
import React from 'react';
import Menu from './index';

describe('<Menu />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Menu />);
  });

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
