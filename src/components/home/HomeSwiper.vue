<template>
  <div class="swiper-box">
      <swiper :options="swiperOption" >
          <!-- slides -->
          <swiper-slide v-for="item in swiperList" :key="item.id">
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
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      },
      swiperList: [
        {
          id: '001',
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1801/bd/04554e7c67650302.jpg_750x200_4293d60a.jpg"
        },
        {
          id: '002',
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1806/1c/4847ea66072c7b02.jpg_750x200_c32457fb.jpg"
        }
      ]
    };
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
  padding-bottom: 26.6666%;
  .img {
    width: 100%;
  }
}
</style>
