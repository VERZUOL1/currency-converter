import React from 'react';
import Formik from 'formik';

import { noop } from '../../helpers/common';

const Converter = () => {
  return (
    <div>
      <Formik
        initialValues={{ from: '', to: '' }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur
        }) => (
          <form onSubmit={noop}>
            <input
              type='number'
              name='from'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.from} />
            {errors.from && touched.from && errors.from}
            <input
              type='number'
              name='to'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.to} />
            {errors.to && touched.to && errors.to}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Converter;
