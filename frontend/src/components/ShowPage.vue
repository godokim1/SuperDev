<template>
  <div>
    <h1>상세 내용</h1>
    <div v-for="item in movie" v-bind:key="item.id">
      <img class="poster" v-bind:src="item.poster">
      <p class="name">{{item.name}}</p>
      <p class="year">{{item.year}}</p>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    const id = this.$route.params.id;
    this.$http.get(`/api/movies/${id}`)
      .then((response) => {
        this.movie = response.data;
      });
  },
  data() {
    return {
      movie: {},
    };
  },
};
</script>
