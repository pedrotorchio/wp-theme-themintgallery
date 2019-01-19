<script>
import LazyImage from 'vue-hoverable-lazy-image'
import { TweenMax, TimelineMax } from 'gsap'

export default {
    name: 'Slider',
    components: { LazyImage },
    props: {
        slides: {
            type: Array,
            required: true
        }
    },
    data: () => ({
        index: 0,
    }),
    computed: {
        slides__(){
            return this.slides.map(sl => {
                sl.titleArray = this.makeArray(sl.title)
                return sl
            });
        }
    },
    methods: {
        getImageUrls(slide) {
            return {
                placeholder: slide.image.getImageSizeUrl('thumbnail'),
                large: slide.image.getImageSizeUrl('large')
            }
        },
        isRoute(url) {
            return typeof url === 'object' && url !== null
        },
        makeArray(str) {
            return str.split('')
        },
        start() {

            const tl = new TimelineMax({ delay: .5 });
                let el;
                if (el = this.$refs['titleLetters'])
                    tl
                        .staggerTo(el, .3, {
                            autoAlpha: 1
                        }, .1)

                if (el = this.$el.querySelector('.cta'))
                    tl
                        .addCallback(() => el.classList.add('shown'));

        },
    },
}
</script>
<template lang='pug'>
    div
        transition( appear @enter = "start" )
            div.inner-section.slide( v-if = "i == index" v-for="(slide, i) in slides__" :key="i" )
                lazy-image.img( :src = "getImageUrls(slide).large" :src-placeholder = "getImageUrls(slide).placeholder" @load = "start" )

                    h4.title
                        span( ref = "titleLetters" v-for = "(lt, i) in slide.titleArray" :key = "lt + i" :data-index = "i" ) {{ lt }}

                    div.cta( v-if = "slide.ctaUrl" )
                        router-link.link( v-if = "isRoute(slide.ctaUrl)" :to = "slide.ctaUrl" ) {{ slide.ctaText }}
                        a.link( v-else-if = "slide.ctaUrl" :href = "slide.ctaUrl" ) {{ slide.ctaText }}

                        span.top
                        span.bottom
                        span.left
                        span.right

      
</template>
<style lang='sass' scoped>
$height: 300px
.Slider-root
    background-color: black
    height: $height

    .slide
        height: 100%

    .img
        height: 100%
        width: 100%
        object-fit: cover

        /deep/ .title
            line-height:  $height
            text-align: center
            font-size: 64px
            color: white
            text-shadow: 2px 1px 0 black

            span
                opacity: 0
    /deep/ .cta
        z-index: 555
        position: absolute
        bottom: 1em
        z-index: 555
        font-size: 32px
        right: 1em
        opacity: 0
        
        padding: .5em
        min-width: 200px
        text-align: center

        transition: opacity 2s
        transition-timing-function: ease-out


        color: black
        background-color: white
        -webkit-text-fill-color: transparent
        -webkit-background-clip: text

        &.shown
            opacity: 1
            .right, .left
                height: 100%
            .top, .bottom
                width: 100%
        span
            position: absolute
            transition: width 2s, height 2s
            transition-timing-function: ease-out
            background: currentColor

            $size: 4px
            &.top
                top: 0
                left: 0
                height: $size
                width: 0
            
            &.bottom
                bottom: 0
                right: 0
                height: $size
                width: 0

            &.left
                left: 0
                bottom: 0
                width: $size
                height: 0
            
            &.right
                right: 0
                top: 0
                width: $size
                height: 0

        a.link
            color: inherit



</style>