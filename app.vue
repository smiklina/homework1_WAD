<template>
    <div id="app">
      <header></header>
      <RouterView />
      <footer></footer>
    </div>
  </template>
  
  <script>
  import header from "./components/header.vue";
  import postList from "./components/postList.vue";
  import footer from "./components/footer.vue";
  import {RouterView} from 'vue-router'
  export default {
    name: "app",
    components: {
      header,
      postList,
      footer,
    }
  };
  </script>