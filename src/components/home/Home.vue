<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiper="swiperList"></home-swiper>
    <home-icons :icon="iconList"></home-icons>
    <home-recommend :recommend="recommendList"></home-recommend>
    <home-weekend :weekend="weekList"></home-weekend>
  </div>  
</template>
<script>
import HomeHeader from "./HomeHeader";
import HomeSwiper from "./HomeSwiper";
import HomeIcons from "./Icons";
import HomeRecommend from "./Recommend";
import HomeWeekend from "./Weekend";
export default {
  name: "Home",
  data() {
    return {
      city:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekList:[]
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios
        .get("/api/index.json")
        .then(res => {
          // console.log(res);
          let data = res.data.data;
          console.log(data)
          if(res.data.ret){
            
            this.swiperList = data.swiperList;
            this.iconList = data.iconList;
            this.recommendList = data.recommendList
            this.weekList = data.weekendList;
          }
        })
        .catch(err => console.log(err));
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
};
</script>
<style lang="scss">
  
</style>
