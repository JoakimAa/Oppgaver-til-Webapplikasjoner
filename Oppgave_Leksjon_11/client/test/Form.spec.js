import React from 'react';
import { shallow } from 'enzyme';
import { Form } from '../src/components/Form';

afterEach(() => {
  jest.useRealTimers();
});

it('should handlesubmit on buttonpress', () => {
  const wrapper = shallow(<Form />);

  wrapper.find('#bCreate').simulate('click');
});
