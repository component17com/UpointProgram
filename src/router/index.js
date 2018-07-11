import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import preloader from '@/pages/preloader'
import settings from '@/pages/settings'
import auth from '@/pages/welcomePages/auth'
import startSreen from '@/pages/welcomePages/startSreen'
import newConf from '@/pages/configurations/newConf'
import newConfErr from '@/pages/configurations/newConfErr'
import newConfInfo from '@/pages/configurations/newConfInfo'
import newConfSetup from '@/pages/configurations/newConfSetup'
import connectionError from '@/pages/connectionError'
import pageError from '@/pages/pageError'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/preloader',
      name: 'preloader',
      component: preloader
    },{
      path: '/settings',
      name: 'settings',
      component: settings,
    },{
      path: '/auth',
      name: 'auth',
      component: auth,
    },{
      path: '/startSreen',
      name: 'startSreen',
      component: startSreen,
    },{
      path: '/newConf',
      name: 'newConf',
      component: newConf,
    },{
      path: '/newConfErr',
      name: 'newConfErr',
      component: newConfErr,
    },{
      path: '/newConfInfo',
      name: 'newConfInfo',
      component: newConfInfo,
    },{
      path: '/newConfSetup',
      name: 'newConfSetup',
      component: newConfSetup,
    },{
      path: '/connectionError',
      name: 'connectionError',
      component: connectionError,
    },{
      path: '/pageError',
      name: 'pageError',
      component: pageError,
    }
  ]
})
