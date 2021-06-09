<template>
    <v-app dark>
        <div class="pa-8">
            <v-form @submit.prevent="login" color="deep-purple accent-4" ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="email" :rules="emailRules" label="Email" required></v-text-field>
                <v-text-field v-model="password" type="password" :counter="10" label="Password" required></v-text-field>
                <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Submit</v-btn>
            </v-form>
        </div>
    </v-app>
</template>

<script>
export default {
    name: 'Home',

    components:{

    },

    data: () => ({
        valid: true,
        email:'',
        password: '',
        emailRules: [
            v => !!v || 'Email is required',
            v => /.+@.+\..+/.test(v) || 'Email must be valid',
        ]
    }),

    methods: {
        validate () {
            if(this.$refs.form.validate()) {
                if(this.email == "admin@mail.com" && this.password == "admin") {
                    this.$router.push("/posts")
                } else {
                    alert('Not valid')
                }
            }
        },
        login(event) {
            this.$router.push("posts")
        }
    }
}
</script>