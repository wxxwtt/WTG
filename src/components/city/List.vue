<template>

  <div class="city-list" ref="wrapper">
    <div>
      <div class="area">
        <p>当前城市</p>
        <div class="city-btn">
          <button>{{$store.state.cityObj.name}}</button>
        </div>
      </div>
      <div class="area">
          <p>热门城市</p>
          <div class="city-btn" v-for="item in hotCities" :key="item.id">
            <button @click="changeC(item)">{{item.name}}</button>
          </div>
      </div>
        <div class="area" 
          v-for="(item, key) of alphabet" 
          :key="key" 
          :ref="key"
        >
          <p>{{key}}</p>
          <div class="list">
            <ul>
              <li class="border-bottom" 
                v-for="area in item"
                :key="area.id"
                @click="changeC(area)"
              >
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
    alphabet:Object,
    CAlphabet : String
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      'click':true
    })
  },
  methods : {
    changeC(cityObj){
      this.$store.commit('changecity',cityObj);
      this.$router.push('/')
    }
  },
  watch : {
    CAlphabet () {
      if (this.CAlphabet) {
        const element = this.$refs[this.CAlphabet][0]
        this.scroll.scrollToElement(element,300)
      }
    }
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
