<template>
  <section class="sort-board">
    <div class="count">
      <p class="compare text">비교연산 : {{ compare }}</p>
      <p class="move text">이동연산 : {{ move }}</p>
    </div>
    <div class="bar" v-for="idx in 20" :key="idx" :style="barStyle(idx)" />
  </section>
</template>

<script>
export default {
  props: {
    inputList: Array,
    compare: Number,
    move: Number,
  },
  computed: {
    list: {
      get() {
        return this.inputList;
      },
      set() {},
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
  .count {
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: -8rem;
    .text {
      width: 16rem;
      margin-left: 2.4rem;
      font-size: 2.4rem;
      font-weight: 600;
    }
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
