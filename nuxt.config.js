export default {
    analyze: true,

    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        '@nuxt/typescript-build',

        '@nuxtjs/vuetify',
    ],

    cache: true, // TODO

    /*
    ** Auto import components
    ** See https://nuxtjs.org/api/configuration-components
    */
    components: false,
    /*
    ** Global CSS
    */
    css: [],

    devtools: process.env.NODE_ENV === 'development',

    env: {
        GITHUB: 'https://github.com/nicobritos/nicobritos-portfolio',
        CURRENT_POSITION: 'Software Architect @ LatinBox'
    },

    /*
    ** Headers of the page
    ** See https://nuxtjs.org/api/configuration-head
    */
    head: {
        link: [
            {href: '/favicon.ico', rel: 'icon', type: 'image/x-icon'},
            { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css', rel: 'stylesheet' }
        ],
        meta: [
            {charset: 'utf-8'},
            {content: 'width=device-width, initial-scale=1', name: 'viewport'},
            {content: process.env.npm_package_description || '', hid: 'description', name: 'description'}
        ],
        title: 'Nico Britos - Software Architect'
    },

    loaders:  {
        vue: {
            prettify: false
        }
    },

    loading: {
        color: 'rgb(231, 84, 68)',
        continuous: true
    },

    /*
    ** Plugins to load before mounting the App
    ** https://nuxtjs.org/guide/plugins
    */
    plugins: [
        {
            src: '~/plugins/eventBus',
            ssr: false
        }
    ],

    render: {
        injectScripts: false, // SSR only
        bundleRenderer: {
            runInNewContext: false
        }
    },

    server: {
        host: '0.0.0.0',
        port: 8080
    },

    /*
    ** Nuxt target
    ** See https://nuxtjs.org/api/configuration-target
    */
    target: 'server',

    telemetry: false,

    ssr: true
};
