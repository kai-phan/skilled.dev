import { DynamicArray } from '@/arrays/implement_an_array';

describe('Implement an array', () => {
  let dynamicArray: DynamicArray<number>;

  beforeEach(() => {
    dynamicArray = new DynamicArray<number>();
    dynamicArray.push(0);
    dynamicArray.push(1);
    dynamicArray.push(2);
  });

  test('push', () => {
    dynamicArray.push(3);
    expect(dynamicArray.length).toBe(4);
    expect(dynamicArray.data).toStrictEqual({ '0': 0, '1': 1, '2': 2, '3': 3 });
  });

  test('pop', () => {
    expect(dynamicArray.pop()).toBe(2);
    expect(dynamicArray.length).toBe(2);
    expect(dynamicArray.data).toStrictEqual({ '0': 0, '1': 1 });
  });

  test('insert', () => {
    expect(dynamicArray.insert(1, 3)).toStrictEqual({ '0': 0, '1': 3, '2': 1, '3': 2 });
    expect(dynamicArray.length).toBe(4);
  });

  test('remove', () => {
    expect(dynamicArray.remove(1)).toBe(1);
    expect(dynamicArray.length).toBe(2);
    expect(dynamicArray.data).toStrictEqual({ '0': 0, '1': 2 });
  });

  test('get', () => {
    expect(dynamicArray.get(1)).toBe(1);
  });

  test('shift', () => {
    expect(dynamicArray.shift()).toBe(0);
    expect(dynamicArray.length).toBe(2);
    expect(dynamicArray.data).toStrictEqual({ '0': 1, '1': 2 });
  });

  test('unshift', () => {
    expect(dynamicArray.unshift(3)).toStrictEqual({ '0': 3, '1': 0, '2': 1, '3': 2 });
    expect(dynamicArray.length).toBe(4);
  });

});