<template>
  <div class="header">
    <div class="back"><span class="iconfont icon-fanhui"></span></div>
    <div class="search"><span class="iconfont icon-sousuo"></span>搜索</div>
    <router-link to="/city">
       <div class="city">{{$store.state.cityObj.name}}<span class="iconfont icon-sanjiao"></span></div>
    </router-link>
   
  </div>
</template>
<script>
export default {
  name : 'HomeHeader',
  data(){
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/style/scss/base.scss';
  .header {
    background-color: $bgcolor;
    display: flex;
    height: .44rem;
    line-height: .44rem;
    justify-content: space-between;
    color: #fff;
    .back,.city {
      padding: 0 .1rem;
      color: #fff;
    }
    .search {
      flex: 1;
      height: .3rem;
      margin-top: .07rem;
      background: #fff;
      border-radius: .05rem;
      line-height: .3rem;
      color: #666;
    }
  }
</style>

