<template>
  <div class="settingMenu">
    <router-link
      class="settingMenu__a" active-class="settingMenu__a-active"
      v-for="item in settingsLinks" :key="item.id"
      :to="item.path">
      <i class="mdi" :class="item.icon"></i>{{item.title | sliceText(30)}}
    </router-link>
    <div class="settingMenu__dev" :class="isDev === true ? 'devMode-active' : ''">
      <router-link to="" class="settingMenu__dev-a" active-class="settingMenu__dev-active">
        <i class="mdi mdi-code-tags"></i>Для разработчиков
      </router-link>
      <router-link  v-if="isDev" to="" class="settingMenu__dev-a" active-class="settingMenu__dev-active">
        <i class="mdi mdi-folder-star"></i>Репозиторий разработчика
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
  data(){
    return{
      isDev: true,
      settingsLinks:[{
        title:'Основные',
        icon: 'mdi-settings',
        path: 'settings',
      },{
        title:'Управление конфигурациями',
        icon: 'mdi-laptop-mac',
        path: 'settings1',
      },{
        title:'Настройки модулей конфигурации',
        icon: 'mdi-apps',
        path: 'settings3',
      }]
    }
  }
  }
</script>

<style scoped lang="scss">
  .settingMenu{
    display: flex;
    flex-direction: column;
    width: 270px;
    min-width: 270px;
    overflow-y: auto;
    background-color: #3d354b;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
    z-index: 9;
    /*----Скролл-----*/
    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
     background-color: rgba(193, 196, 203, 0.5);
      border-radius: 6px;
    }

    &::-webkit-scrollbar-track {
      background-color: #241f2e;
    }
    /*----Пункт меню----*/
    .settingMenu__a{
      display: flex;
      width: 100%;
      min-height: 48px;
      height: 48px;
      box-sizing: border-box;
      align-items: center;
      padding: 0 10px;
      border-bottom: 1px solid rgba(193, 196, 203, 0.15);
      color: #dddddd;
      font-size: 12px;
      transition: 0.3s all ease;
      .mdi{
        font-size: 16px;
        margin-right: 5px;
        width: 28px;
        text-align: center;
      }
      &:hover{
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
    /*----Активный пункт меню----*/
    .settingMenu__a-active{
      font-weight: 500;
      color: #ffffff;
      background-color: rgba(255, 255, 255, 0.1);
    }
    /*----Настройки разработчиков----*/
    .settingMenu__dev{
      display: flex;
      flex-direction: column;
      margin-top: auto;
      border-top: 1px solid rgba(193, 196, 203, 0.15);
      &-a{
        display: flex;
        width: 100%;
        height: 48px;
        min-height: 48px;
        box-sizing: border-box;
        align-items: center;
        padding: 0 10px;
        border-bottom: 1px solid rgba(193, 196, 203, 0.15);
        font-size: 12px;
        transition: 0.3s all ease;
        .mdi{
          font-size: 16px;
          margin-right: 5px;
          width: 28px;
          text-align: center;
        }
        &:hover{
          background-color: rgba(255, 255, 255, 0.1);
        }
      }
    }
    /*----Активный пункт для разработчиков----*/
    .settingMenu__dev-active{
      font-weight: 500;
      background-color: rgba(255, 255, 255, 0.1);
    }
    /*----Active dev*/
    .devMode-active{
      a{
        color: #13ce66;
      }
    }
  }
</style>
