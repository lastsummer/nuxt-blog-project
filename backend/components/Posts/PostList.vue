<template>
  <section class="featured-posts">
      <PostPreview 
        v-for="post in posts"
        :key="post.id"
        :id="post.id" 
        :title="post.title" 
        :isAdmin="isAdmin"
        :previewText="post.previewText" 
        :thumbnail="post.thumbnail" />
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
    },
    posts:{
      type: Array,
      default: true
    }
  },
  head:{
    title: 'post list'
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