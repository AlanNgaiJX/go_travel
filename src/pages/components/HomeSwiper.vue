<template>
  <div class="wrapper">
    <!-- swiper -->
    <swiper ref="mySwiper" :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item, index) in swiperImgs" :key="item.id">
        <img class="swiper_img" :src="item.src" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
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
  data() {
    return {
      // Swiper配置参数
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
        paginationClickable: true
      },
      swiperImgs: [
        {
          id: "0001",
          src:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg"
        },
        {
          id: "0002",
          src:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/a5d26ebec399b3aef013f45771ae96f0.jpg_750x200_de947eef.jpg"
        },
        {
          id: "0003",
          src:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/31a76f3cf484757a14406d63b9a7c595.jpg_750x200_f89ca7f8.jpg"
        },
        {
          id: "0004",
          src:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/0b0622e5b6ac5fbed3084dd2832e6f8f.jpg_750x200_895321b6.jpg"
        },
        {
          id: "0005",
          src:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/818f6cc784ae6669b74bbbb255414a53.jpg_750x200_66ca5873.jpg"
        }
      ]
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