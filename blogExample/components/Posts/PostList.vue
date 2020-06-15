<template>
  <section class="featured-posts">
      <PostPreview 
        id="1" 
        title="Hello there!" 
        :isAdmin="isAdmin"
        previewText="This is my first post!" 
        thumbnail="https://www.vapulus.com/en/wp-content/uploads/2019/01/tech.jpg" />
      <PostPreview 
        id="2" 
        title="Hello there222!" 
        :isAdmin="isAdmin"
        previewText="This is my second post!" 
        thumbnail="https://images.idgesg.net/images/article/2019/05/cso_best_security_software_best_ideas_best_technology_lightbulb_on_horizon_of_circuit_board_landscape_with_abstract_digital_connective_technology_atmosphere_ideas_innovation_creativity_by_peshkov_gettyimages-965785212_3x2_2400x1600-100797318-large.jpg" />
      <PostPreview 
        id="3" 
        title="Hello there333!" 
        :isAdmin="isAdmin"
        previewText="This is my third post!" 
        thumbnail="https://www.paymentsjournal.com/wp-content/uploads/2019/11/904-scaled.jpg" />
    </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components:{
    PostPreview
  },
  props:{
    isAdmin:{
      type: Boolean,
      default: false
    }
  }

}
</script>

<style scoped>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>