const merge = (left, right) => {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }

  return result;
};

export const mergeSortMixin = {
  methods: {
    mergeSort() {
      this.inputArr = this._mergeSort(this.inputArr);
    },
    _mergeSort(arr) {
      if (arr.length === 1) {
        return arr;
      }
      const middle = Math.floor(arr.length / 2);
      const left = arr.slice(0, middle);
      const right = arr.slice(middle, arr.length);

      return merge(this._mergeSort(left), this._mergeSort(right));
    },
  },
};

export default mergeSortMixin;
