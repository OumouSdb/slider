<template>
  <div class="slider">
   <div>
     <button @click="prev">Previous</button>
     <button @click="next">Next</button>
     <img src="" alt="">
   </div>
  </div>
</template>

<script>
export default {
  data:function(){
    return{
     
    }
  },methods:{
    prev:function(){
      console.log('Prev')
    },
    next:function(){
      console.log('next')
    }
  }
  }


</script>

<style scoped>
button:nth-child(1){
  float: left;
}
button:nth-child(2){
  float: right;
}
.slider{
  width: 1150px;
  margin: auto;
}
</style>