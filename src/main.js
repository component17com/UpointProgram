// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import ElementUI from 'element-ui';
import '../static/index.min.css';
import 'mdi/css/materialdesignicons.min.css';
import lang from 'element-ui/lib/locale/lang/ru-RU';

//Components
import uHeader from './components/global/uHeader';
import topModulesMenu from './components/global/topModulesMenu';
import uFooter from './components/global/uFooter';
import tabs from './components/global/tabs';





Vue.component('uHeader', uHeader);
Vue.component('topModulesMenu', topModulesMenu);
Vue.component('uFooter', uFooter);
Vue.component('tabs', tabs);


Vue.filter('sliceText', (val, textLength) => {
  let text = val;
  if(text.length > textLength){
    return text.slice(0, textLength) + '...'
  }else{
    return text
  }
});


Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI, {
  size: 'mini',
  locale: lang,
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

