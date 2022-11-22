<template>
    <section id="postsBody">
        <div v-for="post in posts" :key="post.id" class="post">
        <div class="center">
            <div class="post_header">
                <div class="iconPost">
                </div>
                <p>${date}</p>
              </div>
              <div class="post_body">
                <p>${body}</p>
                <img src=${image} width="400px" height="300px">
                <p>Likes: {{post.likeNumber}}</p>
                <button @click="incrementLikes()"></button>
              </div>
            </div>
    </div>
    </section>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
export default {
    name: "Postsbody",
    computed: {
        ...mapGetters(["posts"]),
    },
    methods: {
        
    },
};
</script>

<style>
li a{
    display: block;
    text-transform: uppercase;
    text-align: center;
    font-size: .99em;
    text-decoration: none;
    border: 3px solid #FEFAE0;
    background-color: #DDA15E;
    width: 110%;
    margin:auto;
    color: #FEFAE0;
    font-weight: bold;
    border-radius: 5px;
}

.iconPost {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    overflow: hidden;
    margin-top: -6px;
    float: left;
    margin: 7;
    margin-left: 15;
}

.post {
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10;
    padding-bottom: 10;
}

.center {
    width: 450px;
    height: max-content;
    background-color:  #FEFAE0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    align-items: center;
    justify-content: center;
}

.post_header {
    height: max-content;
    border: 1px solid #ddd;
}

.post_body {
    height: 70%;
    justify-items: center;
    text-align: center;
    padding: 5;
    padding-top: 0;
}

p {
    padding: 10;
    font-size: 14px;
    text-align: justify;
}

h2{
    padding:10;
    padding-bottom: 0;
    font-size: 16px;
    text-align: justify;
}

.post_image {
    margin-top: 10;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 80%;
    height: 90%;
}

.post_footer {
    height: 15%;
    text-align: center;
    margin: 0;
}

section {
    min-height: 100%;
    padding-bottom: 50px;
}
</style>


