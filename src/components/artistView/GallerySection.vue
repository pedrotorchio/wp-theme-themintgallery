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
    div.gallery
        ul
            li( v-for = "(piece, i) in gallery.pieces" v-if = "getFirstUrl(piece)" )
                lazy-image.img( v-viewer :src = "getFirstUrl(piece)")
                    h4.hover-phantom-effect {{ piece.title }}
        

</template>
<style lang="sass" scoped>
@import '~@/styles/config'
.img
    padding-bottom: 100%

    /deep/ .caption
        display: flex
        justify-content: center
        align-items: center

        h4
            font-size: $size--font-title


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

        .img /deep/ h4
            top: calc(50% - 1em)
</style>
