export const selectionSortMixin = {
  methods: {
    selectionSort() {
      for (let i = 0; i < this.inputArr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < this.inputArr.length; j++) {
          this.compare++;
          if (this.inputArr[j] < this.inputArr[minIndex]) {
            minIndex = j;
          }
        }
        if (i !== minIndex) {
          this.move += minIndex - i;
          const alpha = this.inputArr[i];
          const beta = this.inputArr[minIndex];
          this.$set(this.inputArr, i, beta);
          this.$set(this.inputArr, minIndex, alpha);
        }
      }
    },
  },
};

export default selectionSortMixin;
