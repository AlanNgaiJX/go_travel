<template>
  <div class="header">
      <div class="header_left">
          <span class="icon">&#xe624;</span>
      </div>
      <div class="header_middle">
          <span><span class="icon">&#xe632;</span>输入城市/景点/游玩主题</span>
      </div>
      <div class="header_right">
          <span>北京<span class="icon">&#xe62d;</span></span>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  }
 }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles'

    .header
        line-height $headerHeight
        display flex
        background-color $bgColor
        color white
        .header_left
            width .64rem
            text-align center
        .header_middle 
            flex 1
            height .64rem
            line-height .64rem
            margin .11rem .1rem 0 .1rem
            padding 0 .1rem
            background-color #ffffff
            color $greyTextColor
            border-radius .1rem
            .icon
                margin-right .1rem
        .header_right
            width 1.24rem
            text-align center
            font-size .24rem
            .icon
                margin-left .1rem            
</style>