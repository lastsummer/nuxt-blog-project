<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmit" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
import axios from 'axios'
export default {
  components:{
    AdminPostForm
  },
  asyncData(context){
    return axios.get('https://summer-nuxt.firebaseio.com/posts/' + context.params.postId + '.json')
      .then(res => {
        return {
          loadedPost: { ...res.data, id: context.params.postId }
        }
      })
      .catch(e => context.error(e))
  },
  methods:{
    onSubmit(editPost){
      this.$store.dispatch('editPost', {...editPost, id: this.$route.params.postId})
        .then(
          () =>{
            this.$router.push('/admin')
          }
        )
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media(min-width:768px){
  .update-form{
    width: 500px
  }
}
</style>