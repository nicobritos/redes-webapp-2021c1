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

        if (process.server) {
            const req = this.$req;
            const headers = (req && req.headers) ? Object.assign({}, req.headers) : {};
            const xForwardedFor = headers['x-forwarded-for'];
            let ip = Array.isArray(xForwardedFor) ? xForwardedFor[0] : (xForwardedFor || '').toString();

            process.winstonLog.info({
                code: 200,
                url: this.$route.path,
                ip: ip
            })
        }
    }
}
</script>
