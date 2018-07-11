<template>
  <div class="settings-wrapper">
    <settingsHeader/>
    <div class="settings__body">
      <settingMenu/>
      <settingSubMenu/>
      <settingContent/>
    </div>
  </div>
</template>

<script>
  import settingsHeader from  '../components/settings/settingsHeader';
  import settingMenu from  '../components/settings/settingMenu';
  import settingSubMenu from  '../components/settings/settingSubMenu';
  import settingContent from  '../components/settings/settingContent';
  export default {
    components:{
      settingsHeader,
      settingMenu,
      settingSubMenu,
      settingContent,
    }
  }
</script>

<style lang="scss" scoped>
  .settings-wrapper{
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    touch-action: none;
    user-select: none;
    background-color: #ffffff;
    .settings__body{
      display: flex;
      flex-grow: 2;
    }
  }
</style>
