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
    <button class="reset" @click="resetInput">reset</button>
    <SortBoard :input-list="inputArr" :alpha="alphaIdx" :beta="betaIdx" />
  </div>
</template>

<script>
const UNSORTED = getUnSorted();

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
      alphaIdx: 0,
      betaIdx: 0,
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
      this.alphaIdx = 0;
      this.betaIdx = 0;
    },
  },
};
</script>
