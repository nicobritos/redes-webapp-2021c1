<template>
    <div>
        <div class="pa-8">
            <h1 class="title">The Wall</h1>
            <v-form @submit.prevent="post" class="my-8">
                <v-text-field v-model="title" name="title" label="Post title"></v-text-field>
                <v-textarea solo name="post_text" v-model="post_text" label="Write a post"></v-textarea>
                <div class="text-right">
                    <v-btn color="success">Post</v-btn>
                </div>
            </v-form>

            <v-divider></v-divider>

            <v-card dark class="my-8" v-for="(post, index) in this.$store.state.posts" :key="`post-${index}`">
                <v-card-title class="headline">{{post.title}}</v-card-title>
                <v-card-subtitle>{{post.text}}</v-card-subtitle>
                <div class="text-right">
                    <v-card-actions>
                        <v-list-item class="grow">
                            <v-list-item-title>{{post.author}}</v-list-item-title>
                        </v-list-item>
                    </v-card-actions>
                </div>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    middleware: 'authenticated',
    data() {
        return {
            title: '',
            post_text: ''
        }
    },
    async created() {
        let posts = (await this.$axios.get('/posts')).data;
        this.$store.commit('posts', posts);
    }
}
</script>

<style>
h1.title {
    text-align: center;
}
</style>
