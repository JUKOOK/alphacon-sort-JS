<template>
  <section class="sort-board">
    <!-- <transition-group name="flip-list" tag="div"> -->
    <div class="bar" v-for="(v, i) in list" :key="i" :style="barStyle(v)" />
    <!-- </transition-group> -->

    <div class="index-highlight"></div>
  </section>
</template>

<script>
export default {
  props: {
    inputList: Array,
    idx: Number,
  },
  data() {
    return {
      list: [],
    };
  },
  watch: {
    inputList: {
      // get, set..
      deep: true,
      handler(list) {
        this.list = [...list];
      },
    },
  },
  methods: {
    barStyle(v) {
      const x = 3.6 * v;
      //   const x = v;
      return {
        height: `${v}rem`,
        transform: `translateX(${x}rem)`,
        // transition: "transform 0.3s",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.sort-board {
  width: 107.6rem;
  height: 32rem;
  margin: 12rem auto 0 auto;
  //   padding: 0 12rem;
  position: relative;
  .flip-list-move {
    transition: transform 1s;
  }

  .bar {
    width: 3rem;
    min-height: 1rem;
    background-color: aquamarine;
    position: absolute;
    bottom: 2rem;
    transition: transform 0.3s;
  }
}
</style>
