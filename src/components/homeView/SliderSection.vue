<script>
import LazyImage from 'vue-hoverable-lazy-image'
import { TweenMax, TimelineMax } from 'gsap'
import BlockLink from '@/components/BlockLink'
export default {
    name: 'Slider',
    components: { LazyImage, BlockLink },
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

                    block-link.cta( v-if = "slide.ctaUrl" ref = "cta" :text = "slide.ctaText" :url = "slide.ctaUrl" :shown = "false" )

      
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
            font-family: impact
            text-align: center
            font-size: 64px
            color: white
            text-shadow: 2px 1px 0 black

            span
                opacity: 0

    .cta
        z-index: 555
        position: absolute
        bottom: 1em
        font-size: 32px
        right: 1em

</style>