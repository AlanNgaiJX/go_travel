<template>
  <div class="wrapper">
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
    <HomeNav class="nav"></HomeNav>
    <HomeHot class="hot"></HomeHot>
    <HomeRecommend></HomeRecommend>
    <HomeBlog></HomeBlog>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader";
import HomeSwiper from "./components/HomeSwiper";
import HomeNav from "./components/HomeNav";
import HomeHot from "./components/HomeHot";
import HomeRecommend from "./components/HomeRecommend"
import HomeBlog from "./components/HomeBlog"
import HomeFooter from "./components/HomeFooter"


import TitleTypeA from "../global_components/TitleTypeA"

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
    };
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