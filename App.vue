<template>
  <div id="app">
    <h1> --- {{a}} --- </h1>
  </div>
</template>

<style>
  #app {
    background: yellow;
  }
</style>

<script>
  
  import App from './App.js'

  export default {
    mixins:[App]
  }
</script>
