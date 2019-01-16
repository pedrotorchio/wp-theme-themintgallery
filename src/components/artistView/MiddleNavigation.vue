<script>
import Section from '@/mixins/section/Section'
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
            timeline
                .addCallback(() => this.$refs['items'].forEach(stag))
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
ul
    justify-content: center
nav ul 
    li
        opacity: 0
        transform: translateY(10px)
        transition-property: opacity, transform
        transition-duration: .5s
        transition-timing-function: ease-out

        &.shown
            opacity: 1
            transform: translateY(0)
    a
        color: $color--text
</style>
