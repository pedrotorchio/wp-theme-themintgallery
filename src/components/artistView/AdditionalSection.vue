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
        h3
            font-size: 1.2em
            margin: 2em 0
        h2
            font-size: 1.5em
            margin: 3em 0
        p
            font-size: 1em
            margin: 1em
</style>
