import Vue from "vue";

import App from "./App.vue";
import router from "./router";

import '@/plugins/svg-icons'
import '@/plugins/root-id'
import '@/plugins/mint-fetcher'
import '@/plugins/font-size-fitter'
import '@/plugins/default-components'
import '@/plugins/loading'

import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
Vue.use(Viewer)

import SmoothScroll from 'smooth-scroll'
new SmoothScroll('a[href*="#"]', {
  speed: 200,
  offset: function (anchor, toggle) {
    const headerSize = 100

    if (toggle.classList.contains('.exact')) {
        return 0

    } else {
        return headerSize;
    }

  },
  ease: 'easeInOutCubic',
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
Vue.config.productionTip = false;
