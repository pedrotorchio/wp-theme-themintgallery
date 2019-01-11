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
                line-height: $height
                height: $height
            li
                $size: 32px
                display: inline-block
                margin: 0 $size/4

                a
                    display: block
                svg
                    width: $size
                    height: $size
</style>

