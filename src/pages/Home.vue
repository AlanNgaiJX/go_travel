<template>
  <div class="wrapper">
    <HomeHeader></HomeHeader>
    <HomeSwiper :swiperImgs="swiperImgs"></HomeSwiper>
    <HomeNav class="nav" :optionsList="optionsList"></HomeNav>
    <HomeHot class="hot" :hotList="hotList" :badge="badge"></HomeHot>
    <HomeRecommend :dataList="dataList"></HomeRecommend>
    <HomeBlog :BlogList="BlogList"></HomeBlog>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import axios from 'axios';
import HomeHeader from "./components_Home/HomeHeader";
import HomeSwiper from "./components_Home/HomeSwiper";
import HomeNav from "./components_Home/HomeNav";
import HomeHot from "./components_Home/HomeHot";
import HomeRecommend from "./components_Home/HomeRecommend";
import HomeBlog from "./components_Home/HomeBlog";
import HomeFooter from "./components_Home/HomeFooter";

import TitleTypeA from "../global_components/TitleTypeA";

export default {
  name: "",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeNav,
    HomeHot,
    HomeRecommend,
    HomeBlog,
    HomeFooter
  },
  data() {
    return {
      BlogList:[],
      badge:[],
      dataList:[],
      hotList:[],
      optionsList:[],
      swiperImgs:[]
    };
  },
  methods: {
    getHomeData() {
      axios
        .get("api/home.json")
        .then(res => {
          const data = res.data;
          if (data.ret) {
            this.BlogList = data.BlogList
            this.badge = data.badge
            this.dataList = data.dataList
            this.hotList = data.hotList
            this.optionsList = data.optionsList
            this.swiperImgs = data.swiperImgs            
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted(){
    this.getHomeData();    
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles'

.nav
  border-bottom $slicer

.hot
  border-bottom $slicer
</style>