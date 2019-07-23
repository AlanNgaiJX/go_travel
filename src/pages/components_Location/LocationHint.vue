<template>
  <div class="bscroll_wrapper" ref="hintWrapper">
    <ul class="bscroll_content">
      <li v-show="valueLocationList.length===0 && input!==''"><span class="icon">&#xe60c;</span> 无匹配选项</li>
      <li
        v-for="(item, index) in valueLocationList"
        :key="index"
        class="border-bottom"
      >{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "",
  props: {
    valueLocationList: Array,
    input: String
  },
  data() {
    return {
      bscroll: null
    };
  },
  methods: {
    initScrollWrapper() {
      //<初始化Bscroll区域>
      let bscrollDom = this.$refs.hintWrapper;
      this.aBScroll = new BScroll(bscrollDom, {});
    }
  },
  mounted() {
      this.initScrollWrapper();
  }
};
</script>

<style lang="stylus" scoped>
.bscroll_wrapper
  position absolute
  top 1.52rem
  max-height 100%
  width 100%
  background-color white
  overflow hidden
  z-index 105
  

  .bscroll_content
    padding-bottom 1.52rem

    li
      line-height 0.84rem
      padding-left 0.2rem
      width 100%
</style>