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
  data() { 
    return {
      BlogList:[
        {id:"0001", title:"京城周末撒欢", detail:"在帝都过周末，不仅仅是城中游！", imgURL:"http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg"},
        {id:"0002", title:"京城溜娃必去", detail:"德智体美劳全面发展的亲子日，这些地方该去看看…", imgURL:"http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg"},
        {id:"0003", title:"帝都必打卡", detail:"来北京必去的景点非这些地方莫属", imgURL:"http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg"},
        {id:"0004", title:"漂流勇进，烧烤露营", detail:"轻松水上漂，任我乐逍遥", imgURL:"http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg"},
        {id:"0005", title:"北京清凉避暑胜地", detail:"到大自然中享受“天然空调”的清凉", imgURL:"http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg"}
      ]
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