<template>
  <div class="mainWrapper">
    <div class="slider-wrapper">
      <div class="slider">
        <img src="../assets/logo.png" class="vue-logo" />
        <h1>Vuestagram</h1>
        <h2 class="vue-logo-font">Vuestagram</h2>
      </div>
    </div>
    <div class="card-wrapper">
      <div v-for="(vuesta, i) in vuestaData" :key="i" class="card">
        <div class="card-nav">
          <img class="user-image" :src="`${vuesta.userImage}`" />
          <p>{{ vuesta.name }}</p>
        </div>
        <img class="post-image" :src="`${vuesta.postImage}`" />
        <div>
          <p class="post-content">{{ vuesta.content }}</p>
        </div>
        <div class="emoticons">
          <!-- heart likes -->
          <p class="emoticon">
            <svg
              @click="$store.commit('setLikes', { vuesta })"
              xmlns="http://www.w3.org/2000/svg"
              :fill="vuesta.liked ? 'red' : 'none'"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              :stroke="vuesta.liked ? 'red' : 'currentColor'"
              class="w-6 h-6"
              :class="vuesta.liked ? ' ' : 'emoticon-active'"
            >
              <!-- :stroke-width="vuesta.liked ? '3' : '1.5'" -->
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <span style="user-select: none"> {{ vuesta.likes }}</span>
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
        <p class="post-date">{{ vuesta.date }}</p>
      </div>
    </div>
  </div>
  <ModalCard />
  <div class="bottom-bar">
    <p class="bottom-bar-icons" @click="$store.commit('setNextStep', 1)">
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
          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

    
    </p>
  </div>
</template>
<script>
import ModalCard from "./ModalBoard.vue";

export default {
  name: "MainBoard",
  computed: {
    vuestaData() {
      let vuestaData = this.$store.state.vuestaData;
      return vuestaData.sort((a, b) => b.id - a.id);
    },
  },
  components: {
    ModalCard,
  },
};
</script>
<style lang="scss">
.mainWrapper {
  margin: 0 auto;
  max-width: 470px;
  width: 100%;
  height: 100vh;
}
.card-nav {
  display: flex;
  align-items: center;
  padding-bottom: 17px;
}
.user-image {
  margin-left: 10px;
  width: 35px;
  height: 35px;
  border-radius: 99px;
  margin-right: 6px;
}
.post-image {
  width: 468px;
  border-radius: 3px;
}
.post-content {
  color: #222222fb;
  padding: 4px;
}
.slider {
  // background: lightgreen;
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
    justify-content: center;
  }

  svg {
    width: 24px;
    height: 24px;
    padding: 8px;
    cursor: pointer;
    &:hover {
      color: #9ca3af;
    }
  }
}
.emoticon-active {
  &:active {
    animation: mm 0.7s;
    -webkit-animation: mm 0.7s;
    @keyframes mm {
      25% {
        transform: scale(1.3, 1.3);
      }
    }
    @-webkit-keyframes mm {
      25% {
        -webkit-transform: scale(1.3, 1.3);
      }
    }
  }
}
.card {
  border-bottom: #dbdbdb solid 1px;
  padding-top: 50px;
  padding-bottom: 20px;
}
.post-date {
  font-size: 10px;
  margin-left: 10px;
  color: #9ca3af;
}
.bottom-bar{
  display: none;
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
  .bottom-bar{
    position: fixed;
    display: block;
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    width: 100%;
    bottom: 0;
    padding: 10px;
    background-color: #dbdbdb;
    svg {
    height: 26px;
    width: 26px;
    margin-right: 10px;
    font-weight: 600;  cursor: pointer;
    &:hover {
      color: #9ca3af;
    }
  }
  }
}
@media (max-width: 500px) {
  img {
    // width: 95%;
    height: auto;
  }

  .mainWrapper {
    padding: 0;

    // width: 100%;
  }
  .card-wrapper {
    padding: 0;
  }
  .post-image {
    max-width: fit-content;
    height: auto;
  }
  .slider-wrapper {
    display: flex;
    width: 100vw;
    margin: 0 auto;
    justify-content: center;
  }
}
</style>
