import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "Mike Kim",
      vuestaData: [],
      originVuestaData: [],
      step: 0,
      imageUrl: "",
      instaFilterName: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
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
    //move to Nextstep
    setNextStep(state, payload) {
      state.step = payload;
      // console.log(state.step);
    },
    // getImage, go to the filter Card,post
    setUploadImage(state, payload) {
      if (state.step == 1 && (payload.image == null || payload.image == "")) {
        return alert("Please upload an Image.");
      }
      state.step = payload.stepNumber;
    },
    setPost(state, payload) {
      const today = new Date();
      const date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();

      const dateTime = date;
      const timestamp = dateTime;
      if (payload.postText == "" || payload.postText == null) {
        return alert("Please type your content.");
      }
      state.vuestaData.push({
        id: state.vuestaData.length,
        name: "Mick",
        userImage: "https://picsum.photos/100/?image=18",
        postImage: payload.imageUrl,
        likes: 0,
        date: timestamp,
        liked: false,
        content: payload.postText,
        filter: payload.filter,
      });
      state.step = 0;
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
