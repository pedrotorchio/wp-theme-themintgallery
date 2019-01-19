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
        },
        duration: {
            type: Number,
            default: 2
        }
    },
    data: () => ({
        index__: 0,
        timer: null
    }),
    computed: {
        slides__(){
            return this.slides.map(sl => {
                sl.titleArray = this.makeArray(sl.title)
                return sl
            });
        },
        index() {
            return this.index__ % this.slides.length
        }
    },
    methods: {
        getImageUrls(slide) {
            return {
                placeholder: slide.image.getImageSizeUrl('thumbnail'),
                large: slide.image.getImageSizeUrl('large')
            }
        },
        getWidth() {
            return document.documentElement.clientWidth
        },
        makeArray(str) {
            return str.split('')
        },
        next() {
            this.index__++
        },
        beforeShowing(el) {
            el.style.filter = "blur(5px)";
            el.style.transform = "scale(.8)"
        },
        pause() {
            if (this.timer)
                clearTimeout(this.timer);
        },
        start(el, done) {

            const tl = new TimelineMax();

                tl.to(el, .2, {
                    filter: "blur(0)",
                    scale: 1
                })

                if (el = this.$refs['titleLetters'])
                    tl
                        .staggerTo(el, .3, {
                            autoAlpha: 1
                        }, .1, .5)

                if (el = this.$el.querySelector('.cta')){
                    tl
                        .addCallback(() => el.classList.add('shown'));
                }
                    
            

            tl.addCallback(() => {
                const delay = (this.duration + 2) * 1000;
                setTimeout(done, delay);
                this.timer = setTimeout(this.next, delay);
            })
            

        },
    },
}
</script>
<template lang='pug'>
    div
        transition( appear @enter = "start" @before-enter = "beforeShowing")
            div.inner-section.slide( ref = "container" v-if = "i == index" v-for="(slide, i) in slides__" :key="i" )
                lazy-image.img( :src = "getImageUrls(slide).large" :src-placeholder = "getImageUrls(slide).placeholder" )

                    h4.title( :style = "{ fontSize: `${getFitFontSize( 400, slide.title, getWidth() )}px` }") 
                        span( ref = "titleLetters" v-for = "(lt, i) in slide.titleArray" :key = "lt + i" :data-index = "i" ) {{ lt }}

                    block-link.cta( v-if = "slide.ctaUrl" ref = "cta" :text = "slide.ctaText" :url = "slide.ctaUrl" :shown = "false" )

      
</template>
<style lang='sass' scoped>
@import '~media-query-mixins'
$height: 300px
.Slider-root
    background-color: black
    height: $height
    overflow: hidden

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
        width: 100%
        font-size: 32px
        

        +md
            right: 1em
            width: auto


.title
    +md
        font-size: 64px !important

</style>