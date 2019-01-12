import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

function asyncView(view) {
  return () => import(`./views/${view}`);
}

export default new Router({
  mode: "history",
  base: '', //process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: asyncView('Home') },

    { path: '/artists', children: [
      { path: '', component: asyncView('Artists') },
      { path: ':slug', component: asyncView('Artist') }
    ]}
  ]
});
