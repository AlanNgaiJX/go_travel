<template>
  <div class="wrapper">
    <TitleTypeA :title="title"></TitleTypeA>
    <ListItem v-for="(item,index) in dataList" :key="item.id" :item="item"></ListItem>
    <a class="btn">查看所有产品</a>
  </div>
</template>

<script>
import TitleTypeA from "../../global_components/TitleTypeA";
import ListItem from "../../global_components/ListItem";

export default {
  name: "",
  components: {
    TitleTypeA,
    ListItem
  },
  props: {
    dataList: Array
  },
  data() {
    return {
      // 标题配置
      title: {
        title_icon: true,
        title_icon_URL:
          "http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png",
        title_text: "猜你喜欢",
        asideOption: false
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.btn
  display block
  color #01afc7
  font-size 14px
  line-height 0.4rem
  padding 0.2rem 0
  text-align center
</style>