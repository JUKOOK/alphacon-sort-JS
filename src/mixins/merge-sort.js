export const mergeSortMixin = {
  methods: {
    mergeSort() {
      this.inputArr = this._mergeSort(this.inputArr);
    },
    _merge(left, right) {
      let result = [];

      while (left.length && right.length) {
        this.compare++;
        if (left[0] <= right[0]) {
          this.move++;
          result.push(left.shift());
        } else {
          this.move++;
          result.push(right.shift());
        }
      }

      while (left.length) {
        this.move++;
        result.push(left.shift());
      }
      while (right.length) {
        this.move++;
        result.push(right.shift());
      }

      return result;
    },
    _mergeSort(arr) {
      if (arr.length === 1) {
        return arr;
      }
      const middle = Math.floor(arr.length / 2);
      const left = arr.slice(0, middle);
      const right = arr.slice(middle, arr.length);

      return this._merge(this._mergeSort(left), this._mergeSort(right));
    },
  },
};

export default mergeSortMixin;
