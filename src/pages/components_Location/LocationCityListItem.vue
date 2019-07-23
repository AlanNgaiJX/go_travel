<template>
  <div class="wrapper" ref="tol">
    <div class="title" :ref="title">{{title}}</div>
    <table class="box_table" ref="table">
      <tr class="box_tr" v-for="(item, index) in tableArr" :key="index">
        <td
          class="box_td"
          :style="{width:tdWidth}"
          v-for="(item, index) in item"
          :key="index"
          @click="handleTdClick(item)"
        >{{item.name}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "LocationCityListItem",
  props: {
    //列表数据
    list: Array,

    //组件配置选项
    ComOption: Object,

    //父级滑动偏移
    scrollY: Number
  },
  data() {
    return {
      //一行多少个元素
      trLength: this.ComOption.len || 4,

      // 标题
      title: this.ComOption.title || "",

      // 位于顶端的标题，若不位于顶端则为空串
      currentTitle: ""
    };
  },
  computed: {
    tdWidth() {
      // <动态计算单格宽度>
      return 1 / this.trLength + "%";
    },
    tableArr() {
      // <计算得出表达表格的二维数组>
      const arrLength = this.list.length;
      let residue = arrLength % this.trLength;
      const initArr = this.list.slice(0);
      let arr = [];
      if (residue !== 0) {
        residue = this.trLength - residue;
      }
      // 把表格补整齐
      for (let i = 0; i < residue; i++) {
        initArr.push("");
      }
      // 使用二维数组存储表格
      for (let i = 0; i < initArr.length / this.trLength; i++) {
        arr[i] = initArr.slice(i * this.trLength, (i + 1) * this.trLength);
      }
      return arr;
    },
    titleOffset() {
      //<标题 与 屏幕顶部的距离：固定值>
      return this.$refs[this.title].offsetTop;
    },
    tolHeight() {
      // <标题+表格的整体高度：固定值>
      return this.$refs["tol"].offsetHeight;
    },
    isCurrentTitle() {
      //当滑动超过标题，且未触及表底时，为真
      return (
        this.titleOffset <= -this.scrollY &&
        this.titleOffset + this.tolHeight > -this.scrollY
      );
    }
  },
  methods: {
    handleTdClick(item) {
      if (item === "") {
        return;
      }
      //   emit
    }
  },
  watch: {
    scrollY() {
      // <当父级scroll事件触发，会改变scrollY的值，监听变化，存储当前组件标题内容或状态：有值则解释为活跃的标题，为空串则不是活跃的标题>
      if (this.isCurrentTitle) {
        this.currentTitle = this.title;
      } else {
        this.currentTitle = "";
      }
    },
    currentTitle(newValue) {
      //<当标题活跃，则通知父级组件>
      if (newValue !== "") {
        this.$emit("currentTitleChange", newValue);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles'

.wrapper
  .title
    width 100%
    $simpleTitle()

  .box_table
    table-layout fixed
    width 100%

    .box_tr
      text-align center

      &:first-child
        .box_td
          border-top none

    .box_td
      $nowrapeDot()
      border 0.03rem solid #e3e6e9
      line-height 0.9rem
      font-size 0.28rem
      border-bottom none
      border-right none
      padding 0 0.2rem
      box-sizing border-box

      &:first-child
        border-left none
</style>