import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from  'enzyme-adapter-react-16';
import Converter from './converter';
import ConverterForm from '../converter-form';

Enzyme.configure({ adapter: new Adapter() });

describe('Converter', () => {
  it('should be a function' , () => {
    expect(typeof Converter).toEqual('function');
  });

  it('should render root element with pure-g class' , () => {
    const wrapper = shallow(<Converter />);

    expect(wrapper.hasClass('pure-g')).toBe(true);
  });

  it('should render application title' , () => {
    const wrapper = shallow(<Converter />);

    expect(wrapper.find('h3').text()).toBe('Currency converter');
  });

  it('should render ConverterForm component' , () => {
    const wrapper = shallow(<Converter />);

    expect(wrapper.find(ConverterForm).length).toBe(1);
  });
});
