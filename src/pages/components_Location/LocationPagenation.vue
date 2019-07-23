<template>
  <ul class="wrapper" ref="ul">
    <li
      v-for="(item, index) in letterArr"
      :key="index"
      @click="handleClick($event,item)"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      ref="li"
      :class="letterIndex === index ? 'li-active' : ''"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: "",
  props: {
    //列表数据
    pagenationList: Object,
    currentTitle: String 
  },
  data() {
    return {
      dragState: false,
      timer: null,
      letterIndex:''
    };
  },
  methods: {
    handleClick(e, item) {
      //<回调：点击通知父级当前项>
      this.emitLetter(item);
    },
    handleTouchStart(e) {
      //开启拖拽
      this.dragState = true;
    },
    handleTouchMove(e) {
      //<处理按拖事件>
      if (this.dragState === true) {
        //计算拖动当前点 到 导航顶部的距离
        const differ = e.touches[0].pageY - this.ul2top;
        //if:限制按拖范围在导航区域
        if (differ > 0 && differ < this.ulHeight) {

          //计算当前的定位
          this.letterIndex = Math.ceil(differ / this.liHeight) - 1;

          //定时器节流
          if (this.timer) {
            clearTimeout(this.timer);
          }
          this.timer = setTimeout(() => {
              this.emitLetter(this.letterArr[this.letterIndex]);
          }, 100);
        }
      }
    },
    handleTouchEnd(e) {
      //关闭拖拽
      this.dragState = false;
    },
    emitLetter(letter) {
      this.$emit("handleLetterChange", letter);
    }
  },
  computed: {
    letterArr() {
      //<遍历得字母数组>
      let arr = [];
      for (const key in this.pagenationList) {
        arr.push(key);
      }
      return arr;
    },
    ul2top() {
      //<计算导航与屏幕顶部的距离>
      return this.$refs.ul.offsetTop;
    },
    ulHeight() {
      //<计算导航的高度>
      return this.$refs.ul.offsetHeight;
    },
    liHeight() {
      //<计算得单个选项的高度>
      return this.$refs.li[0].offsetHeight;
    }
  },
  watch:{
      currentTitle(newValue){
          //<当父级组件的currentTitile发生改变时，定位导航中的光标>
          this.letterIndex = this.letterArr.indexOf(newValue);
      }
  },
  mounted() {}
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles'

.li-active
  background-color $bgColor
.wrapper
  position absolute
  top 30%
  right 0
  background-color $greyBg
  border-radius 0.1rem
  color #ffffff

  li
    line-height 0.36rem
    height 0.36rem
    width 0.36rem
    text-align center
    font-size 0.24rem
</style>