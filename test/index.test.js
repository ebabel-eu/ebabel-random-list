const randomList = require('../index');

test('randomList returns an object with 2 empty arrays when the input is missing', () => {
  const result = randomList();
  expect(result.list).toEqual([]);
  expect(result.rest).toEqual([]);
});
