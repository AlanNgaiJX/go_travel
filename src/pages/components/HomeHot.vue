<template>
  <div class="wrapper">
    <TitleTypeA :title="title"></TitleTypeA>
    <!-- swiper -->
    <swiper ref="mySwiper" :options="swiperOption" class="hot_swiper">
      <!-- slides -->
      <swiper-slide class="slide" v-for="(item, index) in hotList" :key="item.id">
        <img v-if="index<3" class="badge" :src="badge[index]">
        <img class="slide_img" :src="item.imgUrl" />
        <p class="slide_title" v-text="item.title">故宫</p>
        <p class="slide_price">
          <span class="price_num">{{item.price | formatMoney}}</span>
          <span>起</span>
        </p>
      </swiper-slide>
    </swiper>
    <div id="scrollbar_HomeHot" class="scrollbar_HomeHot"></div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import TitleTypeA from "../../global_components/TitleTypeA";

export default {
  name: "",
  components: {
    swiper,
    swiperSlide,
    TitleTypeA
  },
  props:{
    hotList: Array,
    badge: Array
  },
  data() {
    return {
      //标题配置
      title: {
        title_icon: true,
        title_icon_URL:
          "http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png",
        title_text: "本周热门榜单",
        asideOption: true,
        option_text: "全部榜单",
        option_icon: "&#xe62e;",
        option_click: function() {
          console.log("TitleTypeA");
        }
      },
      swiperOption: {
        scrollbar: ".scrollbar_HomeHot",
        freeMode: true,
        slidesPerView: "auto"
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles'

.wrapper >>> .swiper-container
  width 100%

.wrapper >>> .swiper-wrapper, .wrapper >>> .swiper-slide
  width auto !important

  &:first-child
    border-left 0.1rem solid white

  &:nth-child(10)
    border-right 0.1rem solid white

.wrapper >>> .swiper-scrollbar-drag
  background-color #e1e1e1

.wrapper
  overflow hidden  
.hot_swiper
  height 0
  padding-bottom 3rem
  overflow visible

.slide
  position relative
  text-align center
  margin 0 0.05rem

  .badge
    position absolute
    width .84rem
    height .4rem
    top -.1rem

  .slide_img
    width 2rem

  .slide_title
    line-height 0.5rem
    width 2rem
    $nowrapeDot()

  .slide_price
    .price_num
      color #ff8300

      &:before
        content '¥'

.scrollbar_HomeHot
  height 0.05rem

</style>