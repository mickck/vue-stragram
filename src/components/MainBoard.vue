<template>
  <div class="mainWrapper">
    <div class=""></div>
    <div class="card">
      <div v-for="(a, i) in vuestaData" :key="i">
        <p>{{ a.id }}</p>
        <p>{{ a.name }}</p>
        <div
          class="post-image"
          :style="`background-image: url(${a.postImage}) `"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MainBoard",
  computed: {
    vuestaData() {
      return this.$store.state.vuestaData;
    },
  },
};
</script>
<style lang="scss">
.mainWrapper {
  margin: 0 auto;
  max-width: 470px;
  background-color: chocolate;
  padding: 0;
}
.post-image {
  height: 100%;
  width: 100%;
}
.card {
  width: 460px;
}
</style>
