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
    <button class="btn-reset" @click="resetInput">리셋</button>
    <SortBoard :input-list="inputArr" :compare="compare" :move="move" />
  </div>
</template>

<script>
const UNSORTED = getUnSorted(20);

import { getUnSorted } from "../utils";

import {
  bubbleSortMixin,
  insertionSortMixin,
  selectionSortMixin,
  quickSortMixin,
  mergeSortMixin,
} from "../mixins";

import SortBoard from "./SortBoard.vue";

export default {
  components: {
    SortBoard,
  },
  mixins: [
    bubbleSortMixin,
    insertionSortMixin,
    selectionSortMixin,
    quickSortMixin,
    mergeSortMixin,
  ],
  data() {
    var self = this;
    return {
      inputArr: [],
      compare: 0,
      move: 0,
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
          key: "merge",
          name: "병합정렬",
          onClick: function() {
            self.mergeSort();
          },
        },
        {
          key: "quick",
          name: "퀵정렬",
          onClick: function() {
            self.quickSort();
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
      this.compare = 0;
      this.move = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 2.4rem;
}
.btn-sort,
.btn-reset {
  width: auto;
  padding: 4px 0.8rem;
  margin: 2px 1.6rem;
  font-size: 1.6rem;
  border-radius: 4px;
}
</style>
