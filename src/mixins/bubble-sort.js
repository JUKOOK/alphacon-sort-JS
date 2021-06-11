export const bubbleSortMixin = {
  methods: {
    bubbleSort() {
      for (let i = 0; i < this.inputArr.length; i++) {
        let swap = false;
        for (let j = 0; j < this.inputArr.length - 1 - i; j++) {
          this.compare++;
          if (this.inputArr[j] > this.inputArr[j + 1]) {
            this.move += 2;
            swap = true;
            const alpha = this.inputArr[j];
            const beta = this.inputArr[j + 1];
            this.$set(this.inputArr, j, beta);
            this.$set(this.inputArr, j + 1, alpha);
          }
        }
        if (!swap) break;
      }
    },
  },
};

export default bubbleSortMixin;
