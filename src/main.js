import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import '@/plugins/svg-icons'
import '@/plugins/root-id'
import '@/plugins/mint-fetcher'

Vue.config.productionTip = false;

import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

import SmoothScroll from 'smooth-scroll'
new SmoothScroll('a[href*="#"]', {
  offset: function (anchor, toggle) {
    const headerSize = 80

    if (toggle.classList.contains('.exact')) {
        return 0

    } else {
        return headerSize;
    }

  },
  easing: 'easeInOutCubic',
});

Vue.use(Viewer)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
