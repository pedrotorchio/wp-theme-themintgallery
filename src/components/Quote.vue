<script>
import Quote from '@/plugins/mint-fetcher/Quote'
export default {
    props: {
        quote: {
            type: Quote
        },
        shadow: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<template lang="pug">
    article
        .inner-section
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
    color: white
    background-color: currentColor
    .text
        font-size: 24px
        +md
            font-size: 32px
        line-height: 2em
        text-align: center

        color: rgba($color--primary, .5)
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

</style>

