import React from 'react';
import { mount } from 'enzyme';
import Form from '../src/components/Form';

const userBlank = {
  password: '',
  email: '',
  username: '',
};

const user = {
  username: 'asd',
  password: 'asd',
  email: 'asdgweew@asd.asd',
};

it('formdata is empty', () => {
  const wrapper = mount(<Form formData={userBlank} />);

  expect(wrapper.props().formData).toEqual(userBlank);
});

it('error message is true if fields are empty', () => {
  const wrapper = mount(<Form formData={userBlank} msgTrue errorMsg />);

  wrapper.find('[button="createUser"]').simulate('click');

  expect(wrapper.props().msgTrue).toBeTruthy();
  expect(wrapper.props().errorMsg).toBeTruthy();
});
