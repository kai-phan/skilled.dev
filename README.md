# [skilled.dev](https://skilled.dev)

A collection of resources for developers who want to learn to code.

### Clone the repo
```
git clone git@github.com:kai-phan/skilled.dev.git
```

### Install dependencies
```
yarn install
```

### Run the file
```
npx ts-node src/{file}.ts
```

### Run the tests
```
yarn test
```
# Contents
1. Arrays
   1. [Implement an arrays](https://github.com/kai-phan/skilled.dev/blob/main/src/arrays/implement_an_array.ts)
   ```
    const myArray = new DynamicArray();
   ```
   2. [Walk a matrix](https://github.com/kai-phan/skilled.dev/blob/main/src/arrays/walk_a_matrix.ts)
   ```
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
   
    walkMatrix(matrix);
   
    return [
      1, 2, 3, 6,
      9, 8, 7, 4,
      5,
    ]; 
   ```