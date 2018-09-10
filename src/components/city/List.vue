<template>

  <div class="city-list" ref="wrapper">
    <div>
      <div class="area">
        <p>当前城市</p>
        <div class="city-btn">
          <button>北京</button>
        </div>
      </div>
      <div class="area">
          <p>热门城市</p>
          <div class="city-btn" v-for="item in hotCities" :key="item.id">
            <button>{{item.name}}</button>
          </div>
      </div>
        <div class="area" v-for="(item, key) of alphabet" :key="key">
          <p>{{key}}</p>
          <div class="list">
            <ul>
              <li class="border-bottom" v-for="area in item" :key="area.id">
                {{area.name}}
              </li>
            </ul>
          </div>
        </div>

      </div>
  </div>

</template>
<script>
import BScroll from 'better-scroll'
export default {
  name : "CityList",
  props:{
    hotCities:Array,
    alphabet:Object
  },
  mounted(){
    console.log(this.alphabet)
    let scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/style/scss/base.scss";
.city-list {
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin-top: .88rem;
  .area {
    overflow: hidden;
    p {
      padding: 0 .1rem;
      background: #ddd;
      line-height: .26rem;
    }
    .city-btn {
      float: left;
      width: 33.33%;
      text-align: center;
      line-height: .3rem;
      margin-top: .05rem;
      button {
        border: 1px solid $bgcolor;
        background-color: #fff;
        padding: .05rem .25rem;
        outline: none;
      }
    }
    .list {
      li {
         padding-left: .1rem;
        box-sizing: border-box;
        line-height: .3rem;
      }
    }
  }
}
</style>
