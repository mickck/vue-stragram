import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "Mike Kim",
      vuestaData: [],
    };
  },
  mutations: {
    setStaData(state, data) {
      state.vuestaData = data;
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
