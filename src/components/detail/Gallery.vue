<template>
  <div class="gallery" @click="hidePreview">
    <div class="container">
       <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide  v-for="(item,index) in imgs"  :key="index">
            <img  class="img" :src="item">
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name :'gallery',
  data () {
    return {
      
      swiperOption : {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  props : {
    imgs:Array,
  },
  methods: {
    hidePreview(){
      this.$emit('hidePreview',false)
    }
  }
}
</script>
<style lang="scss" scoped>
  .container /deep/ .swiper-container {
    overflow:inherit;
  }
  .gallery {
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #000;
    flex-direction: column;
    justify-content : center;
    .container {
      background: #fff;
      height: 0;
      padding-bottom: 65%;
      img {
        width: 100%;
      }
      .swiper-pagination {
        position: absolute;
        bottom: -0.5rem;
        color: #fff;
      }
    }
  }
</style>
