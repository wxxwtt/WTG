<template>
  <div class="swiper-box">
      <swiper :options="swiperOption" v-if="showSwiper">
          <!-- slides -->
          <swiper-slide v-for="item in swiper" :key="item.id" >
            <img  class="img" :src="item.imgUrl" alt="">
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props:{
    swiper:Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay:4000,
      }
      
    };
  },
  computed:{
    showSwiper(){
      return this.swiper.length
    }
  }
};
</script>
<style lang="scss" scoped>
.swiper-box /deep/ .swiper-pagination-bullet-active {
  background: #fff;
}
.swiper-box {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.6666%;
  .img {
    width: 100%;
  }
}
</style>
