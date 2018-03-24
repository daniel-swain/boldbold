/* eslint-disable */
import React from 'react';
import Header from './index';

describe('<Header />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Header />);
  });

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
