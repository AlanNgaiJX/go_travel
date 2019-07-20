<template>
  <div>
      <span :class="[item? 'stars-active': 'stars-default','icon']" v-for="(item, index) in starList">&#xe64a;</span>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
    stars: Object
  },
  data() { 
    return {
        starLength: this.stars.starLength || 5,
        score: this.stars.score || 0
    }
  },
  computed:{
    starList(){
      let list = [];
      for(let i = 0, score = this.score; i < this.starLength ; i ++,score--){
        if (score>0) {
          list.push(true);
        }else{
          list.push(false);
        }
      }
      return list;
    }
  }
 }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles'
.stars-default
  color #e3e3e3
.stars-active
  color #ffb436
</style>