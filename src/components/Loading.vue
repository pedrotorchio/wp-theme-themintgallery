<script>
import Logo from '@/components/Logo'

export default {
    components: { Logo }    
}
</script>
<template lang="pug">
    main    
        logo.logo
</template>
<style lang="sass" scoped>
.logo
    position: relative
    top: 50%
    transform: translateY(-50%)
main
    position: fixed
    top: 0
    left: 0
    height: 100vh
    width: 100vw
    background-color: white
    z-index: 99999999999
    transition: opacity 1s

    &.entering, &.removed
        opacity: 0
    &.shown, &.removing
        opacity: 1 !important
    



</style>
