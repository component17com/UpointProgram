<template>
  <div class="uFooter-wrapper">
    <div class="uFooter__message">
      <div class="uFooter__message-text">Доступно новое обновление (2.0.6)</div>
      <div class="uFooter__message-button">
        <el-button type="text"><i class="mdi mdi-refresh"></i> Обновить</el-button>
      </div>
    </div>
    <div class="uFooter__icons">
      <el-tooltip content="Bottom center" placement="bottom" effect="light">
        <i class="mdi mdi-database stateError"></i>
      </el-tooltip>
      <el-tooltip content="Bottom center" placement="bottom" effect="light">
        <i class="mdi mdi-earth"></i>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="scss">
  .uFooter-wrapper{
    margin-top: auto;
    display: flex;
    align-items: center;
    height: 30px;
    max-height: 30px;
    background-color: #202020;
    padding: 0 10px;
    box-sizing: border-box;
    user-select: none;
    /*----Сообщение в футере-----*/
    .uFooter__message{
      display: flex;
      align-items: center;
      &-text{
        color: #cccccc;
        line-height: 1.45;
        font-size: 11px;
        margin-right: 10px;
      }
    }
    /*----Статусы в футере----*/
    .uFooter__icons{
      margin-left: auto;
      color: white;
      z-index: 1;
      display: flex;
      align-items: center;
      transition: 0.3s all ease;
      border-radius: 0;
      font-size: 16px;
      height: 100%;
      .mdi{
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 10px;
        &:hover{
          background-color: rgba(255, 255, 255, 0.2);
        }
      }
      .stateError{
        color: #ff5722;
      }
    }
  }
</style>
