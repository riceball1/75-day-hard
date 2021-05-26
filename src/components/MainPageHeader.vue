<template>
  <header>
    <div class="counter"><h1>{{ currentDay }}</h1><p>/75 Days Hard Challenge</p></div>
    <div class="header-subsection">
        <button class="login" @click="handleLogin()">login</button>
        <button @click="handleResetChallenge()" class="reset-button">
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
header {
  display: flex;
  justify-content: center;
  align-content: stretch;
  align-items: center;
  width: 80%;
  margin: 0 auto;
}
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
  margin: 5px;
  font-weight: bold;
}
.reset-button {
  background-color: pink;
  color: #000;
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
}
@media only screen and (max-width: 600px) {
  button {
    width: 50%;
    height: 50px;
  }
  header {
    justify-content: space-between;
  }
  .header-subsection {
    flex-direction: column;
    align-items: flex-end;
  }
}
</style>
