<script>
import Section from '@/mixins/section-timeline/Timeline'
export default {
    extends: Section,
    props: {
        title: {
            type: String
        },
        items: {
            type: Array
        }
    },
    methods: {
        animate (timeline) {
            const delay = .1
            const show = el => el.classList.add('shown')
            const stag = (el, i) => setTimeout(() => show(el), i * delay * 1000 )
            const items = this.$refs['items']

            if (!items)
                return;

            timeline
                .addCallback(() => items.forEach(stag))
        }
    }
}
</script>
<template lang="pug">
    nav
        h4( v-if = "title" ) {{ title }}
        ul.menu
            li( ref = "items" v-for = "(item, i) in items" )
                a( :href = "`#${item.slug}`" ) {{ item.title }}
</template>
<style lang="sass" scoped>
@import '~@/styles/config'
@import '~media-query-mixins'

ul
    justify-content: center
    overflow-x: auto
    padding: 0 
    justify-content: flex-start
    +md
        overflow-x: visible
        justify-content: center

nav ul 
    li
        opacity: 0
        transform: translateY(10px)
        transition-property: opacity, transform
        transition-duration: .5s
        transition-timing-function: ease-out

        $height: 64px
        height: $height
        line-height: $height

        +md
            height: auto
            line-height: auto

        &.shown
            opacity: 1
            transform: translateY(0)
    a
        color: $color--text
</style>
