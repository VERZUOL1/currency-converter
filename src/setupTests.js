const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

// eslint-disable-next-line no-undef
jest.mock('luxon/src/datetime', () => ({
  local: () => ({
    diff: () => ({
      get: () => 10
    })
  }),
  fromISO: () => ({
    toLocaleString: () => 'Jan 1, 1970, 0:00:00 AM',
    toFormat: () => '10-09-2019',
    toRelative: () => 'few seconds ago'
  })
}));

// eslint-disable-next-line no-undef
jest.mock('console', () => ({
  log: input => input
}));
