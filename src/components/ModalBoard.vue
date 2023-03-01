<template>
  <span v-if="$store.state.step == 0"></span>
  <div v-if="$store.state.step != 0" class="modal-wrapper">
    <span
      class="modal-wrapper-exit-button"
      @click="
        () => {
          $store.commit('setNextStep', 0);
          imageUrl = null;
        }
      "
      ><svg
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
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </span>
    <!-- Get Image -->
    <div v-if="$store.state.step == 1" class="modal-card">
      <div class="modal-create-navbar">
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span class="modal-create-font">Create new post</span>
        <p
          @click="
            $store.commit('setUploadImage', { stepNumber: 1, image: imageUrl })
          "
        >
          Next
        </p>
      </div>

      <div class="modal-upload-wrapper" v-if="imageUrl">
        <img
          class="modal-filter-image"
          :class="`${filter}`"
          :src="`${imageUrl}`"
        />
      </div>
      <div class="modal-upload-wrapper" v-else>
        <input
          type="file"
          id="file"
          @change="upload"
          accept="image/*"
          class="input-display"
        />
        <label class="modal-upload-image" for="file">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <span>Click here to upload your image</span>
        </label>
      </div>
    </div>

    <!-- Filter Image -->
    <div v-if="$store.state.step == 2" class="modal-card">
      <div class="modal-filter-navbar">
        <p @click="$store.commit('setNextStep', 1)">Back</p>
        <span class="modal-create-font">Add Filter</span>
        <p @click="$store.commit('setNextStep', 3)">Next</p>
      </div>

      <div class="modal-filter-wrapper">
        <img
          class="modal-filter-image"
          :class="`${filter}`"
          :src="`${imageUrl}`"
        />
      </div>
      <div class="filters">
        <div
          class="filter-item"
          :class="filter"
          v-for="filter in $store.state.instaFilterName"
          :key="filter"
          @click="getFilter"
          :style="{ backgroundImage: `url(${imageUrl})` }"
        >
          <span>{{ filter }}</span>
        </div>
      </div>
    </div>

    <!--Writing and Poasting -->
    <div v-if="$store.state.step == 3" class="modal-card">
      <div class="modal-filter-navbar">
        <p @click="$store.commit('setNextStep', 2)">Back</p>
        <span class="modal-create-font">Create new post</span>
        <p @click="$store.commit('setPost', { filter, imageUrl, postText })">
          Post
        </p>
      </div>

      <div class="modal-filter-wrapper">
        <img
          class="modal-filter-image"
          :class="`${filter}`"
          :src="`${imageUrl}`"
        />
      </div>
      <div class="write-box">
        <textarea
          class="write-box"
          @input="
            (e) => {
              postText = e.target.value;
            }
          "
          placeholder="Write a caption..."
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalCard",
  data() {
    return {
      imageUrl: "",
      filter: "",
      postText: "",
    };
  },
  methods: {
    upload(e) {
      let file = e.target.files;

      if (
        file[0].type == "image/png" ||
        file[0].type == "image/gif" ||
        file[0].type == "image/jpeg"
      ) {
        let url = URL.createObjectURL(file[0]);
        this.imageUrl = url;
        this.$store.commit("setNextStep", 2);
      } else {
        alert("Put an image file please.");
        return "";
      }
    },
    getFilter(e) {
      this.filter = e.target.classList[1];
      console.log(this.filter);
    },
  },
  watch: {},
};
</script>
<style lang="scss">
.modal-wrapper {
  // display: none;
  display: flex;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  top: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(41, 40, 40, 0.8);
}
.modal-card {
  transition: all 5s ease-out;
  min-width: 360px;
  width: 710px;
  height: 80%;
  background-color: white;
  z-index: 99999;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  animation: s 0.5s;
  -webkit-animation: s 0.5s;
  @keyframes s {
    0% {
      transform: scale(0.5, 0.5);
    }
    100% {
      transform: scale(1, 1);
    }
  }
  span {
    justify-content: center;
    align-items: center;
  }
}
.modal-create-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  p {
    cursor: pointer;
  }
  span {
    user-select: none;
  }
}
.modal-create-font {
  font-size: 18px;
}

.modal-upload-wrapper {
  border-top: #dbdbdb solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.modal-wrapper-exit-button {
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px;
  z-index: 9999;
  color: #dbdbdb;
  :hover {
    cursor: pointer;
    color: white;
  }
  svg {
    width: 30px;
    height: 30px;
  }
}
.modal-upload-image {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 70px;
  margin-bottom: 30px;

  cursor: pointer;
  svg {
    height: 150px;
    width: 150px;
    padding-bottom: 20px;
  }
  &:hover {
    border: 2px dotted #cbd5e1;
    border-radius: 20px;

    span {
      transition: all 0.2s ease;
      background-color: rgb(6 95 70);
    }
  }
  span {
    pointer-events: none;
    background-color: rgb(5 150 105);
    color: white;
    // border: 1px solid black;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
  resize: none;
}
.input-display {
  display: none;
}
.modal-filter-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  p {
    cursor: pointer;
  }
}
.modal-filter-wrapper {
  border-top: #dbdbdb solid 1px;
  padding: 20px;
}
.modal-filter-image {
  min-width: 390px;
  max-height: 390px;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}

.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.filter-item {
  width: 90px;
  height: 90px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  p {
    font-size: small;
    text-shadow: 10px;
  }
}

@media (max-width: 400px) {
  .modal-upload-image {
    width: 70%;
  }
}

 @media(max-height:1000px){
  .modal-card {height: 90%;
 }}
</style>