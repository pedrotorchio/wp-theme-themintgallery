import Vue from "vue";
import Router from "vue-router";
import TransparentView from './views/Transparent';

Vue.use(Router);

function asyncView(view) {
  return () => import(`./views/${view}`);
}
export default new Router({
  mode: "history",
  base: '', //process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: asyncView('Home') },

    { path: '/artists', component: TransparentView, children: [
      { path: '', name: 'Artists', component: asyncView('Artists') },
      { path: ':slug', name: 'Artist', component: asyncView('Artist'), props: true }
    ]}
  ]
});
