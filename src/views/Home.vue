<template>
  <div class="container mx-auto">
    <PostCard v-for="(post,index) in _posts" :id="post.id" :key="post.id" :title="post.title"/>
  </div>
</template>

<script>
import Card from "../components/Card";
import PostCard from "../components/PostCard";


export default {
  name: 'Home',
  components: {PostCard, Card},
  computed: {
    _posts() {
      return this.$store.getters.get_posts;
    }
  },
  mounted() {
    this.$store.dispatch('SEND_PERFORMANCE_DATE');
  },
  created() {
    this.$store.dispatch('GET_POSTS');
  },
}
</script>

<style scoped>

</style>