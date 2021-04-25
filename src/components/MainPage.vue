<template>
  <div class="mainpage">
    <h1>{{ msg }}</h1>
    <p>
      A Tracking App for 75 Day Hard Challenge
    </p>
    <ul class="list">
      <li>
        <input type="checkbox" /> Two 45-minute workouts (at least one workout
        outdoors) 🏋️
      </li>
      <li><input type="checkbox" /> Drink 1 gallon of water 🚰</li>
      <li><input type="checkbox" /> No Alcohol or Cheat Meals ❌</li>
      <li><input type="checkbox" /> Read 10 pages of non-fiction 📚</li>
      <li><input type="checkbox" /> Follow a diet ✍️</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  props: {
    msg: String,
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
</style>
