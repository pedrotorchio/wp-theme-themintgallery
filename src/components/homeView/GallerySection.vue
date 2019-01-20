<script>
import LazyImage from 'vue-hoverable-lazy-image'
export default {
    components: { LazyImage },
    props: [ 'featured', 'address', 'contact' ],
    computed: {
        imageHasText() {
            return Boolean(this.imageText)
        },
        imageText() {
            return this.featured.caption || this.featured.title
        }
    }
}
</script>
<template lang="pug">
    section
        div.inner-section
            lazy-image.img( :src = "featured.getImageSizeUrl()" :src-placeholder = "featured.getImageSizeUrl('thumbnail')" :hoverable = "imageHasText" )
                h3( v-if = "imageHasText" ) {{ imageText }}
            div.text
                div.block
                    h1 The Mint Gallery
                    p(v-html = "contact")
                p.address(v-html = "address")
</template>
<style lang="sass" scoped>
.inner-section
    display: flex
    align-items: flex-end
    .img, .text
        flex: 0 0 50%
.img
    float: left
    height: 700px
    width: 600px

h1, p
    text-align: right
    line-height: 1.2em
h1
    font-weight: bold
    font-size: 64px

.block
    margin-bottom: 25%
.address
    font-size: 1.3em
    font-weight: 100
</style>
