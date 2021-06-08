<template>
    <div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import CommandLine from '~/components/CommandLine.vue';
import LinkComponent from '~/components/LinkComponent.vue';

@Component({
    components: {LinkComponent, CommandLine},
})
export default class Index extends Vue {
}
</script>

<style>
</style>
