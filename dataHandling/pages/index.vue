<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>


<script>
import PostList from '@/components/Posts/PostList'
export default {
  components:{
    PostList
  },
  asyncData(context, callback){
    setTimeout(()=>{
      callback(null,{
        loadedPosts: 
          [{id:'1' , title: 'Hello there!', previewText: 'This is my first post!', thumbnail:"https://www.vapulus.com/en/wp-content/uploads/2019/01/tech.jpg"}
          ,{id:'2' , title: 'Hello there!22222', previewText: 'This is my second post!', thumbnail:"https://images.idgesg.net/images/article/2019/05/cso_best_security_software_best_ideas_best_technology_lightbulb_on_horizon_of_circuit_board_landscape_with_abstract_digital_connective_technology_atmosphere_ideas_innovation_creativity_by_peshkov_gettyimages-965785212_3x2_2400x1600-100797318-large.jpg"}
          ,{id:'3' , title: 'Hello there!33333', previewText: 'This is my third post!', thumbnail:"https://www.paymentsjournal.com/wp-content/uploads/2019/11/904-scaled.jpg"}
          ,{id:'4' , title: 'Hello there!44444', previewText: 'This is my forth post!', thumbnail:"https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1578710070/1578710068.jpg"}
      ]})
    }, 1500)
  },
  data(){
    return {
      loadedPosts: []
    }
  },
  created(){
    
  }

}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/original.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}



</style>