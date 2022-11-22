<script setup>
import header from "./components/header.vue"
import post from "./components/post.vue"
</script>

<template>
    <header></header>
    <div class = "content">
        <post></post>
        <button class="like-button" @click="resetLikes()">Reset Likes</button>
    </div>
</template>

<script>
import {mapMutations} from "vuex";
export default {
    name: "Homepage",
    methods: {
        ...mapMutations(["resetLikes"]),
    },
};

</script>