<template>
    <v-app dark>
          <div class="pa-8">

        <h1 v-if="error.statusCode === 404">
            {{ pageNotFound }}
        </h1>
        <h1 v-else>
            {{ otherError }}
        </h1>
        <NuxtLink to="/">
            Home page
        </NuxtLink>
        </div>
    </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
    created() {
        if (process.server) {
            const req = this.$req;
            const headers = (req && req.headers) ? Object.assign({}, req.headers) : {};
            const xForwardedFor = headers['x-forwarded-for'];
            let ip = Array.isArray(xForwardedFor) ? xForwardedFor[0] : (xForwardedFor || '').toString();

            process.winstonLog.info({
                code: this.error.statusCode,
                url: this.$route.path,
                ip: ip
            })
        }
    }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
