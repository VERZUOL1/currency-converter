import React from 'react';
import PropTypes from 'prop-types';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import './converter-form.scss';

const ConverterForm = ({ onSubmit, currenciesList }) => (
  <Formik
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        onSubmit(values);
        setSubmitting(false);
      }, 400);
    }}
    validate={values => {
      const errors = {};
      if (!values.amount) {
        errors.amount = 'Required';
      } else if (values.amount < 0) {
        errors.amount = 'Must be positive';
      }
      return errors;
    }}
    initialValues={{ amount: 1, from: currenciesList[0], to: currenciesList[1] }}>
    {({
      isSubmitting,
      values
    }) => (
      <Form className='converter-form__container'>
        <div className='converter-form__content'>
          <div className='converter-form__input-wrapper'>
            <h5>Amount</h5>
            <Field type='number' name='amount' className='converter-text-input' />
            <ErrorMessage name='amount' component='div' className='converter-form__error' />
          </div>
          <div className='converter-form__input-wrapper'>
            <h5>From</h5>
            <Field name='from' as='select' className='converter-select'>
              {currenciesList.map(item => <option key={item} value={item}>{item}</option>)}
            </Field>
          </div>
          <div className='converter-form__input-wrapper'>
            <h5>To</h5>
            <Field name='to' as='select' className='converter-select'>
              {currenciesList.filter(item => item !== values.from)
                .map(item => <option key={item} value={item}>{item}</option>)}
            </Field>
          </div>
        </div>
        <div className='converter-form__footer'>
          <button type='submit' disabled={isSubmitting}>Convert</button>
        </div>
      </Form>
    )}
  </Formik>
);

ConverterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currenciesList: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired
};

export default ConverterForm;
