<template>
  <div class="slider">

  <button @click="prev(counter)"><i class="fas fa-chevron-circle-left"></i></button>
<div v-for='(picture,index) in pictures'
v-bind:key='index'>
  <img :src="picture.img" alt="" v-show="counter == picture.id">
</div>
<button @click="next(counter)"><i class="fas fa-chevron-circle-right"></i></button>

    </div>
    <div v-for="(images, index_img) in pictures"
    v-bind:key="index_img" class="div_img">{{caption(images.id)}}
      <img :src="images.img" alt="" :style="{border:border}" @click="touch(images.id)">
    </div>


</template>

<script>

export default {
  data:function(){
    return{
     pictures:[
       {img: 'https://images.unsplash.com/photo-1607989899519-0dd55b8da249?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2F0ZXIlMjBmYWxsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', id:1},
       {img: 'https://images.unsplash.com/photo-1564258443-0c2e108f445a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGVyJTIwZmFsbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', id:2},
       {img: 'https://images.unsplash.com/photo-1562089432-b9faf2227db9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdhdGVyJTIwZmFsbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', id:3},
       {img: 'https://images.unsplash.com/photo-1591867853709-12638a716d58?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdhdGVyJTIwZmFsbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', id:4}

     ],
     counter:1,
     border: ''
    }
  },methods:{
    prev:function(){
       this.counter--
       if(this.counter == this.pictures.id){
      return  this.pictures[this.counter]
      }else if(this.counter <= 0){
        this.counter = this.pictures.length
      }
    },
    next:function(){
 
      this.counter++
       if(this.counter == this.pictures.id){
         this.border = '2px solid orange'
      return  this.pictures[this.counter]
      }else if(this.counter > this.pictures.length){
       this.counter = 1
      }
  },caption(a){
    if(this.counter == a){
      this.border = '6px solid orange'
    }else{
      this.border = 'none'
    }
  }
  
  }
}

</script>

<style scoped>

.slider{
  width: 900px;
  margin: auto;
  display: flex;
}

button{
  z-index: 99;
background: transparent;
border: none;
}
button:hover{
  cursor: pointer;
}
img{
 width: 800px;
 position: relative;
}
i{
  font-size: 3em;
}
.container{
  width: 80%;
  display: flex;
}
.container img{
  width: 20%;
}
.div_img{
  width: 80%;
  margin: auto;
  display: inline;
  margin-top: 20px;
}
.div_img img{
  width: 20%;
}
</style>