<template>
  <div class="pageError-wrapper">
    <div class="pageError-title">Ошибка загрузки модуля!</div>
    <div class="pageError-text">
      К сожалению, мы не смогли открыть данный модуль,<br>
      сейчас мы сообщим об этом разработчику.
    </div>
    <div class="pageError-buttons">
      Закрыть модуль
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  .pageError-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-image: url("../../static/images/UPoint/1_all_stars.svg");
    background-position: center;
    background-size: contain;
    background-color: #241f2e;
    .pageError-title {
      margin-top: 50px;
      color: #ffffff;
      line-height: 1.5;
      font-size: 36px;
      font-weight: 500;
      text-align: center;
      margin-bottom: 15px;
    }
    .pageError-text {
      color: #ffffff;
      line-height: 1.5;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      margin-bottom: 40px;
      position: relative;
      &:after {
        position: absolute;
        content: url("../../static/images/UPoint/call_spaceman.svg");
        left: -300px;
        top: -300px;
        width: 463px;
      }
    }
    .pageError-buttons {
      background-color: #ff5722;
      color: #ffffff;
      font-size: 14px;
      font-weight: 500;
      padding: 12px 20px;
      border-radius: 4px;
      transition: 0.3s ease;
      &:hover {
        background-color: #ff794e;
        border-color: #ff794e;
        color: #fff;
      }
    }
  }
</style>
