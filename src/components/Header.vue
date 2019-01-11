<script>
const menuStructure = __INITIAL_DATA__.menuStructure || [];

export default {
    name: 'AppHeader',
    data: () => ({
        menuStructure
    })
}
</script>
<template lang="pug">
    header#main-header
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

</template>
