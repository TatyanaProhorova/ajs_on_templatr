import healthStatus from '../basic.js';

const dataList = [
  [1, 'Лучник', 10, 'critical'],
  [2, 'Маг', 50, 'wounded'],
  [3, 'Meчник', 75, 'healthy'],
  [4, 'Meчник', 'em', 'not defined'],
];

test.each(dataList)('testing branch %i branch', (branch, character, status, expected) => {
  const result = healthStatus({ name: character, health: status });
  expect(result).toBe(expected);
});

// test('expected status wounded', () => {
//   const result = healthStatus({ name: 'Маг', health: 50 });
//   expect(result).toBe('wounded');
// });

// test('expected status critical', () => {
//   const result = healthStatus({ name: 'Лучник', health: 10 });
//   expect(result).toBe('critical');
// });

// test('expected status healthy', () => {
//   const result = healthStatus({ name: 'Meчник', health: 75 });
//   expect(result).toBe('healthy');
// });

// test('incorrect data', () => {
//   const result = healthStatus({ name: 'Meчник', health:'em' });
//   expect(result).toBe('not defined');
// });
