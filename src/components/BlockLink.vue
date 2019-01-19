<script>
export default {
    name: 'BlockLink',
    props: {
        text: {
            type: String,
        },
        url: {
            type: String | Object
        },
        shown: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        isRoute() {
            return typeof this.url === 'object' && this.url !== null
        },
    },
    methods: {
        show() {
            this.shown = true
        }
    }
}
</script>

<template lang="pug">
    div( :class = "{ shown }" )
        span.top
        span.bottom
        span.left
        span.right
        span.fill
        router-link.link( v-if = "isRoute" :to = "url" ) {{ text }}
        a.link( v-else-if = "url" :href = "url" ) {{ text }}
</template>

<style lang="sass" scoped>
@import '~@/styles/config'
.BlockLink-root
    
    padding: .5em
    min-width: 200px
    text-align: center

    box-shadow: inset 0 0 0 0 white

    transition: opacity 2s, color .5s, box-shadow 3s
    transition-timing-function: ease-out


    opacity: 0
    color: white
    $active--box-shadow: inset 0 0 13px 7px
    &:hover
        transition-duration: .5s
        color: $color--alert
        box-shadow: $active--box-shadow $color--alert !important
        a
            color: $color--alert

    &.shown
        box-shadow: $active--box-shadow white
        opacity: 1
        .right, .left
            height: 100%
        .top, .bottom
            width: 100%

    span
        position: absolute
        transition: width 2s, height 2s, opacity 2s
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
        z-index: 555
</style>
