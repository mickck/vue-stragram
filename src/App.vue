<template>
  <div class="wrapper">
    <div class="slider-bar"></div>
    <div class="left-bar"></div>
    <MainBoard></MainBoard>
  </div>
</template>

<script>
import MainBoard from "./components/MainBoard.vue";

export default {
  name: "App",

  data() {
    return {};
  },
  components: {
    MainBoard,
  },

  methods() {},
  mounted() {
    this.$store.dispatch("getStaData");
  },
};
</script>

<style lang="scss">
body {
  margin: 0px;
}
.slider-bar {
  padding-top: 20px;
  background-color: black;
}
.wrapper {
  display: flex;
}

.left-bar {
  float: left;
  background-color: cornflowerblue;
  width: 335px;
  height: 100vh;
  left: 0;
  padding: 20px;
}
</style>
