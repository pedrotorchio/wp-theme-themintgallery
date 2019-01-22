<script>
import Quote from '@/plugins/mint-fetcher/Quote'
import Timeline from '@/mixins/section-timeline/Timeline'
export default {
    mixins: [ Timeline ],
    props: {
        quote: {
            type: Quote
        },
        white: {
            type: Boolean,
            default: false
        },
        primary: {
            type: Boolean,
            default: false
        },
        shadow: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        animate(timeline) {
            timeline
                .addCallback( () => this.$el.classList.add('shown') )
        }
    }
}
</script>

<template lang="pug">
    article
        .inner-section( :class = "{ white, primary }" )
            p.text( :class = "{ 'discreet-text-shadow': shadow }" v-html = "quote.htmlText" )
            h3.author( v-text = "quote.author" )
</template>

<style lang="sass" scoped>
@import '~media-query-mixins'
@import '~@/styles/config'
article
    padding: 50px 0
    +md
        padding: 200px 0

    background-color: currentColor
    .text
        font-size: 24px
        +md
            font-size: 32px
        line-height: 2em
        text-align: center
        color: inherit
        font-weight: 100
        .discreet-text-shadow
            color: inherit
            background-color: currentColor
            font-weight: 600
        &:before
            content: '"'
        &:after
            content: '"'

        /deep/ > *
            text-shadow: inherit
            font-weight: 100
    .author
        color: rgba($color--primary, .3)
        text-align: right
        font-style: italic
        margin: 1em
        margin-right: 2em

.text, .author
    opacity: 0
    transform: scale(.9)
    transition-property: opacity, transform
    transition-duration: 2s
    transition-timing-function: ease-out
.shown
    .text, .author
        opacity: .5
        transform: scale(1)
.white
    .text
        color: rgba(white, .6) !important
    .author
        color: rgba(white, .4) !important
.primary
    .text
        color: rgba($color--primary, .6) !important
    .author
        color: rgba($color--primary, .4) !important
</style>

