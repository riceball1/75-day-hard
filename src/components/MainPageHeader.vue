<template>
  <header>
    <div class="counter"><h1>{{ currentDay }}</h1><p>/75 Days Hard Challenge</p></div>
    <div class="header-subsection">
        <button class="login" @click="handleLogin()">login</button>
        <button @click="handleResetChallenge()">
          reset
        </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainPageHeader",
  props: {
    currentDay: Number,
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
h1 {
  font-size: 10rem;
  color:#42b983;
  margin: 0;
  line-height: 8rem;
}
button {
  width: 100px;
  height: 40px;
  background-color: #000;
  color: #42b983;
  border-radius: 6px;
  text-transform: uppercase;
  border: 1px solid lightgray;
  margin-left: 5px;
}
.counter {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.counter p {
  color: lightgray;
  font-weight: bold;
}
.header-subsection {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  /* margin: 10px auto; */
}
@media only screen and (max-width: 600px) {
  button {
    width: 100%;
    height: 50px;
  }
}
</style>
