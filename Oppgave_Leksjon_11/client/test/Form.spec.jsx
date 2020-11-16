import React from 'react';
import { shallow, mount} from 'enzyme';
import Form from '../src/components/Form';

afterEach(() => {
  jest.useRealTimers();
});

it('formData should be empty', () => {
  const wrapper = shallow(<Form />);

  
  wrapper.find('#inpUsername').simulate('change', {username: 'Ole'});
  wrapper.find('#inpEmail').simulate('change', {username: 'ole@epost.no'});
  wrapper.find('#inpPassword').simulate('change', {username: 'passord123'});

  wrapper.find('#inpUsername').toEqual('Ole');
  wrapper.find('#inpEmail').toEqual('ole@epost.no');
  wrapper.find('#inpPassword').toEqual('passord123');
});

// it('formData should be populated after onSubmit click', () => {
//   const wrapper = shallow(<Form />);

//   wrapper.find('#inpUsername').simulate('change', 'Ole');
//   wrapper.find('#inpEmail').simulate('change', 'ole@epost.no');
//   wrapper.find('#inpPassword').simulate('change', 'passord123');

//   wrapper.find('#bCreate').simulate();
//   expect(FormData.username).toEqual('Ole');
//   expect(FormData.email).toEqual('ole@epost.no');
//   expect(FormData.password).toEqual('passord123');
