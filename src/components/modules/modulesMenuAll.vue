<template>
  <div class="modulesAll-wrapper">
    <draggable v-model="modules" :options="{group:'modules', animation:200}" class="modules-wrapper"
               :no-transition-on-drag="true" @start="dragStart" @end="dragEnd">
      <transition-group :name="!drag? 'list-complete' : null" :css="true">
        <div v-for="(item, index) in modules" :key="index" class="menuModul">
          <div class="menuModul-icon"><i class="mdi" :class="item.icon"></i></div>
          <div class="menuModul-title">{{item.name | sliceText(12)}}</div>
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        modules: [{
          name: "Снабжение",
          icon: 'mdi-basket',
          fixed: false,
          drag: false,
        }, {
          name: "Номенклатура",
          icon: 'mdi-archive',
          fixed: false,
        }, {
          name: "Инвентаризация",
          icon: 'mdi-book',
          fixed: false,
        }, {
          name: "Контрагенты",
          icon: 'mdi-account-multiple',
          fixed: false,
        }, {
          name: "Заявки поставщикам",
          icon: 'mdi-account-box-outline',
          fixed: false,
        }, {
          name: "Почтовый клиент",
          icon: 'mdi-yin-yang',
          fixed: false,
        }, {
          name: "Яндекс почта",
          icon: 'mdi-email',
          fixed: false,
        }, {
          name: "Трелло",
          icon: 'mdi-trello',
          fixed: false,
        }, {
          name: "Калькулятор",
          icon: 'mdi-calculator',
          fixed: false,
        }, {
          name: "Структура компании",
          icon: 'mdi-filmstrip',
          fixed: false,
        }, {
          name: "Структура компании",
          icon: 'mdi-filmstrip',
          fixed: false,
        }, {
          name: "Структура компании",
          icon: 'mdi-filmstrip',
          fixed: false,
        }],
      }
    },
    methods: {
      add: function () {
        this.list.push({
          name: 'Номенклатура'
        });
      },
      replace: function () {
        this.list = [{
          name: 'Медиаплеер',
        }]
      },
      drag: function(){

      },
      dragStart: function () {

      },
      dragEnd: function () {

      },
    }
  }
</script>

<style lang="scss">

  .modulesAll-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .modules-wrapper > span {
      display: flex;
      align-items: center;
      min-height: 20px;
      flex-basis: 100%;
      flex-wrap: wrap;
      position: relative;
      padding: 10px;

      &:before {
        position: absolute;
        content: "";
        background-color: rgba(36, 31, 46, 0.6);
        border-radius: 4px;
        height: 100px;
        left: 10px;
        right: 10px;
        top: 10px;
        z-index: 1;
      }
    }
    .menuModul {
      width: 118px;
      height: 100px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      cursor: pointer;
      z-index: 2;
      transition: 0.3s all ease;
      &-icon {
        flex-basis: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        font-size: 30px;
        color: #eceff1;
        margin-bottom: 5px;
      }
      &-title {
        flex-basis: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        color: #eceff1;
        font-size: 12px;
      }
      &:hover {
        background-color: rgba(36, 31, 46, 0.5);
        border-radius: 4px;
        .menuModul-icon, .menuModul-title {
          color: white;
        }
      }
      &:focus, &:active {
        background-color: transparent;
      }
    }
  }

  .sortable-chosen {
    border-radius: 4px !important;
    background-color: rgba(36, 31, 46, 1) !important;
    opacity: 1 !important;
  }

  .sortable-ghost {
    background-color: rgba(255, 255, 255, 0.4) !important;
    opacity: 1 !important;
  }

  .menuModul + .sortable-chosen + .sortable-ghost {
    background-color: green !important;
    opacity: 1 !important;
  }
</style>
