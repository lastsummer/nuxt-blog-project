import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state:{
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts){
        state.loadedPosts = posts
      },
      addPost(state, post){
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost){
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
        state.loadedPosts[postIndex] = editedPost
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context){
        return this.$axios.$get('/posts.json')
          .then(res => {
            const postsArray = []
            for(const key in res){
              postsArray.push({...res[key], id:key})
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch(e => context.error(e))
        
      },
      setPosts(vuexContext, posts){
        vuexContext.commit('setPosts', posts)
      },
      addPost(vuexContext, post){
        const createdPost = {
          ...post, 
          updatedDate: new Date()
        }
        return context.app.$axios.$post('/posts.json', createdPost)
          .then(res => {
            vuexContext.commit('addPost', {...createdPost, id:res.name})
          })
          .catch(e => console.log(e))
      },
      editPost(vuexContext, editedPost){
        return context.app.$axios.$put('/posts/' + editedPost.id + '.json' , 
        editedPost)      
          .then(result => {
            vuexContext.commit('editPost', editedPost)
          })
          .catch(e => console.log(e))
      }
    },
    getters: {
      loadedPosts(state){
        return state.loadedPosts
      }
    }
  })
}

export default createStore