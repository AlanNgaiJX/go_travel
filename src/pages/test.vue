<template>
  <div class="">
      <!-- <stars :stars="stars"></stars> -->
      <BlogItem></BlogItem>
  </div>
</template>

<script>
import Stars from "../global_components/Stars"
import BlogItem from "../global_components/BlogItem"
export default {
  name: '',
  components:{
      Stars,BlogItem
  },
  data() { 
    return {
      stars:{
        starLength:5,
        score: 4
      }
    }
  }
 }
</script>

<style lang="" scoped>

</style>