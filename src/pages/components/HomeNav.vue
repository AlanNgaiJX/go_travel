<template>
  <div class="wrapper">
    <!-- swiper -->
    <swiper ref="mySwiper" :options="swiperOption">
      <!-- slide -->
      <swiper-slide
        class="navs_container"
        v-for="(item_handOut_optionList, index_handOut_optionList) in handOut_optionList"
        :key="index_handOut_optionList"
      >
        <div
          class="nav_item"
          v-for="(nav_item, nav_index) in item_handOut_optionList"
          :key="nav_item.id"
        >
          <img class="nav_icon" :src="nav_item.iconImg" />
          <p class="nav_title" v-text="nav_item.option_title"></p>
        </div>
      </swiper-slide>
    </swiper>
    <!-- pagination -->
    <div class="swiper-pagination" id="pagination_HomeNav" slot="pagination"></div>

    <!-- asideOption -->
    <ul class="aside_Option_container border-top">
      <li class="aside_Option border-right">
        <span class="icon">&#xe63f;</span>
        <span>定位失败</span>
      </li>
      <li class="aside_Option">
        <span class="icon">&#xe641;</span>
        <span>必游榜单</span>
      </li>
    </ul>
    <!-- <div class="bigBorder"></div> -->
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      // 导航列表数据
      optionsList: [
        {
          id: "0001",
          option_title: "景点门票",
          iconImg:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
        },
        {
          id: "0002",
          option_title: "故宫",
          iconImg:
            "http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png"
        },
        {
          id: "0003",
          option_title: "北京必游",
          iconImg:
            "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png"
        },
        {
          id: "0004",
          option_title: "水上乐园",
          iconImg:
            "http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png"
        },
        {
          id: "0005",
          option_title: "爬长城",
          iconImg:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png"
        },
        {
          id: "0006",
          option_title: "古北水镇",
          iconImg:
            "http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png"
        },
        {
          id: "0007",
          option_title: "动植物园",
          iconImg:
            "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png"
        },
        {
          id: "0008",
          option_title: "北京野生动物园",
          iconImg:
            "http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png"
        },
        {
          id: "0009",
          option_title: "北京世园会",
          iconImg:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png"
        },
        {
          id: "0010",
          option_title: "考生专享",
          iconImg:
            "http://img1.qunarzz.com/piao/fusion/1803/87/a6521252870ea402.png"
        }
      ],
      // Swiper配置参数
      swiperOption: {
        pagination: "#pagination_HomeNav",
        uniqueNavElements: false,
        paginationClickable: true
      }
    };
  },
  computed: {
    //使用二维数组作为optionsList的载体，实现分页展示
    handOut_optionList() {
      let arrArr = [];
      const pageSize = 8;
      const pages = Math.floor((this.optionsList.length - 1) / pageSize + 1);

      for (let p = 0; p < pages; p++) {
        arrArr[p] = this.optionsList.filter((item, index) => {
          return index >= p * pageSize && index < (p + 1) * pageSize;
        });
      }
      return arrArr;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles'

.wrapper >>> .swiper-pagination-bullet
  margin 0 0.1rem
  width 0.1rem
  height 0.1rem

.wrapper
  position relative

.swiper-pagination
  position static
  margin 0.1rem auto

.nav_item
  position relative
  float left
  width 25%
  height 0
  padding-bottom 1.7rem

  .nav_icon
    position absolute
    width 1.1rem
    top 50%
    left 0
    right 0
    margin -0.6rem auto

  .nav_title
    position absolute
    left 0
    right 0
    bottom 0
    text-align center
    margin 0 auto
    $nowrapeDot()

.aside_Option_container
  display flex

  .aside_Option
    line-height 1rem
    width 50%
    box-sizing border-box
    text-align center
    color #212121

    .icon
      position relative
      top -0.1rem
</style>