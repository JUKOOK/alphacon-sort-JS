<template>
  <div id="app">
    <SortWorld />
  </div>
</template>

<script>
import SortWorld from "./components/SortWorld.vue";

export default {
  name: "App",
  components: {
    SortWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
