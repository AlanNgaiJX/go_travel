<template>
  <div class>
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
    <HomeNav></HomeNav>
    <HomeHot></HomeHot>
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader";
import HomeSwiper from "./components/HomeSwiper";
import HomeNav from "./components/HomeNav";
import HomeHot from "./components/HomeHot"
export default {
  name: "",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeNav,
    HomeHot
  },
  data() {
    return {};
  }
};
</script>

<style lang="" scoped>
</style>