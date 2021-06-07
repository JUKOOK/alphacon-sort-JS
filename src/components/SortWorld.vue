<template>
  <div class="sort-world">
    <h1 class="title">정렬을 알아보자</h1>
    <button
      class="btn-sort"
      v-for="sort in sorts"
      :key="sort.key"
      @click="sort.onClick"
    >
      {{ sort.name }}
    </button>
    <SortBoard :input-list="inputArr" :idx="index" />
  </div>
</template>

<script>
const UNSORTED = getUnSorted();

import { getUnSorted } from "../utils";
// import { bubbleSort } from "../core/bubble-sort";

import SortBoard from "./SortBoard.vue";

export default {
  components: {
    SortBoard,
  },
  data() {
    var self = this;
    return {
      inputArr: [],
      index: 0,
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
      this.index = 0;
    },
    bubbleSort() {
      console.log("버블");
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
