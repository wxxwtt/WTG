<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>  
</template>
<script>
import HomeHeader from "./HomeHeader"
import HomeSwiper from "./HomeSwiper"
import HomeIcons from "./Icons"
export default {
  name:'Home',
  data(){
    return {

    }
  },
  components : {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }  
}
</script>
<style lang="scss" scoped>

</style>
