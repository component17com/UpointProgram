<template>
  <div class="connectionError-wrapper">
    <img src="static/images/UPoint/ufo.svg" alt="">
    <div class="connectionError-title">Отсутствует подключение к Интернету</div>
    <div class="connectionError-text">Работа программы возобновится автоматически, как только соединение будет восстановлено.</div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="scss">
  .connectionError-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-image: url("../../static/images/UPoint/1_all_stars.svg"), linear-gradient(0deg, #3D354B 0%, #241F2E 100%);
    background-position: center;
    background-size: contain;
    background-color: #241f2e;
    img{
      width: auto;
    }
    .connectionError-title{
      font-size: 36px;
      font-weight: 500;
      color: #ffffff;
      line-height: 0.67;
      margin-top: 90px;
      margin-bottom: 30px;
    }
    .connectionError-text{
      font-size: 16px;
      color: #ffffff;
      line-height: 1.13;
    }
  }
</style>
