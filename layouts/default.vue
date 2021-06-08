<template>
    <div>
        <Nuxt/>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import StartupAnimation from '~/components/StartupAnimation.vue';
import FadeTransition from '~/components/animations/FadeTransition.vue';
import NavBar from '~/components/NavBar.vue';
import InteractiveCommandLine from '~/components/InteractiveCommandLine.vue';

@Component({
    components: {InteractiveCommandLine, NavBar, FadeTransition, StartupAnimation},
})
export default class Default extends Vue {
}
</script>

<style scoped>
</style>
