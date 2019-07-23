//高度.66rem
<template>
  <div class="wrapper">
    <input type="text" placeholder="输入并查找城市" v-model="input" />
    <div class="btn" v-show="quitShow" @click="handleQuit">X</div>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      input: ""
    };
  },
  watch: {
    input() {
      this.$emit("InputChange", this.input);
    }
  },
  methods: {
    handleQuit() {
      this.input = "";
    }
  },
  computed: {
    quitShow() {
      return this.input === "" ? false : true;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles'

.wrapper
  background-color $bgColor
  display flex
  justify-content space-between
  align-items center
  padding 0.1rem 0.2rem

  input
    line-height 0.46rem
    padding 0 0.2rem
    border-radius 0.1rem
    font-size 0.28rem
    color $darkTextColor
    flex-grow 1

  .btn
    height 0.46rem
    width 0.46rem
    background-color white
    color grey
    border-radius 0.1rem
    margin-left -0.2rem
    text-align center
    line-height 0.46rem
</style>