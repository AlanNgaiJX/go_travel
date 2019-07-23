<template>
  <div class="wwrapper" @touchmove.prevent>
    <HeadBar class="head"></HeadBar>
    <LocationSearch class="head" @InputChange="handleInputChange"></LocationSearch>
    <LocationHint v-if="hint" :valueLocationList="valueLocationList" :input="input"></LocationHint>
    <LocationCityList :ListData="ListData"></LocationCityList>
  </div>
</template>

<script>
import axios from "axios";
import HeadBar from "../global_components/HeadBar";
import LocationSearch from "./components_Location/LocationSearch";
import LocationCityList from "./components_Location/LocationCityList";
import LocationHint from "./components_Location/LocationHint";

export default {
  name: "",
  components: {
    HeadBar,
    LocationSearch,
    LocationCityList,
    LocationHint
  },
  data() {
    return {
      //列表组件数据
      ListData: {
        hotCities: [],
        cities: null
      },
      input: "",
      hint: false
    };
  },
  methods: {
    getListData() {
      //<GET请求>
      axios
        .get("/api/city.json")
        .then(res => {
          const data = res.data;
          if (data.ret === true) {
            //热门城市
            this.ListData.hotCities = data.data.hotCities;
            //字母城市列表
            this.ListData.cities = data.data.cities;
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    handleInputChange(input) {
      this.input = input;
    }
  },
  computed: {
    valueLocationList() {
      //<遍历异步数据 ListData.cities ,并过滤排序出列表>
      let resArr = [];
      if (this.input !== "" && this.ListData.cities!==null) {
        const citiesObj = this.ListData.cities;


        Object.values(citiesObj).forEach(values => {
          const arr = values.filter(item => {
            return item.spell.indexOf(this.input) >= 0;
          });

          arr.forEach(item => {
            resArr.push(item);
          });
          resArr.sort((after, before) => {
            return (
              after.spell.indexOf(this.input) - before.spell.indexOf(this.input)
            );
          });
        });        
      }
      return resArr;
    }
  },
  watch:{
    input(){
      this.input === '' ? this.hint = false : this.hint = true;
    }
  },
  mounted() {
    this.getListData();
  }
};
</script>

<style lang="stylus" scoped>
.wwrapper
  overflow hidden

.head
  position relative
  z-index 100
</style>