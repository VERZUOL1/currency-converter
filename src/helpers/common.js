import { DateTime } from 'luxon';

const EXCHANGE_RATE = 'https://api.exchangeratesapi.io/latest';

export const fetchRate = base => fetch(`${EXCHANGE_RATE}?base=${base}`)
  .then(res => res.json())
  .then(res => res);

export const getConvertationResult = async (from, to, amount) => {
  try {
    const data = await fetchRate(from);
    if (data && data.rates) {
      const rate = data.rates[to];

      return {
        date: DateTime.fromISO(data.date).toFormat('MM-dd-yyyy hh:mm a'),
        value: (amount * rate).toFixed(2),
        amount,
        from,
        to
      };
    }
    return null;
  } catch (e) {
    console.log(e);

    return null;
  }
};
