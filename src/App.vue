<template>
  <MainPage />
</template>

<script>
import MainPage from './pages/MainPage.vue'

export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  width: 100%;
  height: 100%;
}

body, html {
  background-color: #000;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
