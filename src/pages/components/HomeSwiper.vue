<template>
  <div class="wrapper">
    <!-- swiper -->
    <swiper ref="mySwiper" :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item, index) in swiperImgs" :key="item.id">
        <img class="swiper_img" :src="item.src" />
      </swiper-slide>
      <!-- Optional controls -->
      <div id="pagination_HomeSwiper" class="swiper-pagination" slot="pagination"></div>
    </swiper>
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
  props:{
    swiperImgs: Array
  },
  data() {
    return {
      // Swiper配置参数
      swiperOption: {
        pagination: "#pagination_HomeSwiper",
        loop: true,
        paginationClickable: true
      },
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles'

.wrapper >>> .swiper-pagination-bullet-active
  background-color white

.wrapper >>> .swiper-pagination-bullet
  background-color white

.wrapper
  height 0
  width 100%
  background-color $greyBg
  padding-bottom 26.66%

.swiper_img
  width 100%
</style>