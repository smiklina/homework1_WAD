import {createApp} from 'vue'
import {createStore} from 'vuex'
import app from './app.vue'
import router from './router'
import './main'

const store = createStore( {
  state() {
    return {
      posts: []
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    incrementLikes(state, postId) {
      const post = this.state.post.find(post = post.id ===postId.id)
      post.likeNumber++
    },
    resetLikes() {
      this.state.posts.array.forEach(post => post.likeNumber = 0)
    }
  },
  actions: {
    async fetchPosts({commit}) {
      const response = await fetch("https://api.npoint.io/acfb3ed97b0b631ba062")
      const posts = await response.json()
      commit('setPosts', posts['posts'])
    }
  },
  getters: {
    posts(state) {
      return state.posts
    }
  }
});

const app = createApp(app);
store.dispatch('fetchPosts');
app.use(router)
app.use(store)
app.mount('#app')