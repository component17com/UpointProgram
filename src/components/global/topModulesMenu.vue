<template>
  <div class="topModulesMenu-wrapper">
    <div class="topModulesMenu__board">
      <div class="topModulesMenu__board-icon">
        <i class="mdi mdi-view-dashboard"></i>
      </div>
      <div class="topModulesMenu__board-title">
        Рабочий стол
      </div>
    </div>
    <div class="topModulesMenu__all">
      <!--1 Модуль-->
      <div class="topModule__item" v-for="item in modules" :key="item.id" :title="item.name">
        <div class="topModule__item-icon">
          <i class="mdi" :class="item.icon"></i>
        </div>
        <div class="topModule__item-title">
          {{item.name | sliceText(12)}}
        </div>
      </div>

    </div>
    <div class="topModulesMenu__allBtn">
      <div class="topModulesMenu__allBtn-icon">
        <i class="mdi mdi-dots-horizontal"></i>
      </div>
      <div class="topModulesMenu__allBtn-title">
        Все модули
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        modules:[{
          name: 'Yandex Почта111111',
          icon: 'mdi-email'
        },{
          name: 'Yandex Почта222222',
          icon: 'mdi-email'
        },{
          name: 'Yandex Почта3333333',
          icon: 'mdi-email'
        },{
          name: 'Yandex Почта4444',
          icon: 'mdi-email'
        },{
          name: 'Yandex Почта',
          icon: 'mdi-email'
        },{
          name: 'Yandex Почта',
          icon: 'mdi-email'
        },{
          name: 'Yandex Почта',
          icon: 'mdi-email'
        },{
          name: 'Yandex Почта',
          icon: 'mdi-email'
        },{
          name: 'Yandex Почта',
          icon: 'mdi-email'
        },{
          name: 'Yandex Почта',
          icon: 'mdi-email'
        },{
          name: 'Yandex Почта',
          icon: 'mdi-email'
        },{
          name: 'Yandex Почта',
          icon: 'mdi-email'
        },{
          name: 'Yandex Почта',
          icon: 'mdi-email'
        },{
          name: 'Yandex Почта',
          icon: 'mdi-email'
        },{
          name: 'Yandex Почта',
          icon: 'mdi-email'
        },{
          name: 'Yandex Почта',
          icon: 'mdi-email'
        },{
          name: 'Yandex Почта',
          icon: 'mdi-email'
        },{
          name: 'Yandex Почта',
          icon: 'mdi-email'
        }]
      }
    }
  }
</script>

<style scoped lang="scss">

  .topModulesMenu-wrapper{
    background-image: linear-gradient(0deg, #3D354B 0%, #241F2E 100%);
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
    height: 50px;
    min-height: 50px;
    display: flex;
    align-items: center;
    user-select: none;
    z-index: 10;
    /*---Рабочий стол----*/
    .topModulesMenu__board{
      width: 100px;
      min-width: 100px;
      box-sizing: border-box;
      padding: 0 10px;
      border-right: #515254 1px solid;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      height: auto;
      cursor: pointer;
      &-icon{
        flex-basis: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #cccccc;
        font-size: 18px;
        transition: 0.3s ease all;
      }
      &-title{
        margin-top: 3px;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #cccccc;
        font-size: 11px;
        transition: 0.3s ease all;
      }
      &:hover, &:active{
        .topModulesMenu__board-icon, .topModulesMenu__board-title{
          color: white;
        }
      }
    }
    /*-----Кнопка все модули----*/
    .topModulesMenu__allBtn{
      width: 100px;
      min-width: 100px;
      box-sizing: border-box;
      padding: 0 10px;
      border-left: #515254 1px solid;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      height: auto;
      cursor: pointer;
      margin-left: auto;
      &-icon{
        flex-basis: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #cccccc;
        font-size: 18px;
        transition: 0.3s ease all;
      }
      &-title{
        margin-top: 3px;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #cccccc;
        font-size: 11px;
        transition: 0.3s ease all;
      }
      &:hover, &:active{
        .topModulesMenu__allBtn-icon, .topModulesMenu__allBtn-title{
          color: white;
        }
      }
    }
    /*----Избранные модули-----*/
    .topModulesMenu__all{
      display: flex;
      align-items: center;
      overflow: hidden;
      flex-grow: 2;
      flex-wrap: wrap;
      height: 50px;
      min-height: 50px;
      .topModule__item{
        width: 100px;
        height: 50px;
        min-height: 50px;
        min-width: 100px;
        box-sizing: border-box;
        padding: 8px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        cursor: pointer;
        &-icon{
          flex-basis: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #cccccc;
          font-size: 18px;
          transition: 0.3s ease all;
        }
        &-title{
          flex-basis: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #cccccc;
          font-size: 11px;
          transition: 0.3s ease all;
        }
        &:hover, &:active{
          .topModule__item-icon, .topModule__item-title{
            color: white;
          }
        }
      }
    }
  }
</style>
