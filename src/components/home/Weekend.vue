<template>

  <div>
    <h3 class="like-title">周末去哪儿</h3>
    <div class="likeList border-bottom" v-for="item in likeList" :key="item.id">
        <div class="img-box">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="attractions">
          <h4 class="attractions-title">{{item.name}}</h4>
          <p class="desc">{{item.desc}}</p>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Weekend",
  data() {
    return {
      likeList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1603/ad/ad84d5339c3a34f390.water.jpg_640x276_9cdbe8c8.jpg",
          name: "北京欢乐谷",
          desc:"数百年的宫廷庙宇，至今依旧威严霸气"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
          name: "北京清凉避暑胜地",
          desc:"游客寻幽探险、休闲度假的绝好去处"
        }
      ]
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
  // display: flex;
  padding: 0.05rem;
  .img-box {
    width: 100%;
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
