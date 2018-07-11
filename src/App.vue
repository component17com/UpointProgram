<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  *{
    box-sizing: border-box;
  }
  #app {
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    overflow: hidden;
    background-color: #3d354b;
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 2;
      overflow: hidden;
    }
  }

  body, html {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    height: 100vh;
    overflow: hidden;
  }

</style>
