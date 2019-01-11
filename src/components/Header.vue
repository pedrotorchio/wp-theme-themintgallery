<script>
const menuStructure = __INITIAL_DATA__.mainMenuStructure || [];
const socialStructure = __INITIAL_DATA__.socialMenuStructure || [];

import '@/components/svg/Facebook'
import '@/components/svg/Twitter'
import '@/components/svg/Behance'
import '@/components/svg/Instagram'

export default {
    name: 'AppHeader',
    data: () => ({
        menuStructure,
        socialStructure
    })
}
</script>
<template lang="pug">
    header#main-header
        div.inner-section
            div.logo
            div.navigation
                nav#main-menu
                    ul
                        li( v-for = "(parent, i) in menuStructure" :key = "parent.ID" )
                            router-link( :to = "parent.url" ) {{ parent.title }}

                            ul( v-if = "parent.children.length > 0")
                                li( v-for = "(child, i) in parent.children" :key = "child.ID" )
                                    router-link( :to = "child.url" ) {{ child.title }}

                nav.social
                    ul
                        li( v-for = "(parent, i) in socialStructure" :key = "parent.ID" )
                            a( :href = "parent.url" )
                                svgicon( :name = "parent.title" :original = "true" )
                                        

</template>

<style lang="sass" scoped>
@import '~@/styles/config'

$height: 100px
header
    padding: 10px

.inner-section
    height: $height
    display: flex
    align-items: stretch
    
    .logo
        width: $height
        height: 100%
        background: green
        flex: 0 0 auto
    .navigation
        flex: 1 1 auto
        background: red
        display: flex
        justify-content: flex-end

        #main-menu
            flex: 1 0 auto
        .social
            flex: 0 0 auto

ul
    display: flex
    align-items: center
    justify-content: flex-end
    height: 100%
    z-index: 55
    font-size: $size--font-text

li
    $size: $size--font-text * 2
    margin: $size/4
    position: relative
    white-space: nowrap

    a
        display: block
        text-align: right
    svg
        width: $size
        height: $size

    &>ul
        height: auto
        opacity: 0
        right: 0
        top: 1em
        padding-top: $size/2
        visibility: hidden
        transform: translateY(-#{$size--font-text})
        transition-property: opacity, transform
        transition-duration: .2s
        display: block
        position: absolute
        z-index: 5
    &:hover > ul
        opacity: 1
        visibility: visible
        transform: translateY(0)


</style>

