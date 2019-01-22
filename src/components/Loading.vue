<script>
export default {
    
}
</script>
<template lang="pug">
    main
</template>
<style lang="sass" scoped>
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
