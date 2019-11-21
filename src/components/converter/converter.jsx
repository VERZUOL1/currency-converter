import React, { useCallback, useState } from 'react';

// Components
import ConverterForm from '../converter-form';

// Helpers
import { getConvertationResult } from '../../helpers/common';

// Constants
import { CURRENCIES_LIST } from '../../constants/common';

import './converter.scss';

const Converter = () => {
  const [result, setResult] = useState(null);

  const handleSubmit = useCallback(async ({ amount, from, to }) => {
    setResult(await getConvertationResult(from, to, amount));
  }, []);

  return (
    <div className='pure-g'>
      <div className='pure-container converter pure-u-xl-1-3 pure-u-md-1-2 pure-u-sm-1 pure-u-1'>
        <h3 className='title'>Currency converter</h3>
        <ConverterForm currenciesList={CURRENCIES_LIST} onSubmit={handleSubmit} />
        {result && (
          <div className='converter-results__wrapper'>
            <div>At {result.date}</div>
            <div className='bold'>{result.amount} {result.from}</div>
            <div>equal to</div>
            <div className='bold'>{result.value} {result.to}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Converter;
