<template>
  <ul>
    <h1 class="left-bar-sitename">VueStagram</h1>
    <li class="left-bar-icons">
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
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
      <span>Home</span>
    </li>
    <li class="left-bar-icons" @click="$store.commit('setNextStep', 1)">
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

      <span>Create</span>
    </li>
  </ul>
</template>
<script>
export default {
  name: "LeftBar",
};
</script>
<style lang="scss">
.left-bar-sitename {
  margin-bottom: 20px;
}
.left-bar-icons {
  padding: 15px;
  display: flex;
  align-items: center;
  margin-right: 20px;

  svg {
    height: 26px;
    width: 26px;
    margin-right: 10px;
    font-weight: 600;
  }
  span {
    font-weight: 600;
  }
  &:hover {
    background-color: #f5f5f5;
    transition: all 1.5s ease-out;
    border-radius: 15px;
    cursor: pointer;
    svg {
      animation: left-bar-svg 0.7s both;
      -webkit-animation: left-bar-svg 0.7s both;
      @keyframes left-bar-svg {
        0% {
          transform: scale(1, 1);
        }
        100% {
          transform: scale(1.07, 1.07);
        }
      }
      @-webkit-keyframes left-bar-svg {
        0% {
          transform: scale(1, 1);
        }
        100% {
          transform: scale(1.07, 1.07);
        }
      }
    }
  }
}

</style>
