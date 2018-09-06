<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <div>1234</div>
  </div>  
</template>
<script>
import HomeHeader from "./HomeHeader"
import HomeSwiper from "./HomeSwiper"
export default {
  name:'Home',
  data(){
    return {

    }
  },
  components : {
    HomeHeader,
    HomeSwiper
  }  
}
</script>
<style lang="scss" scoped>

</style>
