import Vue from 'vue'

Vue.use({
    install(Vue) {
        Vue.mixin({
            methods: {
                getFitFontSize(total, {length}, max, min) {
                    console.log(...arguments)
                    max = max || total
                    min = min || total
                    
                    const width = Math.min(Math.max(min, total), max)
                    const padding = 5
                    console.log(width)
                    const letterSize = (width, length) => 1.5 * width / length
                    
                    const size = letterSize(width - padding, length)

                    return size
                }
            }
        })
    }
})