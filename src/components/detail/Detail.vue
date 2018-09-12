<template>
   <div>
        <div class="banner" @click="previewIMg">
          <div class="banner-img"><img src="//img1.qunarzz.com/sight/p0/1804/c8/c88bb5e69c9a9c5ea3.img.jpg_600x330_bda46e68.jpg" alt="">
          </div>
          <div class="banner-info">
            <p>古北水镇</p>
          </div>
      </div>
      <gallery v-show="showGallery" @hidePreview="previewIMg" :imgs="imgs"></gallery>
   </div>
</template>
<script>
import Gallery from "./Gallery";
export default {
  name: "detail",
  data() {
    return {
      showGallery: false,
      imgs:['http://img1.qunarzz.com/sight/p0/1803/29/29b44ecb2476ff19a3.img.jpg_r_800x800_e1d00b2b.jpg','http://img1.qunarzz.com/sight/p0/1803/e3/e3d06119c2dd8de7a3.img.jpg_r_800x800_ebc6ecd2.jpg']
    };
  },
  methods: {
    previewIMg(){
      this.showGallery = !this.showGallery;
    }
  },
  components: {
    Gallery
  }
};
</script>
<style lang="scss" scoped>
.banner {
  position: relative;
  .banner-img {
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    img {
      width: 100%;
    }
  }
  .banner-info {
    color: #fff;
    height: 0.4rem;
    line-height: 0.4rem;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding-left: 0.2rem;
    background-image: linear-gradient(
      top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
  }
}
</style>
