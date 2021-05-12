<template>
  <div class="mainpage">
    <MainPageHeader
      @resetChallenge="handleResetChallenge"
      @login="handleLogin"
    />
    <div class="tracker">
      <div><b>Total Days Completed</b> {{ currentDay }}</div>
      <div>
        <b>Start Date</b> April 25, 2021 ➡️ <b>End Date</b> July 9, 2021
      </div>
    </div>
    <ul class="list">
      <li v-for='task in generalTasks' :key="task">
     <input type='checkbox' v-bind:value='task.completed' v-model='task.completed' checked='task.completed' @change='checkTask()'>{{ task.task }}
    </li>
    </ul>
    <div class="list-footer" v-if="currentDay !== 75">
      <button @click="completeDay()" :disabled="tasksCompleted != 5">Mark Day Completed</button>
    </div>
  </div>
</template>

<script>
import MainPageHeader from "../components/MainPageHeader.vue";

export default {
  name: "MainPage",
  props: {
    msg: String,
  },
  components: {
    MainPageHeader,
  },
  created() {
    // Fetch Tasks List on Mount
    const headers = { "Content-Type": "application/json" };
    fetch("http://localhost:3000/tasks", { headers })
      .then((response) => response.json())
      .then((data) => (this.generalTasks = data));
  },

  data() {
    return {
      generalTasks: [],
      isCheckAll: false,
      currentDay: 0,
      tasksCompleted: 0,
      pages: [
        {
          pageNumber: 1,
          tasks: [
            "Two 45-minute workouts (at least one workout outdoors) 🏋️",
            "Drink 1 gallon of water 🚰",
            "No Alcohol or Cheat Meals ❌",
            "Read 10 pages of non-fiction 📚",
            "Follow a diet ✍️",
          ],
        },
        {
          pageNumber: 2,
          tasks: [
            "Two 45-minute workouts (at least one workout outdoors) 🏋️",
            "Drink 1 gallon of water 🚰",
            "No Alcohol or Cheat Meals ❌",
            "Read 10 pages of non-fiction 📚",
            "Follow a diet ✍️",
          ],
        },
        {
          pageNumber: 3,
          tasks: [
            "Two 45-minute workouts (at least one workout outdoors) 🏋️",
            "Drink 1 gallon of water 🚰",
            "No Alcohol or Cheat Meals ❌",
            "Read 10 pages of non-fiction 📚",
            "Follow a diet ✍️",
          ],
        },
      ],
    };
  },
  methods: {
    checkTask: function() {
      this.tasksCompleted = this.tasksCompleted + 1;
    },
    completeDay: function() {
      // check if all the checkboxes are checked
      // show an alert before moving forward
      // decide if we want to show the same tasks or different - if same, then we can remove the tasks and have a counter.
  
      this.currentDay = this.currentDay + 1;
      for (let task in this.generalTasks) {
        this.generalTasks[task].completed = false;
      }
      // reset tasksCompleted after each day is completed
      this.tasksCompleted = 0;
      if (this.currentDay === 75) {
        alert("You've completed the challenge");
        // animation after the challenge is done?
      }
      
    },
    handleResetChallenge: function() {
      this.currentDay = 0;
      alert("You're on day 0 now :P");
    },
    handleLogin: function() {
      alert("Login not implemented");
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
