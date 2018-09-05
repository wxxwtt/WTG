<template>
  <div class="header">
    <div class="back">返回</div>
    <div>搜索</div>
    <div>城市</div>
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
  }
</style>

