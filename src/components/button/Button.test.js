import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button';

describe('Button', () => {
  it('Should render', () => {
    const wrapper = shallow(<Button>Push Me</Button>);
    expect(wrapper.text()).toEqual('Push Me');
    expect(wrapper).toMatchSnapshot();
  });
});
