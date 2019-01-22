import Vue from 'vue'

Vue.use({
    install(Vue) {
        Vue.prototype.$loading = new Vue({
            data: () => ({
                state: false
            }),
            methods: {
                set(state = true) {
                    this.state = state
                }
            }
        });
    }
})