<template>
  <div class="wrapper">
      <div class="img_container">
          <img :src="item.imgURL" alt="">
      </div>
      <div class="info_container">
          <h5>{{item.title}}</h5>
          <p>{{item.detail}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
    item: Object
  },
  data() { 
    return {

    }
  }
 }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles'
.wrapper
    border-bottom .1rem solid #f5f5f5
    .img_container
        height 0
        padding-bottom 36.51%
        overflow hidden
        img
            width 100%
    .info_container
        padding .4rem .2rem
        h5,p
            $nowrapeDot()
        h5
            font-size .28rem
            line-height .48rem
            color #212121
        p
            font-size .24rem
            line-height .42rem
            color #616161
        

</style>