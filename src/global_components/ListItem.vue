<template>
  <div class="wrapper">
    <div class="container border-bottom">
      <div class="container_top">
        <div class="img_container">
          <div class="badge_container">
            <img v-show="item.orderable"
              class="badge_bg"
              src="https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png"
            />
            <span v-show="item.orderable" class="badge_text">随买随用</span>

            <img v-show="!item.orderable" class="badge_bg" src="https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png">
            <span v-show="!item.orderable" class="badge_text">可订明日</span>
          </div>

          <img
            class="main_img"
            :src="item.imgURL"
            alt
          />
        </div>
        <div class="info_container">
          <h5 class="info_title">{{item.title}}</h5>
          <div class="info_star_comment">
            <Stars :stars="{score: item.score }" class="star"></Stars>
            <span class="comment">{{item.commentCount}}条评论</span>
          </div>
          <div class="price_location_container">
            <span class="price_container">
              <span class="price">{{item.price}}</span>起
            </span>
            <span class="location">{{item.location}}</span>
          </div>
        </div>
      </div>
      <div class="container_bottom" v-if="!item.detail==''">
        <span
          class="detail_text"
        >{{item.detail}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Stars from "../global_components/Stars";
export default {
  name: "",
  props:{
      item: Object
  },
  components: {
    Stars
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles'
.wrapper
  padding 0 .2rem
.container
  .container_top
    padding .2rem 0
    display flex

    .img_container
      position relative
      width 2rem

      .badge_container
        position absolute
        width 1.02rem
        font-size 0.2rem
        color white

        .badge_bg
          position absolute
          width 100%

        .badge_text
          position absolute
          line-height 0.38rem

      .main_img
        width 100%

    .info_container
      box-sizing border-box
      height 2rem
      padding 0.2rem
      flex 1
      display flex
      flex-direction column
      justify-content space-between

      .info_title
        line-height 0.44rem
        font-size 0.32rem
        color $strongTextColor
        flex-grow 1

      .info_star_comment
        font-size 0.24rem
        line-height 0.32rem
        flex-grow 2

        .star
          float left

        .comment
          color $TextColor
          margin-left 0.2rem

    .price_location_container
      color $TextColor
      flex-grow 0
      position relative
      font-size 0.24rem

      .price_container
        .price
          font-size 0.4rem
          color #ff8406

          &:before
            content '¥'
            font-size 0.24rem

      .location
        position absolute
        right 0
        bottom 0

  .container_bottom
    height 0.4rem
    padding-left 2.2rem
    padding-right 0.2rem
    padding-bottom 0.2rem
    font-size 0.24rem
    color #ff5554
    line-height 0.4rem
    $nowrapeDot()

    .detail_text
      background-color #fff9f9
</style>