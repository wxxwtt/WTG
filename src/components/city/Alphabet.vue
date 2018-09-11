<template>
  <ul class="alphabet">
    <li 
      v-for="item in letters" 
      :key="item"
      @click="chang"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :ref="item"
      >{{item}}</li>
  </ul>
</template>
<script>
  export default {
    name : 'Alphabet',
    props : {
      alphabet : Object
    },
    data(){
      return {
        touchStatus:false,
        startY:0,
        timer:null
      }
    },
    updated(){
      this.startY = this.$refs['A'][0].offsetTop;
    },
    methods : {
      chang(e){
        this.$emit('changeAlphabet',e.target.innerText)
      },
      handleTouchStart(){
        this.touchStatus = true;
      },
      handleTouchMove(e){
        if(this.touchStatus){
          if(this.timer){
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(()=>{
            let touchY = e.touches[0].clientY - 88
            let index = Math.floor((touchY - this.startY) / 20);
            if(index >= 0 && index < this.letters.length){
              this.$emit('changeAlphabet',this.letters[index])
            }
          },16)

        }
      },
      handleTouchEnd(){
        this.touchStatus = false;
      }
    },
    computed : {
      letters(){
        const letter = [];
        for(let i in this.alphabet){
          letter.push(i)
        }
        return letter;
      }
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
