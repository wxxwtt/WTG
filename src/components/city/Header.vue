<template>
  <div class="city">
    <router-link to="/">
      <span class="iconfont icon-fanhui" ></span>
    </router-link>
     城市选择
    </div>
</template>
<script>
export default {
  name: "CityHeader"
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/scss/base.scss";
.city {
  position: relative;
  line-height: 0.44rem;
  height: 0.44rem;
  background: $bgcolor;
  text-align: center;
  color: #fff;
  font-size: 0.16rem;
  .icon-fanhui {
    color: #fff;
    position: absolute;
    left: .15rem;
    top: 0;
  }
}
</style>
