<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
    />

    <HomePage></HomePage>
  </div>
</template>

<script>
import HomePage from "./components/HomePage";

export default {
  name: "App",
  components: {
    HomePage,
  },

  modules: ["nuxt-buefy"],
};
</script>

<style>
#app {
  -webkit-font-smoothing-: antialiasing;
}
</style>
