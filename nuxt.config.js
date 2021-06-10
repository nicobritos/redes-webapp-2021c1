import colors from 'vuetify/es5/util/colors';
import { format, transports } from 'winston'
const { combine, timestamp, label, prettyPrint } = format

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'The Wall',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        {
            src: '~/plugins/req.js',
            mode: 'server'
        }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        'nuxt-winston-log'
    ],

    axios: {
        baseUrl: 'http://localhost:5000/'
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    render: {
        bundleRenderer: {
            runInNewContext: false
        }
    },

    server: {
        host: '0.0.0.0',
        port: 3000
    },

    /*
    ** Nuxt target
    ** See https://nuxtjs.org/api/configuration-target
    */
    target: 'server',

    telemetry: false,

    ssr: true,

    winstonLog: {
        // Setting to determine if filesystem is accessed to auto-create logPath.
        // Set this to `false` for non-filesystem based logging setups.
        autoCreateLogPath: true,

        useDefaultLogger: true,

        // Settings to determine if default handlers should be
        // registered for requests and errors respectively.
        // Set to `true` to skip request logging (level: info).
        skipRequestMiddlewareHandler: true,
        // Set to `true` to skip error logging (level: error).
        skipErrorMiddlewareHandler: false
    }
};
