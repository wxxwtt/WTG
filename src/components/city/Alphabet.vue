<template>
  <ul class="alphabet">
    <li v-for="(item,key) in alphabet" :key="key">{{key}}</li>
  </ul>
</template>
<script>
  export default {
    name : 'Alphabet',
    props : {
      alphabet : Object
    }
  }
</script>
<style lang="scss" scoped>
@import "@/assets/style/scss/base.scss";

  .alphabet {
    position: absolute;
    right:0;
    top:.88rem;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width:.3rem;
    color: $bgcolor;
    li {
      height: .2rem;
      line-height: .2rem;
    }
  }
</style>
