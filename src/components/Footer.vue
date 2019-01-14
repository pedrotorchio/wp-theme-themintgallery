<script>
const socialStructure = __INITIAL_DATA__.socialMenuStructure || [];
const copyrights = __INITIAL_DATA__.copyrights;
const copyrightsUrl = __INITIAL_DATA__['copyrights-url'];

import '@/components/svg/Facebook'
import '@/components/svg/Twitter'
import '@/components/svg/Behance'
import '@/components/svg/Instagram'
import '@/components/svg/logo'

import Social from '@/components/Social'

export default {
    components: { Social },
    data: () => ({
        socialStructure,
        copyrights,
        copyrightsUrl
    })
}
</script>
<template lang="pug">
    footer
        div.inner-section
            div#footer-logo-container
                svgicon( name = "logo" :original = "true" )
            div.copyright
                a( :href = "copyrightsUrl" ) {{ copyrights }}
            social( :data = "socialStructure" :wires = "true" )
</template>
<style lang="sass" scoped>
@import '~@/styles/config'

.social .menu
    justify-content: center
footer
    background-color: $color--primary
    padding: 10px
    padding-top: 50px

.copyright a
    display: block
    height: 2em
    line-height: 2em
    text-transform: uppercase
    color: white
    text-align: center
    font-size: 12px

    &:hover
        color: $color--alert

#footer-logo-container
    height: 250px
    margin-bottom: 50px
    text-align: center
    svg
        height: 100%



</style>
