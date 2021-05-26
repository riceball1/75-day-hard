<template>
  <div class="mainpage">
    <MainPageHeader
      @resetChallenge="handleResetChallenge"
      @login="handleLogin"
      v-bind:currentDay="currentDay"
    />
    <div class="list">
      <p
        class="list-item"
        v-for="task in generalTasks"
        :key="task"
        v-bind:class="{ 'selected-item': task.completed }"
        @click="checkTask(task.id)"
      >
        {{ task.task }}
      </p>
    </div>
    <div class="list-footer" v-if="currentDay !== 75">
      <button @click="completeDay()" :disabled="tasksCompleted !== 5">
        Mark Day Completed
      </button>
    </div>
    <Footer />
  </div>
</template>

<script>
import MainPageHeader from "../components/MainPageHeader.vue";
import Footer from '../components/Footer.vue';

export default {
  name: "MainPage",
  props: {},
  components: {
    MainPageHeader,
    Footer,
  },
  created() {
    // Fetch Tasks List on Mount
    const headers = { "Content-Type": "application/json" };
    fetch("http://localhost:3000/tasks", { headers })
      .then((response) => response.json())
      .then((data) => {
        this.generalTasks = data;
      });
  },

  data() {
    return {
      generalTasks: [
        {
          task: "Two 45-minute workouts (at least one workout outdoors) 🏋️",
          completed: false,
          id: 0,
        },
        { task: "Drink 1 gallon of water 🚰", completed: false, id: 1 },
        { task: "No Alcohol or Cheat Meals ❌", completed: false, id: 2 },
        { task: "Read 10 pages of non-fiction 📚", completed: false, id: 3 },
        { task: "Follow a diet ✍️", completed: false, id: 4 },
      ],
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
    checkTask: function (taskID) {
      if (!this.generalTasks[taskID].completed) {
        this.generalTasks[taskID].completed = !this.generalTasks[taskID]
          .completed;
        this.tasksCompleted = this.tasksCompleted + 1;
      } else {
        this.generalTasks[taskID].completed = !this.generalTasks[taskID]
          .completed;
        this.tasksCompleted = this.tasksCompleted - 1;
      }
    },
    completeDay: function () {
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
    handleResetChallenge: function () {
      this.currentDay = 0;
      alert("You're on day 0 now :P");
    },
    handleLogin: function () {
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
button {
  width: 50%;
  height: 80px;
  border-radius: 6px;
  font-size: 1.5rem;
  color: #000;
  background-color: #42b983;
  border: 2px solid lightgray;
}

button:disabled {
  background-color: lightgray;
  color: darkgray;
}

.list {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  padding: 0;
  margin: 0;
  border-radius: 6px;
  font-size: 1.5rem;
  margin: 5px auto;
}

.list-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #42b983;
  padding: 20px;
  border-radius: 6px;
  height: 100px;
  width: 200px;
  margin: 5px;
  cursor: pointer;
}

.list-footer {
  width: 60%;
  margin: 10px auto;
}

.selected-item {
  background-color: #000;
}

@media only screen and (max-width: 600px) {
  .list {
    flex-direction: column;
  }
  .list-item {
    width: 80%;
    margin: 5px auto;
  }

  button {
    width: 100%;
    height: 100px;
    font-size: 1.5rem;
  }
}
</style>
