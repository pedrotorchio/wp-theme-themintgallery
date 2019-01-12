import Vue from 'vue';

Vue.use({
    install(Vue, options) {
        Vue.mixin({
            mounted() {
                if (this.$options.name && !this.$el.id)
                    this.$el.id = `${this.$options.name}-root`
            }
        })
    }
})