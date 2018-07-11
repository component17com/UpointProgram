<template>
  <div class="start-wrapper">
    <div class="start__logo">
      <img src="static/images/UPoint/uP_light_app_main.svg" alt="">
    </div>
    <div class="start__welcome">Добро пожаловать!</div>
    <div class="start__title">Автоматизация бизнеса — это проще, чем  вы думали.</div>
    <div class="start__block">
      <div class="start__block-title">К сожалению, у вас не установлено ни одной конфигурации,<br>
        чтобы продолжить работу с программой выберите один из предложенных вариантов:</div>
      <div class="start__block-buttons">
        <el-button type="primary">У меня есть token-ключ конфигурации</el-button>
        <el-button type="primary">Создать собственную конфигурацию в UStore</el-button>
      </div>
      <div class="start__block-smallText">Вы можете изучить дополнительный материал для более комфортной работы с программой.</div>
      <div class="start__block-smallButton">
        <el-button type="text">Пройти обучение <i class="mdi mdi-arrow-right"></i></el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="scss">
  .start-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-image: url("../../../static/images/UPoint/1_all_stars.svg");
    background-position: center;
    background-size: contain;
    background-color: #241f2e;
    .start__block-buttons{
      width: 350px;
      button{
        width: 100%;
        margin-top: 20px;
      }
    }
    .start__welcome{
      margin-top: 20px;
      text-align: center;
      color: #ffffff;
      line-height: 1.5;
      font-size: 16px;
      font-weight: 500;
    }
    .start__title{
      text-align: center;
      color: #ffffff;
      line-height: 1.5;
      font-size: 16px;
      font-weight: 500;
    }
    .start__block{
      padding: 40px 30px;
      margin-top: 40px;
      position: relative;
      width: 600px;
      border-radius: 4px;
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &:before{
        position: absolute;
        content: url("../../../static/images/UPoint/1_moon.svg");
        right: -400px;
        top: -400px;
      }
      &:after{
        position: absolute;
        content: url("../../../static/images/UPoint/svg_flying_man.svg");
        left: -220px;
        top: -30px;
        width: 263px;
        height: 180px;
      }
    }
    .start__block-title{
      text-align: center;
      font-size: 12px;
      line-height: 1.5;
      color: #515254;
      margin-bottom: 20px;
    }
    button + button{
      margin-left: 0;
    }
    .start__block-smallText{
      color: #888888;
      line-height: 1.17;
      font-size: 12px;
      text-align: center;
      margin-top: 40px;
    }
    .start__block-smallButton{
      width: 100%;
      text-align: center;
      margin-top: 10px;
      button{
        padding: 0;
      }
    }
  }
</style>
