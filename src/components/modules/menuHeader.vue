<template>
  <div class="menuHeader-wrapper">
    <div class="menuHeader-title">Все модули</div>
    <div class="menuHeader-button"><el-button type="text">Закрыть <i class="mdi mdi-close"></i></el-button></div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
    .menuHeader-wrapper{
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
      height: 43px;
      background-image: linear-gradient(to top, #3d354b, #241f2e);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;
      /*----Title-----*/
      .menuHeader-title{
        font-size: 16px;
        font-weight: 500;
        color: #ffffff;
      }
      /*-----Close----*/
      .menuHeader-button{
        height: 100%;
        button{
          color: white;
          height: 100%;
          display: flex;
          align-items: center;
          transition: 0.3s all ease;
          padding: 8px;
          border-radius: 0;
          span{
            display: flex;
            align-items: center;
          }
          .mdi{
            font-size: 16px;
            margin-left: 5px;
            margin-top: 1px;
          }
          &:hover{
            background-color: rgba(255, 255, 255, 0.2);
            color: white;
          }
        }
      }
    }
</style>
