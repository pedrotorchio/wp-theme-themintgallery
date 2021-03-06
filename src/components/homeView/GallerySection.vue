<script>
import LazyImage from 'vue-hoverable-lazy-image'
import Section from '@/mixins/section-timeline/Timeline'
import { Expo } from 'gsap'
export default {
    name: 'GallerySection',
    mixins: [ Section ],
    components: { LazyImage },
    props: [ 'featured', 'address', 'contact' ],
    computed: {
        imageHasText() {
            return Boolean(this.imageText)
        },
        imageText() {
            return this.featured.caption || this.featured.title
        }
    },
    methods: {
        getTimelineParameters() {
            return { 
                scrollOffset: -600
            }
        },
        animate (timeline) {
            timeline
                .addCallback(() => {
                    const animate = ref => this.$refs[ref].classList.add('animate-phantom-effect');
                    animate('h1');
                    setTimeout(() => animate('contact'), 200)
                    setTimeout(() => animate('address'), 400)
                });
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
                    h1.phantom-effect.right( ref = "h1" ) The Mint Gallery
                    p.phantom-effect.right( ref = "contact" v-html = "contact")
                p.address.phantom-effect.right( ref = "address" v-html = "address")
</template>
<style lang="sass" scoped>
@import '~@/styles/config'
@import '~media-query-mixins'

section
    overflow: hidden
.inner-section
    +md
        display: flex
    align-items: flex-end
    .img, .text
        flex: 0 0 50%

    .text
        padding-top: 50px
.img
    width: 100%
    width: calc(100% + #{2*$size--inner-padding})
    margin: 0 calc(-#{$size--inner-padding})
    +md
        float: left
        width: 600px
    height: 700px
    

h1, p
    text-align: right
    line-height: 1.2em
h1
    font-weight: bold
    font-size: 64px
h1, p
    color: $color--primary !important
.block
    +md
        margin-bottom: 25%
.address
    font-size: 1.3em
    font-weight: 100
</style>
