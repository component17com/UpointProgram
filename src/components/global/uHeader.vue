<template>
  <div class="uHeader-wrapper">

    <div class="uHeader__user">
      <div class="uHeader__user-img">
        <img src="static/images/avatar.jpg" alt="">
      </div>
      <div class="uHeader__user-name">
        Александр Константинопольский
      </div>
    </div>

    <div class="uHeader__devMode">
      <div class="uHeader__devMode-title">Режим разработчика</div>
      <div class="uHeader__devMode-buttons">
        <el-button title="Добавить новый модуль"><i class="mdi mdi-folder-plus"></i></el-button>
        <el-button title="Опубликовать модуль"><i class="mdi mdi-folder-upload"></i></el-button>
        <el-button title="Выйти из режима разработчика"><i class="mdi mdi-power"></i></el-button>
      </div>
    </div>

    <div class="uHeader__configMenu">
      <el-button @click="showConfigMenu = !showConfigMenu">
        <i class="mdi mdi-laptop-mac"></i>Название конфигурации
        <i class="mdi mdi-chevron-down"></i>
      </el-button>
      <div class="uHeader__configMenu-drop">
        <el-collapse-transition>
          <div v-show="showConfigMenu">
            <div class="configMenu-title">Установленные конфигурации</div>
            <div class="configMenu-item" v-for="item in configs" :key="item.id"
                 :class=" item.isActive === true ? 'configMenu-item-active' : ''">
              {{ item.name | sliceText(30)}}
            </div>
            <div class="configMenu__footer">
              <div class="configMenu__footer-item">Добавить конфигурацию <i class="mdi mdi-plus-box-outline"></i></div>
              <div class="configMenu__footer-item">Управление конфигурациями <i class="mdi mdi-laptop-mac"></i></div>
            </div>
          </div>
        </el-collapse-transition>
      </div>
    </div>

    <div class="uHeader__buttons">
      <el-button title="Настройки"><i class="mdi mdi-settings"></i></el-button>
      <el-button title="Выйти"><i class="mdi mdi-exit-to-app"></i></el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        showConfigMenu: false,
        configs:[{
          name:'TeamConf',
          isActive: true,
        },{
          name:'Название конфигурации'
        },{
          name:'Автомастерская'
        },{
          name:'Длинное название конфигурации'
        },{
          name:'Очень длинное название конфигурации'
        }]
      }
    }
  }
</script>

<style lang="scss">

.uHeader-wrapper{
  display: flex;
  align-items: center;
  height: 30px;
  max-height: 30px;
  box-shadow: 0 2px 4px 0 rgba(32, 32, 32, 0.5);
  background-color: #202020;
  border-bottom: solid 1px #3d3d3d;
  padding: 0 10px;
  box-sizing: border-box;
  user-select: none;

  /*---User img and name---*/
  .uHeader__user{
    display: flex;
    align-items: center;
    margin-right: auto;
    &-name{
      color: #ffffff;
      line-height: 1.5;
      font-size: 12px;
    }
    &-img{
      width: 20px;
      height: 20px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }

  /*-----Бар разработчика----*/
  .uHeader__devMode{
    display: flex;
    align-items: center;
    color: #13ce66;
    width: 260px;
    justify-content: space-between;
    height: 100%;
    padding: 0 2px 0 10px ;
    border-left: 1px solid #3d3d3d;
    font-size: 12px;
    box-sizing: border-box;
    &-buttons{
      height: 100%;
      button{
        padding: 0 8px;
        background-color: transparent;
        border: none;
        color: #13ce66;
        position: relative;
        z-index: 1;
        transition: 0.3s all ease;
        height: 100%;
        border-radius: 0;
        margin: 0;
       &:hover{
         background-color: rgba(255, 255, 255, 0.2);
       }
      }
      .mdi{
        font-size: 16px;
      }
      .mdi-power{
        color: #ff5722;
      }
    }
  }

  /*---Меню конфигурации----*/
  .uHeader__configMenu{
    height: 100%;
    width: 260px;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 10px;
    border-right: 1px solid #3d3d3d;
    border-left: 1px solid #3d3d3d;
    box-sizing: border-box;
    transition: 0.3s ease all;
    &:hover{
      background-color: black;
      span{
        color: white;
      }
    }
    & > button{
      width: 100%;
      padding: 0;
      margin: 0;
      background-color: transparent;
      color: #cccccc;
      height: 100%;
      border: none;
      span{
        display: flex;
        align-items: center;
        height: 100%;
        transition: 0.3s all ease;
      }
      .mdi-laptop-mac{
        margin-right: 10px;
      }
      .mdi-chevron-down{
        margin-left: auto;
      }
    }
    .uHeader__configMenu-drop{
      position: absolute;
      width: 260px;
      top: 100%;
      left: 0;
      right: 0;
      z-index: 1;
      & > div{
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
        background-color: #ffffff;
        border: solid 1px #dddddd;
        border-radius: 4px;
      }
      .configMenu-title{
        padding: 10px;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.5;
        color: #241f2e;
      }
      .configMenu-item{
        height: 28px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        font-size: 12px;
        color: #515254;
        line-height: 1.5;
        cursor: pointer;
        transition: 0.3s ease all;
        position: relative;
        &:hover{
          background-color: #eeeeee;
        }
      }
      .configMenu-item-active{
        font-weight: 500;
        color: #ff5722;
        &:before{
          position: absolute;
          content: "\F12C";
          font: normal normal normal 14px "Material Design Icons";
          right: 10px;
        }
      }
      .configMenu__footer{
        padding-top: 10px;
        border-top: 1px solid #dddddd;
        padding-bottom: 5px;
      }
      .configMenu__footer-item{
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        font-size: 12px;
        color: #515254;
        line-height: 1.5;
        cursor: pointer;
        transition: 0.3s ease all;
        &:hover{
          background-color: #eeeeee;
        }
        .mdi{
          font-size: 14px;
        }
      }
    }
  }

  /*---Настройки и выход-----*/
  .uHeader__buttons{
    height: 100%;
    padding-left: 10px;
    display: flex;
    align-items: center;
    button{
        padding: 0 8px;
        background-color: transparent;
        border: none;
        color: white;
        position: relative;
        z-index: 1;
        transition: 0.3s all ease;
        height: 100%;
        border-radius: 0;
        margin: 0;
        font-size: 16px;
        &:hover{
          background-color: rgba(255, 255, 255, 0.2);
        }
      }
  }
}
</style>
