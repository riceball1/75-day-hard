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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

button {
  width: 100px;
  height: 40px;
}

.list {
  width: 60%;
  margin: 10px auto;
  background-color: #2c3e50;
  color: #ffffff;
  padding: 20px;
  border-radius: 6px;
}

.list > li {
  display: block;
  text-align: left;
  margin-bottom: 5px;
}

.tracker {
  margin: 10px auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  width: 60%;
  flex-direction: column;
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

.list-footer {
  width: 60%;
  margin: 10px auto;
}

@media only screen and (max-width: 600px) {
  .list {
    width: 80%;
  }
}
</style>
