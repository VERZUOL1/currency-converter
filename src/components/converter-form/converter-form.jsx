import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';

const ConverterForm = ({ onSubmit, fromCurrency, toCurrency }) => {
  return (
    <Formik
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          onSubmit(values);
          setSubmitting(false);
        }, 400);
      }}
      initialValues={{ amount: '', to: '' }}>
      {({ isSubmitting }) => (
        <Form>
          <Field type='number' name='amount' />
          <ErrorMessage name='amount' component='div' />

          <Field name='from' as='select'>
            {fromCurrency.map(item => <option value={item}>{item}</option>)}
          </Field>
          <Field name='to' as='select'>
            {toCurrency.map(item => <option value={item}>{item}</option>)}
          </Field>

          <button type='submit' disabled={isSubmitting}>Get rate</button>
        </Form>
      )}
    </Formik>
  );
};

export default ConverterForm;
