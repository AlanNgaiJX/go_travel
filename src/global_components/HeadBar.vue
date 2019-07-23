// 高度.88rem
<template>
  <div class="wrapper">
      <span class="icon back">&#xe624;</span>
<div class="title">
          城市选择
      </div>
  </div>
</template>

<script>
export default {
  name: 'HeadBar',
  data() { 
    return {

    }
  }
 }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles'
.wrapper
    background-color $bgColor
    .back
        position absolute
        display block
        width .88rem
        text-align center
        line-height .88rem
        color white
    .title
        line-height .88rem
        $nowrapeDot()
        color white
        font-size .32rem
        text-align center

</style>