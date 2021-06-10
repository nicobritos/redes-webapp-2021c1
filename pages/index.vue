<template>
    <div>
        <div class="pa-8 text-center">
            <v-btn color="success" @click="service">Run heavy service</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',

    components:{

    },

    data: () => ({
    }),

    methods: {
        service() {
            console.log("Heavy service called")
        }
    }
}
</script>
