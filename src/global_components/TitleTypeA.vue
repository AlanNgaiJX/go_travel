<template>
  <div class="title_container">
    <div class="title_content">
      <img v-if="title.title_icon"
        class="title_icon"
        :src="title.title_icon_URL"
        alt
      />
      <span class="title_text" v-text="title.title_text"></span>
    </div>
    <div class="title_option" @click="clickEventFun">
      <span class="option_text" v-text="title.option_text"></span>
      <span class="icon" v-html="title.option_icon"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props:{
      title: Object
  },
  data() {
    return {
    //  title:{
    //         title_icon:true,
    //         title_icon_URL:"http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png",
    //         title_text:"本周热门榜单",
    //         asideOption:true,
    //         option_text:"全部榜单",
    //         option_icon:"&#xe62e;",
    //         option_click:function(){
    //             console.log("click");
    //         }
    //     }
    };
  },
  computed:{
    clickEventFun(){
      return this.title.option_click !== undefined ? this.title.option_click : ''
    }
  }
};
</script>

<style lang="stylus" scoped>
.title_container
  line-height 1rem
  height 1rem

  .title_content
    float left
    padding-left 0.2rem

    .title_icon
      width 0.3rem
      position relative
      top -0.08rem

    .title_text
      font-size 0.32rem

  .title_option
    float right
    padding-right 0.1rem

    .option_text
      font-size 0.24rem
</style>