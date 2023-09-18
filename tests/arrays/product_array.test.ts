import { productArray } from '@/arrays/product_array';

const tests = [
  {
    input: [1, 2, 3, 4, 5],
    expected: [120, 60, 40, 30, 24],
    description: 'simple input',
  },
  {
    input: [0, 2, 3, 4, 5],
    expected: [120, 0, 0, 0, 0],
    description: 'with 0',
  },
  {
    input: [-1, 2, 3, 4, 5],
    expected: [120, -60, -40, -30, -24],
    description: 'with negative int',
  },
];

describe('productArray', () => {
  test.each(
    tests.map((t) => {
      return [t.description, { input: t.input, expected: t.expected }];
    }),
  )('%s', (_, { input, expected }) => {
    expect(productArray(input)).toEqual(expected);
  });
});
