<template>
  <div class="">
    <LocationPagenation></LocationPagenation>
  </div>
</template>

<script>
import Stars from "../global_components/Stars"
import BlogItem from "../global_components/BlogItem"
import LocationPagenation from "./components_Location/LocationPagenation"
export default {
  name: '',
  components:{
      Stars,BlogItem,LocationPagenation
  },
  data() { 
    return {
      stars:{
        starLength:5,
        score: 4
      }
    }
  }
 }
</script>

<style lang="" scoped>

</style>