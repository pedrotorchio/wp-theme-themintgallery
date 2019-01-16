<script>
export default {
    props: {
        data: {
            type: Object
        }
    }    
}
</script>
<template lang="pug">
    section
        div.inner-section( v-html = "data.text" )
</template>
<style lang="sass" scoped>
section
    /deep/
        h2, p
            font-size: 1.5em
            margin: 1em 0
        p
            font-size: 1em
</style>
