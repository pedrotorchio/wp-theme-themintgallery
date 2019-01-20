<script>
import LazyImage from 'vue-hoverable-lazy-image'
import BlockLink from '@/components/BlockLink'
export default {
    components: { LazyImage, BlockLink },
    props: [ 'featured', 'text' ]
}
</script>
<template lang="pug">
    section
        .inner-section
            div.half-inner-section
                div.text
                    block-link.link( :text = "text" :url = "{name: 'shop' }" )
            lazy-image.img( :src = "featured.getImageSizeUrl('full')" :src-placeholder = "featured.getImageSizeUrl('thumbnail')" :hoverable = "false" )
</template>
<style lang="sass" scoped>
@import "~@/styles/config"
section
    background-color: $color--primary
    padding: 0
.inner-section
    padding: 0
    color: white
    display: flex
    max-width: 1800px
    .img, .half-inner-section
        flex: 0 0 50%
    .text
        max-width: $max-width/2
        margin-left: auto
        height: 100%
    .img
        padding-bottom: 50%
    
    .link
        width: 80%
        margin: 0 auto
        color: white
        text-align: center
        font-weight: bold
        display: block
        top: 50%
        position: relative
        text-transform: uppercase
        font-size: $size--font-title
</style>
