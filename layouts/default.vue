<template>
    <section class="container">
        <div>
            <ToolBar/>
            <nuxt/>
        </div>
    </section>
</template>

<script>
import ToolBar from '~/components/Toolbar.vue';
export default {
    components: {
        ToolBar
    }
}
</script>
