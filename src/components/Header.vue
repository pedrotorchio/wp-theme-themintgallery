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
    header.section
        div.inner-section
            div.logo
            div.navigation
                nav#main-menu
                    ul.menu
                        li.title( v-for = "(parent, i) in menuStructure" :key = "parent.ID" )
                            router-link( :to = "parent.url" ) {{ parent.title }}

                            ul( v-if = "parent.children.length > 0")
                                li( v-for = "(child, i) in parent.children" :key = "child.ID" )
                                    router-link( :to = "child.url" ) {{ child.title }}

                nav.social
                    ul.menu
                        li( v-for = "(parent, i) in socialStructure" :key = "parent.ID" )
                            a( :href = "parent.url" )
                                svgicon( :name = "parent.title" :original = "true" )
                                        

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

ul
    height: 100%

    li ul
        background-color: rgba($color--primary, .95)
        border-radius: 2px


.router-link-active, .router-link-exact-active 
    color: $color--alert

</style>

