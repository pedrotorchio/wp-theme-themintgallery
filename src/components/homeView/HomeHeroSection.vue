<script>
import LazyImage from 'vue-hoverable-lazy-image'
import BlockLink from '@/components/BlockLink'
import Section from '@/mixins/section/Section'
import { Expo } from 'gsap'
export default {
    mixins: [ Section ],
    props: [ 'page' ],
    components: { LazyImage, BlockLink },
    data: () => ({
        news: [
            { when: "February 1st", text: "New artists opening" },
            { when: "March 1st", text: "Thematic wales exhibition" }
        ]
    }),
    computed: {
        image() {
            return {
                large: this.page.featuredImage.getImageSizeUrl('large'),
                placeholder: this.page.featuredImage.getImageSizeUrl('placeholder')
            }
        },
        titleArray() {
            return "The Mint Gallery".split('')
        }
    },
    methods: {
        animate( timeline ) {
            
            timeline
                .staggerTo(this.$refs['news'], 1, {
                    y: 0,
                    autoAlpha: 1
                }, .2, .5)
                .addCallback(() => this.$refs['cta'].$el.classList.add('shown'), 1)
                
        }
    }
}
</script>
<template lang="pug">
    section
        .inner-section
            .hero
                div.text
                    h2.pretitle
                        span Art
                        span +
                        span Artisan

                    h1.title 
                        span( v-for = "(lt, i) in titleArray" ) {{ lt }}
                    block-link.cta( ref = "cta" text = "Meet Our Talent" :url = "{ path: '/artists' }" )

                lazy-image.img.hang-shadow( ref = "img" :hoverable = "false" :src = "image.large" :src-placeholder = "image.placeholder" )

            .news
                ul
                    li( ref = "news" v-for = "(nw, i) in news" :key = "i" :data-index = "i" )
                        h3 {{ nw.when }}
                        p {{ nw.text }}
        
</template>
<style lang="sass" scoped>
@import '~@/styles/config'
@import '~media-query-mixins'
section
    +md
        height: calc(100vh - #{$size--header-height})
        max-height: 900px
    font-size: 16px
.text
    z-index: 555
    width: 100%
    +md
        width: auto
.inner-section
    height: 100%
    display: flex
    flex-direction: column
.cta
    color: $color--primary
    font-size: $size--font-title
    width: 100%
    text-transform: uppercase
.hero
    flex: 1 1 80%
    min-height: 400px
    position: relative
    display: flex
    align-items: stretch
    justify-content: center

    +md
        justify-content: flex-start
        align-items: center
.img
    height: 400px
    width: 95%
    filter: blur(2px) grayscale(0.7)

    +sm
        filter: blur(5px) grayscale(0.7)
    +md
        width: 600px
        right: 50px
    // transform: translateX(80px)
    // visibility: hidden
    position: absolute

    +md
        filter: blur(0) grayscale(0)
.pretitle, .title
    font-size: 48px
    +md
        font-size: 64px
    letter-spacing: .01em
    text-align: center
.title
    font-family: impact
    color: $color--primary
.pretitle
    span
        display: block
        color: $color--primary

.news
    flex: 1 1 auto
    font-size: 16px
    font-weight: 100
    margin-top: 50px
    line-height: 2em
    text-align: center

    li
        display: inline-block
        margin: 0 1em
        transform: translateY(10px)
        opacity: 0

    h3
        font-size: inherit
        font-weight: 400
        text-transform: uppercase
    
</style>


