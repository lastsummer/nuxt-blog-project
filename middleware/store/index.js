import Vuex from 'vuex'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state:{
      loadedPosts: [],
      token: null
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
      },
      setToken(state, token){
        state.token = token
      },
      clearToken(state){
        state.token = null
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
        return context.app.$axios.$post('/posts.json?auth=' + vuexContext.state.token, createdPost)
          .then(res => {
            vuexContext.commit('addPost', {...createdPost, id:res.name})
          })
          .catch(e => console.log(e))
      },
      editPost(vuexContext, editedPost){
        return this.$axios.$put('/posts/' + editedPost.id + '.json?auth=' + vuexContext.state.token , 
        editedPost)      
          .then(result => {
            vuexContext.commit('editPost', editedPost)
          })
          .catch(e => console.log(e))
      },
      authenticateUser(vuexContext, authData){
        let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+process.env.fbApiKey
        if(authData.isLogin){
          authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+process.env.fbApiKey
        }
        return this.$axios.$post(authUrl,{
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }).then(result => {
          const tokenExpiration = new Date().getTime() + result.expiresIn * 1000
          vuexContext.commit('setToken',result.idToken)
          localStorage.setItem('token', result.idToken)
          localStorage.setItem('tokenExpiration',  tokenExpiration)

          Cookie.set("jwt", result.idToken)
          Cookie.set("tokenExpiration", tokenExpiration )
          vuexContext.dispatch('setLogoutTimer', result.expiresIn * 1000)
        }).catch(e=> console.log(e))
      },
      setLogoutTimer(vuexContext, duration){
        setTimeout(()=>{
          vuexContext.commit('clearToken')
        }, duration)
      },
      initAuth(vuexContext, req){
        let token = null
        let tokenExpiration = null
        if(req){
          if(!req.headers.cookie){
            return;
          }
          const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith("jwt="))
          if(!jwtCookie) return
          token = jwtCookie.split('=')[1]
          tokenExpiration = req.headers.cookie.split(';').find(c => c.trim().startsWith("tokenExpiration=")).split('=')[1]
        }else{
          token = localStorage.getItem('token')
          tokenExpiration = localStorage.getItem('tokenExpiration')
          
        }
        if(new Date() > tokenExpiration || !token){
          vuexContext.dispatch('logout')
          return;
        }
        vuexContext.commit('setToken', token)
      },
      logout(vuexContext){
        vuexContext.commit('clearToken')
        Cookie.remove('jwt')
        Cookie.remove('tokenExpiration')
        if(process.client){
          localStorage.removeItem("token")
          localStorage.removeItem("tokenExpiration")
        }
      }
    },
    getters: {
      loadedPosts(state){
        return state.loadedPosts
      },
      isAuthenticated(state){
        return state.token != null
      }
    }
  })
}

export default createStore


