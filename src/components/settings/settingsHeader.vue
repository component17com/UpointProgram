<template>
  <div class="settingsHeader">
    <div class="settingsHeader-title">Настройки</div>
    <div class="settingsHeader-search">
      <el-input
        placeholder="Поиск"
        prefix-icon="mdi mdi-magnify">
      </el-input>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .settingsHeader{
    display: flex;
    align-items: center;
    height: 40px;
    min-height: 40px;
    background-image: linear-gradient(0deg, #3D354B 0%, #241F2E 100%);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    justify-content: space-between;
    padding: 0 10px;
    z-index: 10;
    touch-action: none;
    /*---Загаловок----*/
    &-title{
      color: #ffffff;
      line-height: 1.5;
      font-size: 16px;
      font-weight: 500;
    }
    /*-----Поиск-----*/
    &-search{
      width: 250px;
      input{
        height: 24px!important;
        background-color: rgba(255, 255, 255, 0.3);
        border: solid 1px #cccccc;
        color: white;
        line-height: 24px;
      }
      .el-input__prefix{
        font-size: 12px;
        color: #cccccc;
        width: 24px;
        height: 24px;
        .mdi:before, .mdi{
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
</style>
