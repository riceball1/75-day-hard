<template>
  <header>
    <h1>{{ msg }}</h1>
    <div class="header-subsection">
      <p>A Tracking App for 75 Day Hard Challenge</p>
      <div class="header-controls">
        <button class="login" @click="handleLogin()">Login</button>
        <button @click="handleResetChallenge()">
          Restart Challenge
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainPageHeader",
  props: {
    msg: String,
  },
  methods: {
    handleResetChallenge() {
      this.$emit("resetChallenge");
    },
    handleLogin() {
      this.$emit("login");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}

button {
  width: 100px;
  height: 40px;
}

.header-subsection {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 60%;
  margin: 10px auto;
}

.header-controls {
  display: flex;
  justify-content: space-between;
}
</style>
