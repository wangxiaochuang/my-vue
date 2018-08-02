<template>
  <div class="about">
    <h1>This is an about page {{currentPost}}</h1>
    <br>
    <br>
    <div>
      <ul>
        <li :key="post.id" v-for="post in posts">
          <button @click="getPost(post.id)">get</button>
          {{post}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    created() {
        this.listPosts()
    },

    // make states available
    computed: mapState({
        posts: state => state.posts.posts,
        currentPost: state => state.posts.currentPost
    }),
    methods: {
        ...mapActions([
            "listPosts",
            "getPost"
        ]),
        test: (id) = {
            this.getPost(id)
        }
    }
}
</script>