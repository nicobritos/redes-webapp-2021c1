<template>
    <v-toolbar dark>
        <v-toolbar-title>
            <h1 class="title">The Wall</h1>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn to="/login" v-if="!this.$store.state.loggedIn">Log in</v-btn>
        <v-btn class="nav-item" to="/login" @click="logout" v-else>Log out</v-btn>
    </v-toolbar>
</template>
<script>
export default {
    name: 'Toolbar',
    methods: {
        logout(){
            this.$store.commit('logOut');
        }
    }
}
</script>
<style scoped>
</style>