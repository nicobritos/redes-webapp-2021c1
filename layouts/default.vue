<template>
    <v-app dark>
        <div class="container">
            <ToolBar/>
            <nuxt/>
        </div>
    </v-app>
</template>

<script>
import ToolBar from '~/components/Toolbar.vue';
export default {
    components: {
        ToolBar
    },
    created() {
        this.$axios.setHeader('Access-Control-Allow-Origin', '*');
    }
}
</script>
