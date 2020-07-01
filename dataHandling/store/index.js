import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state:{
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts){
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context){
        return new Promise((resolve, reject) =>{
          setTimeout(()=>{
            vuexContext.commit('setPosts', 
                [{id:'1' , title: 'Hello there!', previewText: 'This is my first post!', thumbnail:"https://www.vapulus.com/en/wp-content/uploads/2019/01/tech.jpg"}
                ,{id:'2' , title: 'Hello there!22222', previewText: 'This is my second post!', thumbnail:"https://images.idgesg.net/images/article/2019/05/cso_best_security_software_best_ideas_best_technology_lightbulb_on_horizon_of_circuit_board_landscape_with_abstract_digital_connective_technology_atmosphere_ideas_innovation_creativity_by_peshkov_gettyimages-965785212_3x2_2400x1600-100797318-large.jpg"}
                ,{id:'3' , title: 'Hello there!33333', previewText: 'This is my third post!', thumbnail:"https://www.paymentsjournal.com/wp-content/uploads/2019/11/904-scaled.jpg"}
                ,{id:'4' , title: 'Hello there!44444', previewText: 'This is my forth post!', thumbnail:"https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1578710070/1578710068.jpg"}
            ])
            resolve()
          }, 1000)
        })
      },
      setPosts(vuexContext, posts){
        vuexContext.commit('setPosts', posts)
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