<template>
  <div>
    <div ref="bscroll_wrapper" class="bscroll_wrapper">
      <div class="bscroll_content">
        <LocationCityListItem
          :list="hotCities"
          :ComOption="{len:3,title:'热门城市'}"
          @currentTitleChange="currentTitleChange"
          :scrollY="scrollY"
        ></LocationCityListItem>
        <LocationCityListItem
          v-for="(item, index) in cities"
          :key="index"
          :list="item"
          :ComOption="{ len:4,title:index }"
          :ref="index"
          @currentTitleChange="currentTitleChange"
          :scrollY="scrollY"
        ></LocationCityListItem>
      </div>
    </div>
    <LocationPagenation
      :pagenationList="cities"
      @handleLetterChange="handleLetterChange"
      :currentTitle="currentTitle"
    ></LocationPagenation>
  </div>
</template>

<script>
import axios from "axios";
import BScroll from "better-scroll";
import LocationCityListItem from "./LocationCityListItem";
import LocationPagenation from "./LocationPagenation";

export default {
  name: "",
  components: {
    LocationCityListItem,
    LocationPagenation
  },
  props:{
    ListData: Object
  },
  data() {
    return {
      //热门城市列表
      hotCities: this.ListData.hotCities,
      //字母-城市列表
      cities: this.ListData.cities,

      //滑动区域对象
      aBScroll: null,
      //监听滑动Y，向上为负数
      scrollY: 0,
      //滑动到哪个标题   
      currentTitle: ""
    };
  },
  methods: {
    initScrollWrapper() {
      //<初始化Bscroll区域>
      let bscrollDom = this.$refs.bscroll_wrapper;
      this.aBScroll = new BScroll(bscrollDom, { probeType: 3 });
      //绑定scroll监听
      this.aBScroll.on("scroll", this.handleScroll);
    },
    ScrollTo(letter) {
      //<方法：滑动到指定标题（字母）>
      this.aBScroll.scrollToElement(this.$refs[letter][0].$refs[letter]);
    },
    handleLetterChange(letter) {
      //<回调函数：监听子组件LocationPagenation的active字母>
      this.ScrollTo(letter);
    },
    handleScroll({ y }) {
      //<回调函数：监听滑动>
      this.scrollY = y;
    },
    currentTitleChange(currentTitle) {
      //<回调函数：监听子组件LocationCityListItem的当前顶端标题>
      this.currentTitle = currentTitle;
    }
  },
  watch:{
    ListData:{
      deep:true,
      handler(newValue){
        this.hotCities = this.ListData.hotCities;
        this.cities = this.ListData.cities;
      }
    }
  },
  mounted() {
    //初始化scroll
    this.$nextTick(() => {
      this.initScrollWrapper();
    });
  }
};
</script>

<style lang="stylus" scoped>
.bscroll_wrapper
  position absolute
  top 1.52rem
  height 100%

.bscroll_content
  padding-bottom 1.52rem
</style>