<script>
const menuStructure = __INITIAL_DATA__.mainMenuStructure || [];
const socialStructure = __INITIAL_DATA__.socialMenuStructure || [];

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

                            ul.dropdown( v-if = "parent.children.length > 0")
                                li( v-for = "(child, i) in parent.children" :key = "child.ID" )
                                    router-link( :to = "child.url" ) {{ child.title }}

                nav.social
                    ul
                        li( v-for = "(parent, i) in socialStructure" :key = "parent.ID" )
                            router-link( :to = "parent.url" ) {{ parent.title }}

                            ul( v-if = "parent.children.length > 0")
                                li( v-for = "(child, i) in parent.children" :key = "child.ID" )
                                    router-link( :to = "child.url" )
                                        

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
        flex: 0 0 auto
    .navigation
        flex: 1 1 auto
        display: flex
        justify-content: flex-end

#main-menu
    flex: 1 0 auto
    text-align: right
    padding-right: 32px

.social
    flex: 0 0 auto


ul
    height: $height
    display: flex
    align-items: center
    justify-content: flex-end
    top: 40%
    top: calc(50% - .5em)
li
    $size: 32px
    display: inline-block
    margin: 0 $size/4
    position: relative
    
    &>ul
        position: absolute
        right: 0
        top: 0
        visibility: hidden
        opacity: 0
        transition-property: opacity, transform
        transition-duration: .2s
        transform: translateY(-#{$size--font-text})
        display: block
        padding-top: $size--font-text * 2

    &:hover
        &>ul
            transform: translateY(0)
            visibility: visible
            opacity: 1

    a
        display: block
        white-space: nowrap
    svg
        width: $size
        height: $size

</style>

