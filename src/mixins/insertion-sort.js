export const insertionSortMixin = {
  methods: {
    insertionSort() {
      for (let i = 1; i < this.inputArr.length; i++) {
        let left = i - 1;
        const current = this.inputArr[i];
        while (left >= 0 && this.inputArr[left] > current) {
          this.$set(this.inputArr, left + 1, this.inputArr[left]);
          left--;
        }
        this.$set(this.inputArr, left + 1, current);
      }
    },
  },
};

export default insertionSortMixin;
