<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html {
    font-size: 100px;
  }
  body {
    font-size: .12rem;
  }
  div {
    box-sizing: border-box;
  }
</style>
