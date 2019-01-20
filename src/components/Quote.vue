<script>
import Quote from '@/plugins/mint-fetcher/Quote'
export default {
    props: {
        quote: {
            type: Quote
        }
    }
}
</script>

<template lang="pug">
    article
        .inner-section
            p.text( v-html = "quote.htmlText" :style = "{ fontSize: `${getFitFontSize(1100, quote.htmlText)}px` }")
            h3.author( v-text = "quote.author" )
</template>

<style lang="sass" scoped>
@import '~media-query-mixins'
article
    padding: 50px 0
    +md
        padding: 200px 0
    color: white
    background-color: currentColor
    .text
        font-size: 24px
        line-height: 2em
        text-align: center
        color: inherit
        background-color: currentColor
        text-shadow: 1px 2px 1px #00000066
        &:before
            content: '"'
        &:after
            content: '"'

        /deep/ > *
            text-shadow: inherit
            font-weight: 100
    .author
        color: #00000030
        text-align: right
        font-style: italic
        margin: 1em
        margin-right: 2em

</style>

