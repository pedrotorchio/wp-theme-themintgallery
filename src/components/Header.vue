<script>
const menuStructure = __INITIAL_DATA__.mainMenuStructure || [];
const socialStructure = __INITIAL_DATA__.socialMenuStructure || [];

import '@/components/svg/Facebook'
import '@/components/svg/Twitter'
import '@/components/svg/Behance'
import '@/components/svg/Instagram'
import '@/components/svg/logo-mini'

import Social from '@/components/Social'

export default {
    name: 'AppHeader',
    components: { Social },
    data: () => ({
        menuStructure,
        socialStructure,
        toggled: false
    }),
    methods: {
        getRelativePath(absolute){
            return new URL(absolute).pathname
        }
    }
}
</script>
<template lang="pug">
    header.section
        div.inner-section
            div.logo
                router-link( to = "/" )
                    svgicon( name = "logo-mini" :original = "true" )
            div.navigation
                nav#main-menu-toggle( @click = "toggled = !toggled"  :class = "{ toggled }" )
                    span.top
                    span.middle
                    span.bottom
                nav#main-menu( :class = "{ toggled }" )
                    ul.menu
                        li.title( v-for = "(parent, i) in menuStructure" :key = "parent.ID" )
                            router-link( :to = "getRelativePath(parent.url)" ) {{ parent.title }}

                            ul( v-if = "parent.children.length > 0")
                                li( v-for = "(child, i) in parent.children" :key = "child.ID" )
                                    router-link( :to = "getRelativePath(child.url)" ) {{ child.title }}

                social( :data = "socialStructure" :wires = "true" )
                                        

</template>

<style lang="sass" scoped>
@import '~@/styles/config'
@import '~media-query-mixins'

header
    padding: 0
    background-color: $color--primary
#main-menu-toggle
    display: block
    position: relative
    width: 32px
    
    $height: 2px
    span
        width: 100%
        height: $height
        position: absolute
        background-color: white
        border-radius: 5px
        transition-property: transform, opacity
        transition-duration: 1s, .5s
        transition-timing-function: ease-out

    .top
        top: 28%
        top: calc(50% - #{$height} - 10px)
    .middle
        top: 48%
        top: calc(50% - #{$height})
    .bottom
        top: 68%
        top: calc(50% - #{$height} + 10px)

    &.toggled
        .top
            transform: rotate(225deg)
        .middle
            transform: rotate(-225deg)
        .bottom
            opacity: 0
    +md
        display: none
.inner-section
    height: 100%
    display: flex
    align-items: stretch
    
    .logo
        height: 100%
        flex: 0 0 auto

        svg
            height: 100%
            width: auto

    .navigation
        
        display: flex
        flex: 1 1 auto
        justify-content: space-around
        +md
            justify-content: flex-end
        

        #main-menu
            padding-right: 100px
            flex: 1 0 auto
            a
                font-weight: 100
                font-size: 14px

            position: fixed
            
            flex: 1 1 auto
            display: flex
            flex-direction: column
            justify-content: flex-end
            transition: right, .5s
            right: 100%
            // height: calc(100vh - #{$size--header-height} - 20px)
            width: 100vw
            top: $size--header-height
            background-color: $color--primary

            &.toggled
                right: 0

            +md
                width: auto
                height: auto
                right: initial
                top: initial
                position: relative
                flex-direction: row
        .social
            flex: 0 0 auto
            align-self: stretch
            +md
                align-self: center

            font-size: 24px

            /deep/ ul
                height: 100%

ul
    height: 100%

    li ul
        background-color: rgba($color--primary, .95)
        border-radius: 2px


.router-link-active, .router-link-exact-active 
    color: $color--alert
</style>
<style lang="sass">
@import '~@/styles/config'
@import '~media-query-mixins'

.admin-bar header#main-header
    top: $size--wr-bar-height-sm
    +md
        top: $size--wr-bar-height
    .navigation #main-menu
        top: $size--header-height + $size--wr-bar-height-sm
        +md
            top: initial
</style>


