<script>

export default {
    name: 'Artists',
    data: () => ({
        artists: []
    }),
    methods: {
        async fetchData() {
            this.artists = await this.$fetcher.getArtists()
        }
    },
    created() {
        this.fetchData();
    }
}
</script>
<template lang="pug">
    div
        
</template>
<style lang="sass" scoped>
    #Artists-root
        
</style>
