<template>
    <v-app dark class="container">
        <div>
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
    }
}
</script>
