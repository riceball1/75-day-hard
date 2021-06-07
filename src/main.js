import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { auth } from '../firebase.js'

let app
auth.onAuthStateChanged(user => {
  if (!app) {
    app = createApp(App)
    app.use(router)
    app.use(store)
    app.mount('#app');
  }

  if (user) {
    store.dispatch('fetchUserProfile', user)
  }
})