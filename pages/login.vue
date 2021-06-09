<template>
    <div>
        <div class="pa-8">
            <v-form @submit.prevent="login" color="deep-purple accent-4" ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="username" label="Username" required></v-text-field>
                <v-text-field v-model="password" type="password" label="Password" required></v-text-field>
                <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Submit</v-btn>
            </v-form>
        </div>
    </div>
</template>

<script>
import user from '~/plugins/user';

export default {
    name: 'Home',

    components:{

    },

    data: () => ({
        valid: true,
        username:'',
        password: '',
    }),

    methods: {
        validate () {
            if(this.$refs.form.validate()) {
                if(this.username == "admin" && this.password == "admin") {
                    user.data = 'not null';
                    this.$store.commit('logIn', this.username);
                    this.$router.push("/posts");
                } else {
                    alert('Not valid')
                }
            }
        },
        login(event) {
            user.data = 'not null';
            this.$router.push("posts");
        }
    }
}
</script>
