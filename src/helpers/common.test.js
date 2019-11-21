import { getConvertationResult } from './common';

describe('Common helpers', () => {
  test('getConvertationResult should return results object', () => {
    return getConvertationResult('USD', 'EUR', 10)
      .then(res => {
        expect(res).toBeTruthy();
      });
  });
});
