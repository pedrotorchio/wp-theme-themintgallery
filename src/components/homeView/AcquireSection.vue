<script>
import LazyImage from 'vue-hoverable-lazy-image'
import BlockLink from '@/components/BlockLink'
import Section from '@/mixins/section/Section'
export default {
    name: 'ShopSection',
    mixins: [ Section ],
    components: { LazyImage, BlockLink },
    props: [ 'featured', 'text' ],
    methods: {
        animate(timeline) {
            
            timeline
                .addCallback(() => this.$refs['btn'].$el.classList.add('shown'))
        }
    }
}
</script>
<template lang="pug">
    section
        .inner-section
            div.half-inner-section
                div.text
                    block-link.link( ref = "btn" :text = "text" :url = "{name: 'shop' }" )
            lazy-image.img( :src = "featured.getImageSizeUrl('full')" :src-placeholder = "featured.getImageSizeUrl('thumbnail')" :hoverable = "false" )
</template>
<style lang="sass" scoped>
@import "~@/styles/config"
@import '~media-query-mixins'
section
    background-color: $color--primary
    padding: 0
.inner-section
    padding: 0
    color: white
    position: relative
    +md
        display: flex
    max-width: 1800px

    .img, .half-inner-section
        flex: 0 0 50%
        z-index: 555
        width: 100%
        
    .text
        max-width: $max-width/2
        margin-left: auto
        height: 100%
    .img
        position: relative
        padding-bottom: 100%
        +md
            padding-bottom: 50%
    .half-inner-section
        z-index: 5555
        position: absolute
        width: 100%
        height: 100%
        +md
            position: relative
            width: initial
            height: initial
    .link
        width: 80%
        margin: 0 auto
        color: white
        text-align: center
        font-weight: bold
        display: block
        top: 50%
        transform: translateY(-50%)
        position: relative
        text-transform: uppercase
        font-size: 18px
        +md
            font-size: $size--font-title
</style>
