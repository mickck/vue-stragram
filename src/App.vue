<template>
  <div class="wrapper">
    <!-- <div class="slider-bar"></div> -->
    <div class="left-bar">
      <LeftBar></LeftBar>
    </div>
    <div class="right-bar"></div>
    <div class="content">
      <MainBoard></MainBoard>
    </div>
  </div>
</template>

<script>
import MainBoard from "./components/MainBoard.vue";
import LeftBar from "./components/LeftBar.vue";

export default {
  name: "App",

  data() {
    return {};
  },
  components: {
    MainBoard,
    LeftBar,
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
  width: 100%;
  height: 100%;
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
.left-bar {
  position: fixed;
  background-color: rgb(252, 252, 255);
  width: 335px;
  height: 100vh;
  left: 0;
  border-right: #dbdbdb solid 1px;
  padding-top: 40px;
}

.content {
  top: 0;
  margin: 0;
  padding: 0;
}
.right-bar {
  position: fixed;
  // background-color: crimson;
  width: 335px;
  height: 100vh;
  right: 100px;
  z-index: 99;
}

@media (max-width: 1400px) {
  .right-bar {
    position: static;
    display: none;
    width: 0;
  }
  .left-bar {
    width: 250px;
  }
}
@media (max-width: 1000px) {
  .left-bar {
    display: none;
    width: 0;
  }
}
@media (max-width: 500px) {
  .slider-bar {
    // display: none;
  }
  
}

</style>
