<template>
  <div class="search">
    <input type="text" placeholder="输入城市名称">
  </div>
</template>
<script>
export default {
  name: "Search"
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/scss/base.scss";
  .search {
    height: .44rem;
    background: $bgcolor;
    padding: 0 .1rem;
    // box-sizing: border-box;
    
    input {
      text-align: center;
      height: .30rem;
      line-height: .30rem;
      width: 100%;
      border-radius:.06rem;
      padding: 0 .1rem;
      border:none;
      box-sizing: border-box;
      outline: none;
      color: #666;
    }
  }
</style>
