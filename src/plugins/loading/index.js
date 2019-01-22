import Vue from 'vue'

Vue.use({
    install(Vue) {
        Vue.prototype.$loading = new Vue({
            data: () => ({
                state: true,
                progress: 0
            }),
            methods: {
                set(state = true) {
                    if (!state)
                        this.progress = 0

                    this.state = state
                },
                progress(number) {
                    if (number >= 100)
                        this.set(false)
                    this.progress = number
                }
            }
        });
    }
})