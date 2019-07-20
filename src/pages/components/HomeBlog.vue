<template>
  <div class="wrapper">
      <h4 class="title">周末去哪儿</h4>
      <BlogItem v-for="(item, index) in BlogList" :key="item.id" :item="item"></BlogItem>
      <div class="explain">
        <span class="icon">&#xe60c;</span><span class="strong"> 票面价</span>是指通过景区指定窗口售卖的纸质门票上标注的价格
      </div>
  </div>
</template>

<script>
import BlogItem from "../../global_components/BlogItem"
export default {
  name: '',
  components:{
    BlogItem
  },
  props:{
    BlogList: Array
  },
  data() { 
    return {
      
    }
  }
 }
</script>

<style lang="stylus" scoped>
.wrapper
  .title
    line-height .8rem
    padding-left .26rem
    background-color #f5f5f5
    font-size 14px
    color #212121
  .explain
    color #616161;
    font-size .24rem
    line-height .32rem
    padding .14rem .1rem
    .strong
      font-weight bold
</style>