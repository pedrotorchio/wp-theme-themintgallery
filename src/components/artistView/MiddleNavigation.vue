<script>
export default {
    props: {
        title: {
            type: String
        },
        items: {
            type: Array
        }
    }
}
</script>
<template lang="pug">
    nav
        h4( v-if = "title" ) {{ title }}
        ul.menu
            li( v-for = "(item, i) in items" )
                a( :href = "`#${item.slug}`" ) {{ item.title }}
</template>
<style lang="sass" scoped>
@import '~@/styles/config'
ul
    justify-content: center
nav ul li a
    color: $color--text
</style>
