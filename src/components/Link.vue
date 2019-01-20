<script>
export default {
    name: 'Link',
    props: {
        text: {
            type: String,
        },
        url: {
            type: String | Object
        },
    },
    computed: {
        isRoute() {
            return typeof this.url === 'object' && this.url !== null
        },
    }
}
</script>

<template lang="pug">
        router-link.link( v-if = "isRoute" :to = "url" ) {{ text }}
        a.link( v-else-if = "url" :href = "url" ) {{ text }}
</template>

<style lang="sass" scoped>
@import '~@/styles/config'
</style>