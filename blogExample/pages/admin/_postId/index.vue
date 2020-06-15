<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
export default {
  components:{
    AdminPostForm
  },
  data(){
    return {
      loadedPost:{
        author:'summer',
        title:'My awesome Post',
        thumbnailLink:'https://www.paymentsjournal.com/wp-content/uploads/2019/11/904-scaled.jpg',
        content:'Super amazing , thinks for that!'
      }
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