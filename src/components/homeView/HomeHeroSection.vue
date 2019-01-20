<script>
import LazyImage from 'vue-hoverable-lazy-image'
import BlockLink from '@/components/BlockLink'
import Section from '@/mixins/section/Section'

export default {
    mixins: [ Section ],
    props: [ 'page' ],
    components: { LazyImage, BlockLink },
    computed: {
        image() {
            return {
                large: this.page.featuredImage.getImageSizeUrl('large'),
                placeholder: this.page.featuredImage.getImageSizeUrl('placeholder')
            }
        }
    },
    methods: {
        animate( timeline ) {
            timeline
                .addCallback(() => this.$refs['cta'].$el.classList.add('shown'))
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

                    h1.title The Mint Gallery
                    block-link.cta( ref = "cta" text = "Meet Our Art" :url = "{ path: '/artists' }" )

                lazy-image.img( :hoverable = "false" :src = "image.large" :src-placeholder = "image.placeholder" )
            .news
                ul
                    li   
                        h3 FEBRUARY 1st
                        p Special exhibition with 5 new artists
                    li
                        h3 March 1st
                        p Thematic event on wales

            
</template>
<style lang="sass" scoped>
@import '~@/styles/config'
section
    height: calc(100vh - #{$size--header-height})
    font-size: 16px
.inner-section
    height: 100%
    display: flex
    flex-direction: column
.cta
    color: $color--primary
    font-size: $size--font-title
    width: 100%
.hero
    flex: 1 1 80%
    min-height: 400px
    position: relative
    display: flex
    align-items: center
.img
    height: 400px
    width: 600px
    box-shadow: 22px 24px 70px 0rem rgba(0, 0, 0, 0.42)
    right: 50px
    position: absolute
.pretitle, .title
    font-size: 64px
    letter-spacing: .01em
    text-align: center
.title
    font-family: impact
.pretitle
    span
        display: block

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

    h3
        font-size: inherit
        font-weight: 400
        text-transform: uppercase
    
</style>


