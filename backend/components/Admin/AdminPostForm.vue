<template>
  <form @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
        <AppControlInput v-model="editedPost.title">Title</AppControlInput>
        <AppControlInput v-model="editedPost.thumbnail">thumbnailLink</AppControlInput>
        <AppControlInput v-model="editedPost.previewText">previewText</AppControlInput>
        <AppControlInput
        control-type="textarea" 
        v-model="editedPost.content">Content</AppControlInput>
        <AppButton type="submit">Save</AppButton>
        <AppButton type="button" style="margin-left:10px" btn-style="cancal" @click="onCancel">Cancel</AppButton>
      </form>
</template>

<script>
import AppButton from '@/components/UI/AppButton'
import AppControlInput from '@/components/UI/AppControlInput'
export default {
  components:{
    AppButton,
    AppControlInput
  },
  props:{
    post:{
      type:Object,
      required: false
    }
  },
  data(){
    return{
      editedPost: this.post ? {...this.post} : {
        author:'',
        title:'',
        thumbnail:'',
        previewText:'',
        content:''
      }
    }
  },
  methods:{
    onSave(){
      this.$emit('submit', this.editedPost)
      console.log(this.editedPost)
    },
    onCancel(){
      this.$router.push('/admin')
    }
  }

}
</script>