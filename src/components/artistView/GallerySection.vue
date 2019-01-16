<script>
import Gallery from '@/plugins/mint-fetcher/Gallery'
import LazyImage from 'vue-hoverable-lazy-image'
import Section from '@/mixins/section/Section'
export default {
    extends: Section,
    components: { LazyImage },
    props: {
        gallery: Gallery,
        required: true
    },
    methods: {
        getFirstUrl(piece) {
            return piece.images.length > 0 && piece.images[0].url.toString()
        },
        animate(timeline) {
            const delay = .2
            const show = el => el.classList.add('shown')
            const delayShow = (el, i) => setTimeout(() => show(el), i * delay * 1000)

            timeline
                .addCallback(() => this.$refs['pieces'].forEach(delayShow))
        }
    }
}
</script>
<template lang="pug">
    
    ul.gallery
        li( ref = "pieces" v-for = "(piece, i) in gallery.pieces" v-if = "getFirstUrl(piece)" )
            lazy-image.img( v-viewer :src = "getFirstUrl(piece)")
                h4.title.hover-phantom-effect {{ piece.title }}
                p.dimensions.hover-phantom-effect {{ piece.dimensions }}
                p.type.hover-phantom-effect {{ piece.type }}
                strong.hover-phantom-effect( v-if = "piece.isSoldOut" ) SOLD
        

</template>
<style lang="sass" scoped>
@import '~@/styles/config'
.img
    padding-bottom: 100%

    /deep/ .caption
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column

        h4, p, strong
            position: static
            margin: .2em
        h4
            font-size: $size--font-title
        p
            font-size: $size--font-text


        
        strong
            color: crimson


        .title
            transition-delay: 0
        .dimensions
            transition-delay: .2s
        .type
            transition-delay: .4s
        strong
            transition-delay: .6s
ul
    display: flex
    flex-wrap: wrap
    li
        $width: 100%/3
        $space: 1em
        $width: calc(#{$width} - 2 * #{$space})
        flex: 0 0 auto
        width: $width
        margin: $space
        $shadow-color: #0000006b

        .img
            
            box-shadow: 0 0 0 $shadow-color
            opacity: 0

            transition-property: box-shadow, opacity
            transition-duration: 1s
            transition-timing-function: ease-out

        &.shown .img
            box-shadow: 0px 0 11px $shadow-color
            opacity: 1

        .img /deep/ h4
                top: calc(50% - 1em)
</style>
