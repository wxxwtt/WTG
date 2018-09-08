<template>
 <div>
    <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="icons">
                  <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img-box">
                      <img :src="item.imgUrl" alt="">
                      </div>
                    <p>{{item.name}}</p>
                </div>
          </div>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
 </div>
</template>

<script>
export default {
  name: "Icons",
  props:{
    icon:Array
  },
  data() {
    return {
      swiperOption:{
        autoplay:false
      }
    };
  },
  computed: {
    pages() {
      let pages = [];
      this.icon.forEach((item, index) => {
        let page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item)
      });
      return pages;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/scss/base.scss";
.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  margin-bottom: .15rem;
  .icon {
    overflow: hidden;
    height: 0;
    width: 25%;
    padding-bottom: 25%;
    float: left;
    position: relative;
    .icon-img-box {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      padding: 0.15rem;
      box-sizing: border-box;
      img {
        width: 100%;
        display: block;
      }
    }
    p {
      position: absolute;
      left: 0;
      right: 0;
      text-align: center;
      bottom: 0rem;
      line-height: 0.22rem;
      height: 0.22rem;
      margin: 0;
      font-size: 0.14rem;
      color: $textColor;
      @include text-ellipsis();
    }
  }
}
</style>
