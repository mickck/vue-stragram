<template>
  <div class="wrapper">
    <!-- <div class="slider-bar"></div> -->
    <div class="left-bar"></div>
    <div class="right-bar"></div>
    <div class="content"><MainBoard></MainBoard></div>
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
  margin: 0;
  p {
    margin: 0;
  }
  h1 {
    margin: 0;
  }
}
.slider-bar {
  padding-top: 50px;
  background-color: black;
  // width: 1000px;
}
.wrapper {
}

.left-bar {
  position: absolute;
  background-color: cornflowerblue;
  width: 335px;
  height: 100vh;
  left: 0;
}
.content {
  top: 0;
}
.right-bar {
  position: absolute;
  background-color: crimson;
  width: 335px;
  height: 100vh;
  right: 100px;
}

@media (max-width: 1400px) {
  .right-bar {
    display: none;
  }
  .left-bar {
    width: 250px;
  }
}
@media (max-width: 1000px) {
  .left-bar {
    display: none;
  }
}
@media (max-width: 500px) {
  .slider-bar {
    display: none;
  }
}
</style>
