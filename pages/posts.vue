<!-- TODO: Deny access if not logged in -->
<template>
    <v-app dark>
        <div class="pa-8">
            <h1 class="title">The Wall</h1>
            <v-form @submit.prevent="post" class="my-8">
                <v-textarea solo name="post_text" label="Write a post"></v-textarea>
                <div class="text-right">
                    <v-btn color="success" @click="post">Post</v-btn>
                </div>
            </v-form>

            <v-divider></v-divider>

            <v-card dark class="my-8">
                <v-card-title class="headline">Graffiti #1</v-card-title>
                <v-card-subtitle>Vamo lo pibe carajo!</v-card-subtitle>
                <div class="text-right">
                    <v-card-actions>
                        <v-list-item class="grow">
                            <v-list-item-title>Evan You</v-list-item-title>
                        </v-list-item>
                    </v-card-actions>
                </div>
            </v-card>
        </div>
    </v-app>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            post_text: ''
        }
    },
    methods: {
        post () {
        }
    }
}
</script>

<style>
h1.title {
    text-align: center;
}
</style>