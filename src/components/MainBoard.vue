<template>
  <div class="mainWrapper">
    <div class="slider">
      <img src="../assets/logo.png" class="vue-logo" />
      <h1>Slider Part</h1>
      <h2 class="vue-logo-font">Vuestagram</h2>
    </div>
    <div class="card-wrapper">
      <div v-for="(a, i) in vuestaData" :key="i" class="card">
        <div class="card-nav">
          <img class="user-image" :src="`${a.userImage}`" />
          <p>{{ a.name }}</p>
        </div>
        <img class="post-image" :src="`${a.postImage}`" />
        <div class="emoticons">
          <p class="emoticon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <span> {{ a.likes }}</span>
          </p>
          <p class="emoticon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </p>
          <p class="emoticon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </p>
        </div>
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
  // background-color: chocolate;
  height: 100vh;
}
.card-nav {
  display: flex;
  align-items: center;
  padding-bottom: 6px;
}
.user-image {
  width: 35px;
  height: 35px;
  border-radius: 99px;
  margin-right: 6px;
}
.post-image {
  width: 468px;
  border-radius: 3px;
}
.slider {
  background: lightgreen;
  padding: 15px;
  display: flex;
  align-items: center;
  .vue-logo {
    display: none;
  }
  .vue-logo-font {
    display: none;
  }
}

.card-wrapper {
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  width: 468px;

  justify-content: center;
  align-items: center;
}
.emoticons {
  display: flex;
  .emoticon {
    display: flex;
    align-items: center;
  }

  svg {
    width: 24px;
    height: 24px;
    padding: 8px;

    &:hover {
      color: #9ca3af;
    }
  }
}
.card {
  border-bottom: #dbdbdb solid 1px;
  padding-top: 50px;
  padding-bottom: 20px;
}
@media (max-width: 1000px) {
  .slider {
    .vue-logo {
      width: 24px;
      height: 24px;
      display: block;
      margin-right: 10px;
    }
    .vue-logo-font {
      display: block;
    }
    h1 {
      display: none;
    }
  }
}
@media (max-width: 500px) {
  img {
    max-width: 100%;
    height: auto;
  }

  .mainWrapper {
    padding: 0;
    max-width: 100%;
  }
  .card-wrapper {
    padding: 0;
  }
  .post-image {
    max-width: 100%;
    height: auto;
  }
  .slider {
    justify-content: center;
    max-width: 100%;
    // display: none;
  }
}
</style>
