<template>
  <section class="sort-board">
    <div class="bar" v-for="idx in 20" :key="idx" :style="barStyle(idx)" />
    <div class="index-highlight"></div>
  </section>
</template>

<script>
export default {
  props: {
    inputList: Array,
    alpha: Number,
    beta: Number,
  },
  computed: {
    list: {
      get() {
        return this.inputList;
      },
      set() {},
    },
  },
  watch: {
    alpha(v) {
      console.log(`alpha: ${v}`);
    },
    beta(v) {
      console.log(`beta: ${v}`);
    },
  },
  methods: {
    barStyle(idx) {
      const listIdx = this.list.indexOf(idx);
      const x = 4 * listIdx;
      return {
        height: `${this.list[listIdx] * 1.5}rem`,
        transform: `translateX(${x}rem)`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.sort-board {
  width: 79.3rem;
  height: 32rem;
  margin: 12rem auto 0 auto;
  position: relative;
  .flip-list-move {
    transition: transform 1s;
  }

  .bar {
    width: 3.2rem;
    min-height: 1rem;
    background-color: aquamarine;
    position: absolute;
    bottom: 2rem;
    transition: transform 0.3s;
  }
}
</style>
