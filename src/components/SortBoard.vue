<template>
  <section class="sort-board">
    <div class="count">
      <p class="compare text">비교연산 : {{ compare }}</p>
      <p class="move text">이동연산 : {{ move }}</p>
    </div>
    <div class="bar" v-for="idx in length" :key="idx" :style="barStyle(idx)" />
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
    length() {
      return this.list.length;
    },
  },
  methods: {
    barStyle(idx) {
      const listIdx = this.list.indexOf(idx);
      const offsetX = 960 / this.length - 4;
      const offsetY = 320 / this.length;
      const x = (offsetX + 4) * listIdx;
      return {
        width: `${offsetX}px`,
        height: `${this.list[listIdx] * offsetY}px`,
        transform: `translateX(${x}px)`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.sort-board {
  width: 96rem;
  height: 32rem;
  margin: 12rem auto 0 auto;
  position: relative;
  .count {
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: -8rem;
    .text {
      width: 18rem;
      margin-left: 1.6rem;
      font-size: 2.4rem;
      font-weight: 600;
    }
  }

  .bar {
    min-height: 1rem;
    background-color: aquamarine;
    position: absolute;
    bottom: 0;
    transition: transform 0.3s;
  }
}
</style>
