<template>
  <div class="preloader-wrapper">
    <div class="preloader-logo">
      <img src="static/images/preloader/split_logo.svg" alt="">
    </div>
    <div class="preloader-title">Загрузка программы</div>
    <div class="preloader__svg">
      <div class="preloader__svg-moon">
        <img src="static/images/preloader/split_moon.svg" alt="">
      </div>
      <div class="preloader__svg-man">
        <img src="static/images/preloader/split_man.svg" alt="">
      </div>
    </div>
    <div class="preloader-info">
      Подключение к базе данных
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  @keyframes rotateMan {
    from{
      transform: rotate(0);
    }
    to{
      transform: rotate(360deg);
    }
  }
  @keyframes rotateStar {
    from{
      transform: scale(1);
    }
    50%{
      transform: scale(1.02);
    }
    from{
      transform: scale(1);
    }
  }
  .preloader-wrapper{
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    background-image: linear-gradient(0deg, #3D354B 0%, #241F2E 100%);
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 20px;
    &:before{
      position: absolute;
      content: '' ;
      background-image: url("../../static/images/preloader/split_stars.svg");
      background-size: contain;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      animation: rotateStar 2s ease infinite;
    }
    .preloader-logo{
      margin-top: 5px;
    }
    .preloader-title{
      margin-top: 10px;
      color: #ffffff;
      line-height: 1.5;
      font-size: 12px;
      font-weight: 500;
    }
    .preloader__svg{
      margin-top: 20px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 230px;
      width: 166px;
      &-man{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transform-origin: center;
        animation: rotateMan 2.5s ease infinite;
      }
    }
    .preloader-info{
      height: 36px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      color: #888888;
      line-height: 1.5;
      font-size: 12px;
      width: 100%;
      text-align: center;
    }
  }
</style>
