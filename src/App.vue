<template>
  <div id="nav">
    <h1>PROJET SLIDER VUE JS</h1>
    <Slider />
  </div>
  <router-view/>
</template>
<script>
import Slider from "./views/Slider.vue";
export default {
  name: 'App',
  components :{
    Slider
  },
  data(){
    return{
       pictures:[
       {img: 'https://images.unsplash.com/photo-1607989899519-0dd55b8da249?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2F0ZXIlMjBmYWxsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', id:1},
       {img: 'https://images.unsplash.com/photo-1564258443-0c2e108f445a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGVyJTIwZmFsbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', id:2},
       {img: 'https://images.unsplash.com/photo-1562089432-b9faf2227db9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdhdGVyJTIwZmFsbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', id:3},
       {img: 'https://images.unsplash.com/photo-1591867853709-12638a716d58?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdhdGVyJTIwZmFsbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', id:4}

     ]
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
