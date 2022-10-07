// eslint-disable-next-line no-unused-vars
import { dataTotal } from '../src/data';

test('dataTotal sort', () => {
  // eslint-disable-next-line no-unused-vars
  const data = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const expected = dataTotal(data);
  const result = dataTotal(data);
  expect(result).toEqual(expected);
});
