<script>
import Artist from '@/plugins/mint-fetcher/Artist';
import LazyImage from 'vue-hoverable-lazy-image';

import Section from '@/mixins/section-timeline/Timeline'

export default {
    extends: Section,
    components: { LazyImage },
    props: {
        artist: {
            type: Artist,
            required: true
        }
    },
    computed: {
        featured() {

            return {
                placeholder: this.artist.featured.sizes.thumbnail.url.toString(),
                full: this.artist.featured.sizes.full.url.toString()
            }
        },
        nameLettersArray() {
            return this.artist.name.split('')
        }
    },
    methods: {
        animate( timeline ) {
            timeline
                .addCallback(() => {
                    const maxDelay = 1
                    const els = this.$refs['nameLetters']
                    const show = el => el.classList.add('shown')
                    const rndDuration = i => Math.random() * maxDelay * i/els.length * 1000
                    const rndShow = (el, i) => setTimeout(() => show(el), rndDuration(i))

                    els.forEach( rndShow )
                }, 1)
        }
    }
}
</script>
<template lang="pug">
    div.hero( :class = "{ 'no-img': !artist.featured }" )
        lazy-image.img(
            v-if = "artist.featured"
            :hoverable = "false" 
            :src-placeholder = "featured.placeholder" 
            :src="featured.full" )

        svg( v-if = "false" viewBox="0 0 18 18")
        h1( v-else ) 
            span( ref = "nameLetters" v-for = "(letter, i) in nameLettersArray" :key = "i" ) {{ letter }}
</template>
<style lang="sass" scoped>
@import '~@/styles/config'
$height: calc(100vh - #{$size--header-height})

.hero
    position: relative
    height: $height

    display: flex
    align-items: center
    justify-content: center

    &.no-img
        height: 400px
    .img
        height: 100%
        width: 100%
        object-fit: cover

h1, svg
    position: absolute
    z-index: 999
h1
    text-align: center

    font-size: 48px
    text-transform: uppercase
    text-align: center
    
    color: white
    text-shadow: 6px 2px 15px #0b2e51
    font-family: impact
    letter-spacing: 5px

    span
        opacity: 0
        filter: blur(5px)
        transition-property: opacity, filter
        transition-duration: 1s
        transition-timing-function: ease-out
        &.shown
            opacity: 1
            filter: blur(0)

</style>
