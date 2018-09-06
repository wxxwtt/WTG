<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>  
</template>
<script>
import HomeHeader from "./HomeHeader"
import HomeSwiper from "./HomeSwiper"
import HomeIcons from "./Icons"
import HomeRecommend from "./Recommend"
import HomeWeekend from "./Weekend"
export default {
  name:'Home',
  data(){
    return {

    }
  },
  components : {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }  
}
</script>
<style lang="scss" scoped>

</style>
