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
  data() {
    return {
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
      },
      hotList: [
        {
          id: "001",
          title: "故宫",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg",
          price: "60.00"
        },
        {
          id: "002",
          title: "八达岭长城",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_250x250_50c99cf3.jpg",
          price: "40.00"
        },
        {
          id: "003",
          title: "颐和园",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_250x250_d852635b.jpg",
          price: "37.80"
        },
        {
          id: "004",
          title: "圆明园",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_250x250_63e3520a.jpg",
          price: "25.00"
        },
        {
          id: "005",
          title: "北京世界园艺博览会",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1902/84/84696f368bbec10da3.img.jpg_250x250_3588bc9a.jpg",
          price: "108.00"
        },
        {
          id: "006",
          title: "什刹海",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1603/85/85c883189bf7293390.water.jpg_250x250_090a42b6.jpg",
          price: "10.00"
        },
        {
          id: "007",
          title: "怀北高山漂流",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1705/7b/7bc3480c17245bd3a3.img.jpg_250x250_397be0d7.jpg",
          price: "118.00"
        },
        {
          id: "008",
          title: "北京欢乐谷",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_250x250_6c4c9885.jpg",
          price: "98.00"
        },
        {
          id: "009",
          title: "恭王府",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_250x250_6ec2f798.jpg",
          price: "28.50"
        },
        {
          id: "010",
          title: "京东石林峡",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1604/78/78873494f26e554090.water.jpg_250x250_0565d534.jpg",
          price: "58.00"
        }
      ],
      badge:[
        "http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png",
        "http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png",
        "http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png"
      ]
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