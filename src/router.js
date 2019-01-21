import Vue from "vue";
import Router from "vue-router";
import TransparentView from './views/Transparent';

Vue.use(Router);

function asyncView(view) {
  return () => import(/* webpackChunkName: "[request]" */`./views/${view}`);
}
export default new Router({
  mode: "history",
  base: '', //process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: asyncView('Home') },
    { path: '/join-us', name: 'join', component: asyncView('Home') },
    { path: '/shop', name: 'shop', component: asyncView('Home') },

    { path: '/artists', component: TransparentView, children: [
      { path: '', name: 'Artists', component: asyncView('Artists') },
      { path: ':slug', name: 'Artist', component: asyncView('Artist'), props: true }
    ]},

  ],
  scrollBehavior (to, from, savedPosition) {
    let scroll;
    
    if (to.hash) {
      scroll = {
        selector: to.hash
      }

    } else if (savedPosition) {
      scroll = savedPosition

    } else {
      scroll = { x: 0, y: 0 }

    }

    return scroll
  }
});
