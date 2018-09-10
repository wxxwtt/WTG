<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hotCities="hotCities" :alphabet="alphabetObj"></city-list>
    <city-alphabet :alphabet="alphabetObj"></city-alphabet>
  </div>
</template>
<script>
import cityHeader from './Header';
import citySearch from './Search';
import cityList from './list';
import cityAlphabet from './Alphabet';
export default {
  name: "city",
  components: {
    cityHeader,
    citySearch,
    cityList,
    cityAlphabet
  },
  data(){
    return {
      hotCities:[],
      alphabetObj:{}
    }
  },
  created(){
    this.getCityList()
  },
  methods : {
    getCityList(){
      this.$axios.get('/api/city.json')
      .then(res => {
        console.log(res);
       if(res.data.ret){
         this.hotCities = res.data.data.hotCities;
         this.alphabetObj = res.data.data.cities;
         console.log(this.alphabetObj )
       }
        
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/scss/base.scss";

</style>
