<template>
<div>
  <div class="search">
    <input type="text" placeholder="输入城市名或拼音" v-model="keyword">
  </div>
  <div class="searchList" v-show="keyword" ref="wrapper">
    <ul>
      <li class="border-bottom" v-for="(item, index) in list" :key="index"
        @click="changeC(item)"
      >{{item.name}}</li>
      <li v-show="showNoData">暂无数据</li>
    </ul>
  </div>
</div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "Search",
  props: {
    alphabet: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true
    });
  },
  computed: {
    showNoData() {
      return !this.list.length;
    }
  },
  methods: {
    changeC(cityObj) {
      this.$store.commit("changecity", cityObj);
      this.$router.push("/");
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        let result = [];
        for (let i in this.alphabet) {
          this.alphabet[i].forEach(element => {
            if (
              element.name.indexOf(this.keyword) > -1 ||
              element.spell.indexOf(this.keyword) > -1
            ) {
              result.push(element);
            }
          });
        }
        // console.log(result);
        this.list = result;
      }, 100);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/scss/base.scss";
.search {
  height: 0.44rem;
  background: $bgcolor;
  padding: 0 0.1rem;
  // box-sizing: border-box;

  input {
    text-align: center;
    height: 0.3rem;
    line-height: 0.3rem;
    width: 100%;
    border-radius: 0.06rem;
    padding: 0 0.1rem;
    border: none;
    box-sizing: border-box;
    outline: none;
    color: #666;
  }
}
.searchList {
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0.88rem;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 1;
  li {
    line-height: 0.26rem;
    padding-left: 0.1rem;
  }
}
</style>
