<template>
    <div>
        <div class="pa-8 text-center">
            <v-btn color="success" @click="service" :disabled="state.isSending">Run heavy service</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',

    components:{

    },

    data: () => ({
        state: {
            isSending: false
        }
    }),

    methods: {
        async service() {
            this.state.isSending = true;
            this.$axios.get('/process')
            .then((response) => {
                    this.state.isSending = false
            })
            .catch((error) => {
                this.state.isSending = false
                console.log(error)
            });
        }
    }
}
</script>
