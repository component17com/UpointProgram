 <template>
    <div class="settingSubMenu">
      <router-link
        class="settingSubMenu__a" active-class="settingSubMenu__a-active"
        v-for="item in settingsLinks" :key="item.id"
        :to="item.path">
        <i class="mdi" :class="item.icon"></i>{{item.title | sliceText(20)}}
      </router-link>
    </div>
  </template>

  <script>
    export default {
      data(){
        return{
          isDev: true,
          settingsLinks:[{
            title:'Безопасность1111111111',
            icon: 'mdi-lock',
            path: 'settings',
          },{
            title:'Дата и время',
            icon: 'mdi-clock',
            path: 'settings1',
          },{
            title:'Уведомления',
            icon: 'mdi-bell-ring',
            path: 'settings3',
          }]
        }
      }
    }
  </script>

  <style scoped lang="scss">
    .settingSubMenu{
      display: flex;
      flex-direction: column;
      width: 200px;
      min-width: 200px;
      overflow-y: auto;
      background-color: #ffffff;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
      z-index: 7;
      /*----Скролл-----*/
      &::-webkit-scrollbar {
        width: 6px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #c1c4cb;
        border-radius: 6px;
      }

      &::-webkit-scrollbar-track {
        background-color: #eeeeee;
      }
      /*----Пункт меню----*/
      .settingSubMenu__a{
        display: flex;
        width: 100%;
        min-height: 48px;
        height: 48px;
        box-sizing: border-box;
        align-items: center;
        padding: 0 10px;
        border-bottom: 1px solid rgba(61, 53, 75, 0.1);
        color: #515254;
        font-size: 12px;
        transition: 0.3s all ease;
        .mdi{
          font-size: 16px;
          margin-right: 5px;
          width: 28px;
          text-align: center;
        }
        &:hover{
          background-color: rgba(61, 53, 75, 0.1);
        }
      }
      /*----Активный пункт меню----*/
      .settingSubMenu__a-active{
        font-weight: 500;
        color: #241f2e;
        background-color: rgba(61, 53, 75, 0.1);
      }
    }
  </style>
