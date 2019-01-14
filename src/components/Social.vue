<script>
export default {
    props: {
        data: {
            type: Array,
            required: true
        },
        wires: {
            type: Boolean,
            default: false
        },
    },
    computed: {
        svgAttrs() {
            let attrs = {}

            attrs.fill = !this.wires
            attrs.original = !this.wires

            if (this.wires) {
                attrs.color = "white"
            }

            return attrs;
        }
    }
}
</script>
<template lang="pug">
    nav.social( :class = "{wires}" )
        ul.menu
            li( v-for = "(media, i) in data" :key = "media.ID" )
                a( :href = "media.url" )
                    svgicon( :name = "media.title" v-bind = "svgAttrs" )
</template>

<style lang="sass" scoped>
.social
    font-size: 32px
    ul, li, a, svg
        font-size: inherit

    svg
        filter: drop-shadow(0 0 0 rgba(0,0,0,0))
        transition: filter .2s

        $size: 1em
        width: $size
        height: $size

    &.wires svg
        color: white
        stroke-width: 4px
        
        /deep/ .wire-paint
            fill: currentColor !important
        /deep/ .wire-remove
            display: none

    a:hover
        svg
            filter: drop-shadow(0px 0px 5px #{rgba(white, .5)})

.menu
    justify-content: center
</style>

