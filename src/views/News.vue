<template>
  <div class="home">
    <h1 class="headerCustom">news</h1>
    <hr>
    <b-container class="bv-example-row">
      <b-row v-if="articles != null" >

    <b-col  col='3' lg="3" class="mb-3" v-for="(art,index) in articles" :key="index" >
    <b-card
    :title="art.author"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
  <hr>
    <b-card-text >
      {{art.title}}
    </b-card-text>
    <hr>
    <b-card-text>
      {{art.content}}
      </b-card-text>
       <b-link :href="art.url" class="text-secondary">show full article</b-link>
  </b-card></b-col>
  </b-row>
      </b-container>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      articles: null,
      urlToImage: null
    }
  },
  created () {
    // eslint-disable-next-line no-unused-expressions
    this.axios.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-12&sortBy=publishedAt&apiKey=573a90d537d44d3b9baf234ae2fa2671')
      .then(response => {
        this.articles = response.data.articles
        this.urlToImage = response.data.articles.urlToImage
        console.log(response.data)
      })
  }
}
</script>
<style >
.card-title{
  color:rgba(20, 36, 59, 0.667) !important;
}
.card-text{
    color:rgba(73, 43, 43, 0.667) !important;

}

</style>
