<template>
  <div class="sort-world" style="opacity: 0">
    <h1 class="title">정렬을 알아보자</h1>
    <button
      class="btn-sort"
      v-for="sort in sorts"
      :key="sort.key"
      @click="sort.onClick"
    >
      {{ sort.name }}
    </button>
    <!-- SortBoard : inputArr 시각자료 -->
  </div>
</template>

<script>
import { getUnSorted } from "../utils";

const UNSORTED = getUnSorted();

export default {
  data() {
    var self = this;
    return {
      inputArr: null,
      sorts: [
        {
          key: "bubble",
          name: "버블정렬",
          onClick: function() {
            self.bubbleSort();
          },
        },
        {
          key: "insertion",
          name: "삽입정렬",
          onClick: function() {
            self.insertionSort();
          },
        },
        {
          key: "selection",
          name: "선택정렬",
          onClick: function() {
            self.selectionSort();
          },
        },
        {
          key: "quick",
          name: "퀵정렬",
          onClick: function() {
            self.quickSort();
          },
        },
        {
          key: "merge",
          name: "병합정렬",
          onClick: function() {
            self.mergeSort();
          },
        },
      ],
    };
  },
  mounted() {
    this.resetInput();
  },
  methods: {
    resetInput() {
      this.inputArr = [...UNSORTED];
    },
    bubbleSort() {
      console.log(this.inputArr);
    },
    insertionSort() {
      console.log("인");
    },
    selectionSort() {
      console.log("셀");
    },
    quickSort() {
      console.log("퀵");
    },
    mergeSort() {
      console.log("머지");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
