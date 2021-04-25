<template>
  <div class="mainpage">
    <header>
      <h1>{{ msg }}</h1>
      <div class="header-subsection">
        <p>
          A Tracking App for 75 Day Hard Challenge
        </p>
        <div class="header-controls">
          <button class="login">Login</button>
          <button>Restart Challenge</button>
        </div>
      </div>
    </header>

    <div class="tracker">
      <div><b>Total Days Completed</b> 0</div>
      <div>
        <b>Start Date</b> April 25, 2021 ➡️ <b>End Date</b> July 9, 2021
      </div>
    </div>
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
    <div class="list-footer">
      <button>Mark Day Completed</button>
    </div>
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
</style>
