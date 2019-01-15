<script>
import Gallery from '@/plugins/mint-fetcher/Gallery'
import LazyImage from 'vue-hoverable-lazy-image'

export default {
    components: { LazyImage },
    props: {
        gallery: Gallery,
        required: true
    },
    methods: {
        getFirstUrl(piece) {
            return piece.images.length > 0 && piece.images[0].url.toString()
        }
    }
}
</script>
<template lang="pug">
    
    ul.gallery
        li( v-for = "(piece, i) in gallery.pieces" v-if = "getFirstUrl(piece)" )
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

        .img 
            box-shadow: 0px 0 11px #0000006b
            /deep/ h4
                top: calc(50% - 1em)
</style>
