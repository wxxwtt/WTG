<template>

  <div>
    <h3 class="like-title">猜你喜欢</h3>
    <div class="likeList border-bottom" v-for="item in recommend" :key="item.id">
        <div class="img-box">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="attractions">
          <h4 class="attractions-title">{{item.title}}</h4>
          <p class="desc">{{item.desc}}</p>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  props:{
    recommend:Array
  },
  data() {
    return {
      
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/scss/base.scss";
.like-title {
  padding-left: 0.15rem;
  line-height: 0.3rem;
  background-color: #eee;
  margin:  0 0.05rem;;
  font-weight: normal;
}
.likeList {
  display: flex;
  padding: 0.05rem;
  .img-box {
    width: 1rem;
    height: 1rem;
    img {
      width: 100%;
    }
  }
  .attractions {
    flex: 1;
    min-width: 0;
    padding-left: 0.1rem;
    .attractions-title {
      font-size: 0.16rem;
      line-height: 0.3rem;
      margin: 0;
      font-weight: normal;
      @include text-ellipsis();
    }
    .desc {
      @include text-ellipsis();
    }
  }
}
</style>
