<template>
  <div class="settingContent">
    <!--Алерт сверху-->
    <div class="settingContent__alert">
      <div class="settingContent__alert-text">Включение режима разработчика позволяет использовать дополнительные
        функции разработки. Если Вы не являетесь разработчиком, то данную функцию лучше отключить.
      </div>
    </div>
    <!--Секция итемов с заголовком-->
    <div class="settingContent__section">
      <div class="settingContent__section-title">Учетная запись</div>
      <!--Item-->
      <div class="settingContent__section-item">
        <div class="settingItem__desc">
          <h3 class="settingItem__desc-title">Данные для входа</h3>
          <p class="settingItem__desc-text">Запомнить данные для входа в конфигурацию</p>
        </div>
        <div class="settingItem__func">
          <el-switch
            active-color="#13ce66"
            inactive-color="#c60000"
            v-model="switchL">
          </el-switch>
        </div>
      </div>
      <!--Item-->
      <div class="settingContent__section-item">
        <div class="settingItem__desc">
          <h3 class="settingItem__desc-title">Данные для входа</h3>
          <p class="settingItem__desc-text">Запомнить данные для входа в конфигурацию</p>
        </div>
        <div class="settingItem__func">
          <el-select v-model="value" placeholder="Выбрать">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
    </div>
    <!--Секция итемов с заголовком-->
    <div class="settingContent__section">
      <div class="settingContent__section-title">Учетная запись</div>
      <!--Item-->
      <div class="settingContent__section-item">
        <div class="settingItem__desc">
          <h3 class="settingItem__desc-title">Данные для входа</h3>
          <p class="settingItem__desc-text">Запомнить данные для входа в конфигурацию</p>
        </div>
        <div class="settingItem__func">
          <el-input placeholder="placeholder"></el-input>
        </div>
      </div>
      <!--Item-->
      <div class="settingContent__section-item">
        <div class="settingItem__desc">
          <h3 class="settingItem__desc-title">Данные для входа</h3>
          <p class="settingItem__desc-text">Запомнить данные для входа в конфигурацию</p>
        </div>
        <div class="settingItem__func">
          <el-button plain>Выбрать папку</el-button>
        </div>
      </div>
      <!--Item-->
      <div class="settingContent__section-item">
        <div class="settingItem__desc">
          <h3 class="settingItem__desc-title">Данные для входа</h3>
          <p class="settingItem__desc-text">Запомнить данные для входа в конфигурацию</p>
        </div>
        <div class="settingItem__func">
          <el-input placeholder="Please input" class="input-with-select">
            <el-button slot="append" icon="mdi mdi-folder"></el-button>
          </el-input>
        </div>
      </div>
      <!--Item table-->
      <div class="settingContent__section-item settingContent__section-table">
        <div class="settingItem__desc">
          <h3 class="settingItem__desc-title">Данные для входа</h3>
          <p class="settingItem__desc-text">Запомнить данные для входа в конфигурацию</p>
        </div>
        <div class="settingItem__func">
          <el-table
            :data="tableData"
            stripe
            style="width: 100%"
            border>
            <el-table-column
              prop="name"
              label="Название"
            width="150">
              <template slot-scope="scope">
                <div class="">{{ scope.row.name}}</div>
              </template>
            </el-table-column>
            <el-table-column
              label="Namespace">
              <template slot-scope="scope">
                <div class="">{{ scope.row.nameSpace}}</div>
              </template>
            </el-table-column>
            <el-table-column
              prop="version"
              label="Версия"
              width="65">
            </el-table-column>
            <el-table-column
              label="Конфигурация"
              width="155">
              <template slot-scope="scope">
                <el-select></el-select>
              </template>
            </el-table-column>
            <el-table-column
              label="Действия"
              width="100"
              cell-class-name="test">
              <template slot-scope="scope" >
                <el-button title="Опубликовать модуль"><i class="mdi mdi-folder-upload"></i></el-button>
                <el-button title="Открыть папку модуля"><i class="mdi mdi-folder-outline"></i></el-button>
                <el-button title="Удалить"><i class="mdi mdi-delete"></i></el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        switchL: false,
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: '',
        tableData: [{
          name: 'Инвентаризация',
          nameSpace: 'com.component17.inventory',
          version: '1.1.1',
        }, {
          name: 'Номенклатура',
          nameSpace: 'com.component17.namenclature',
          version: '1.1.1',
        }, {
          name: 'Инвентаризация',
          nameSpace: 'com.component17.inventory',
          version: '1.1.1',
        }, {
          name: 'Номенклатура',
          nameSpace: 'com.component17.namenclature',
          version: '1.1.1',
        }]
      }
    }
  }
</script>

<style lang="scss">
  .settingContent {
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    touch-action: none;
    user-select: none;
    z-index: 0;
    overflow-y: auto;
    /*-----Scroll-----*/
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
    /*----Секция----*/
    .settingContent__section {
      margin-bottom: 10px;
      /*---Заголовок----*/
      &-title {
        color: #888888;
        font-size: 12px;
        height: 48px;
        display: flex;
        align-items: center;
        padding: 15px 10px 10px 10px;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(61, 53, 75, 0.1);
      }
      /*-----Item----*/
      .settingContent__section-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 10px;
        transition: 0.3s ease all;
        border-bottom: 1px solid rgba(61, 53, 75, 0.1);
        &:hover {
          background-color: rgba(61, 53, 75, 0.1);
        }
      }
      .settingItem__desc {
        width: 60%;
        &-title {
          margin-bottom: 3px;
        }
      }
      .settingItem__func {
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
      /*-----Item Table----*/
      .settingContent__section-table {
        flex-wrap: wrap;
        .settingItem__desc, .settingItem__func {
          width: 100%;
          .el-table {
            td{
              padding: 0;
              overflow: hidden;
            }
            .cell{
              display: flex;
              align-items: center;
              height: 100%;
              padding: 5px 10px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              word-break: break-all;
              box-sizing: border-box;
            }
            button {
              padding: 0;
              border: none;
              transition: 0.3s ease all;
              background-color: transparent;
              margin-left: 10px;
              width: 20px;
              height: 20px;
              &:hover{
                .mdi{
                  color: #241f2e;
                }
              }
            }
            button:first-child{
              margin-left: 0;
            }
            .mdi {
              color: #bbbbbb;
              font-size: 16px;
              transition: 0.3s ease;
            }
          }
        }
        .settingItem__func {
          margin-top: 10px;
        }
      }
    }
    /*----Alert----*/
    .settingContent__alert {
      display: flex;
      padding: 10px;
      height: auto;
      min-height: fit-content;
      background-color: #fff0d7;
      color: #e09831;
      font-size: 12px;
      line-height: 18px;
    }
  }
</style>
