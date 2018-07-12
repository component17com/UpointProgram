<template>
  <div class="tabBar-wrapper">
      <div class="tabBar__tab">
        <div class="tabBar__tab-name">
          <i class="mdi mdi-view-list"></i>
          Номенклатура
        </div>
        <div class="tabBar__tab-close">
          <el-button circle><i class="mdi mdi-close"></i></el-button>
        </div>
      </div>
      <div class="tabBar__tab">
        <div class="tabBar__tab-name">
          <i class="mdi mdi-view-list"></i>
          Номенклатура
        </div>
        <div class="tabBar__tab-close">
          <el-button circle><i class="mdi mdi-close"></i></el-button>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
  }
</script>

<style lang="scss">
    .tabBar-wrapper{
      background-color: #3d354b;
      display: flex;
      align-items: center;
      z-index: 5;
      border-bottom: 2px solid white;
      /*----Вкладка----*/
      .tabBar__tab{
        position: relative;
        display: flex;
        align-items: center;
        padding: 5px 10px;
        color: white;
        width: 224px;
        justify-content: space-between;
        z-index: 1;
        font-size: 12px;
        margin-left: 5px;
        .tabBar__tab-name{
          .mdi{
            margin-right: 5px;
            line-height: 17px;
          }
        }
        button{
          background-color: transparent;
          border: none;
        }
        .mdi{
          font-size: 14px;
          background-color: transparent;
        }
        &:before{
          content: "";
          background-color: #c1c4cb;
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          z-index: -1;
          border-top-right-radius: 3px;
          border-top-left-radius: 3px;
          transform: perspective(20px) rotateX(3deg);
        }
        button{
          padding: 0;
        }
      }
    }
</style>
