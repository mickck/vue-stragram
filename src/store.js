import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "Mike Kim",
      vuestaData: [],
      originVuestaData: [],
    };
  },
  mutations: {
    setStaData(state, data) {
      state.originVuestaData = data;
      state.vuestaData = [...state.originVuestaData];
    },
    // Clicked what you like if click  Likes increasing +1 clicked again decrease -1
    setLikes(state, payload) {
      if (!payload.vuesta.liked) {
        payload.vuesta.likes += 1;
        payload.vuesta.liked = true;
      } else if (payload.vuesta.liked) {
        payload.vuesta.likes -= 1;
        payload.vuesta.liked = false;
      }
    },
  },

  actions: {
    async getStaData() {
      try {
        const response = await axios.get("/data.json");
        let data = await response.data;
        this.commit("setStaData", data);
      } catch (err) {
        console.log(err);
      }
    },
  },
});

export default store;
