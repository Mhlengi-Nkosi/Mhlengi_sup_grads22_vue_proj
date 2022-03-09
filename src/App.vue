
<!--
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script> -->

<template>
  <the-header title="List of Things"></the-header>
  <div id="app">
    <the-thing></the-thing>
  </div>
</template>

<script>

import TheHeader from './components/layouts/TheHeader.vue';
//import AddThings from './components/AddThings.vue';
import TheThing from './components/TheThing.vue';

export default {
  name: 'App',
  components: {
    TheThing,
    TheHeader,
    //AddThings,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #2c3e50;
  margin-top: 60px;
  
}
</style>
