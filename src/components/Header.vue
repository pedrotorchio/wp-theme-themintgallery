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
        socialStructure
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
                nav#main-menu
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

$height: 100px
header
    padding: 10px
    background-color: $color--primary

.inner-section
    height: $height
    display: flex
    align-items: stretch
    
    .logo
        width: $height
        height: 100%
        flex: 0 0 auto

        svg
            height: 100%
            width: auto

    .navigation
        flex: 1 1 auto
        display: flex
        justify-content: flex-end

        #main-menu
            padding-right: $height
            flex: 1 0 auto
            a
                font-weight: 100
        .social
            flex: 0 0 auto
            align-self: center
            font-size: 24px

ul
    height: 100%

    li ul
        background-color: rgba($color--primary, .95)
        border-radius: 2px


.router-link-active, .router-link-exact-active 
    color: $color--alert

</style>

