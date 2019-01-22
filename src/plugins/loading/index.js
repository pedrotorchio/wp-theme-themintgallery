import Vue from 'vue'

Vue.use({
    install(Vue) {
        Vue.prototype.$loading = new Vue({
            data: () => ({
                state: true,
                progressState: 0
            }),
            methods: {
                set(state = true) {
                    if (!state)
                        this.progress(0)

                    this.state = state
                },
                progress(number) {
                    this.progressState = number

                    if (number >= 100)
                        this.set(false)
                },
                add(number) {
                    this.progress(this.progressState + number)
                }
            }
        });
    }
})