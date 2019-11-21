import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from  'enzyme-adapter-react-16';
import { Formik, Form } from 'formik';
import ConverterForm from '../converter-form';
import { CURRENCIES_LIST } from '../../constants/common';

Enzyme.configure({ adapter: new Adapter() });

describe('ConverterForm', function () {
  const onSubmit = jest.fn();

  it('should be a function' , () => {
    expect(typeof ConverterForm).toEqual('function');
  });

  it('should render Formik component' , () => {
    const wrapper = shallow(<ConverterForm onSubmit={onSubmit} currenciesList={CURRENCIES_LIST} />);

    expect(wrapper.find(Formik).length).toBe(1);
  });

  it('should render Form component' , () => {
    const wrapper = shallow(<ConverterForm onSubmit={onSubmit} currenciesList={CURRENCIES_LIST} />);


    expect(wrapper.find(Formik).dive().find(Form).length).toBe(1);
  });
});
