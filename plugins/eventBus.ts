import {Plugin} from '@nuxt/types';
import Vue from 'vue';

declare module 'vue/types/vue' {
    // This.$myInjectedFunction inside Vue components
    interface Vue {
        $bus: Vue
    }
}

declare module '@nuxt/types' {
    // NuxtContext.$myInjectedFunction
    interface Context {
        $bus: Vue
    }
}

const eventBusPlugin: Plugin = (context, inject) => {
    let bus = new Vue();
    inject('bus', bus);
    context.$bus = bus;
};

export default eventBusPlugin;
