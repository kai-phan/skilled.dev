interface HashTable<T> {
  [key: string]: T;
}

class DynamicArray<T> {
  data: HashTable<T>;
  length: number;

  constructor() {
    this.length = 0;
    this.data = {}
  }

  get(index: number) {
    return this.data[index];
  }

  push(item: T) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    if (this.length === 0) return undefined;

    const popItem = this.data[this.length - 1]
    delete this.data[this.length - 1];
    this.length--;

    return popItem;
  }

  insert(index: number, item: T) {
    if (index < 0 || index > this.length - 1) return undefined;

    this.length++;

    for (let i = this.length - 1; i > index; i--) {
      this.data[i] = this.data[i - 1]
    }

    this.data[index] = item;
    return this.data;
  }

  remove(index: number) {
    if (this.length === 0 || index < 0 || index > this.length - 1) return undefined;

    const removeItem = this.data[index]

    for (let i = index; i < this.length - 1; i++) {
      console.log(this.data[i +1])
      this.data[i] = this.data[i + 1]
    }

    delete this.data[this.length-1];
    this.length--;
    return removeItem;
  }
}
