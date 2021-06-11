export const quickSortMixin = {
  methods: {
    quickSort() {
      const right = this.inputArr.length - 1;
      this.inputArr = this._quickSort([...this.inputArr], 0, right);
    },

    _partition(arr, left, right) {
      let pivot = arr[Math.floor((right + left) / 2)];
      let i = left;
      let j = right;

      while (i <= j) {
        while (arr[i] < pivot) {
          this.compare++;
          i++;
        }
        while (arr[j] > pivot) {
          this.compare++;
          j--;
        }
        if (i <= j) {
          this.move += 2;
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          i++;
          j--;
        }
      }
      return i;
    },

    _quickSort(arr, left, right) {
      let index;
      if (arr.length > 1) {
        index = this._partition(arr, left, right);
        if (left < index - 1) {
          this._quickSort(arr, left, index - 1);
        }
        if (index < right) {
          this._quickSort(arr, index, right);
        }
      }

      return arr;
    },
  },
};

export default quickSortMixin;
