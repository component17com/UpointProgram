<template>
  <div class="start-wrapper">
    <div class="start__logo">
      <img src="static/images/UPoint/uP_light_app_main.svg" alt="">
    </div>
    <div class="start__welcome">Добро пожаловать!</div>
    <div class="start__title">Автоматизация бизнеса — это проще, чем  вы думали</div>
    <div class="start__block">
      <div class="start__block-h">Вход в систему</div>
      <div class="start__block-title">Для продолжения работы выберите конфигурацию и введите данные для входа:</div>
      <div class="start__block-inputs">
        <el-select size="mini" v-model="value" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-input prefix-icon="mdi mdi-account" placeholder="Введите логин" size="mini"/>
        <el-input prefix-icon="mdi mdi-lock" placeholder="Введите пароль" size="mini"/>
      </div>
      <el-button type="primary">Войти</el-button>
      <div class="start__block-smallText">Если вы забыли свои данные для доступа к конфигурации, запросите их у <br>
        администратора данной конфигурации</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
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
        value: ''
      }
    }
  }
</script>

<style lang="scss">
  .start-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-image: url("../../../static/images/UPoint/1_all_stars.svg"), linear-gradient(0deg, #3D354B 0%, #241F2E 100%);
    background-position: center;
    background-size: contain;
    background-color: #241f2e;
    .start__block-inputs{
      margin-top: 5px;
      .el-select{
        width: 100%;
      }
      .el-input{
        width: 100%;
        margin-bottom: 20px;
      }
    }
    .start__block-h{
      color: #241f2e;
      line-height: 1.5;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 5px;
    }
    .start__welcome{
      margin-top: 20px;
      text-align: center;
      color: #ffffff;
      line-height: 1.5;
      font-size: 16px;
      font-weight: 500;
    }
    .start__title{
      text-align: center;
      color: #ffffff;
      line-height: 1.5;
      font-size: 16px;
      font-weight: 500;
    }
    .start__block{
      padding: 40px 65px;
      margin-top: 40px;
      position: relative;
      width: 600px;
      border-radius: 4px;
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &:before{
        position: absolute;
        content: url("../../../static/images/UPoint/1_moon.svg");
        right: -400px;
        top: -400px;
      }
      &:after{
        position: absolute;
        content: url("../../../static/images/UPoint/svg_flying_man.svg");
        left: -220px;
        top: -30px;
        width: 263px;
        height: 180px;
      }
    }
    .start__block-title{
      text-align: center;
      font-size: 12px;
      line-height: 1.5;
      color: #515254;
      margin-bottom: 20px;
    }
    .start__block-smallText{
      color: #888888;
      line-height: 1.5;
      font-size: 12px;
      text-align: center;
      margin-top: 25px;
    }
  }
</style>
