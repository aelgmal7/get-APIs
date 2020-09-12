<template>
  <div class="home">
    <h1 class="headerCustom">posts</h1>
    <hr>
    <b-container class="bv-example-row">
      <b-row >

    <b-col col='3' lg="3" class="mb-3" v-for="(p,index) in postss" :key="index" > <b-card
    :title="p.title | shortrn(20)"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text text-tag="a" style="cursor:pointer">
      {{p.body |shortrn(50)}}
    </b-card-text>
  </b-card></b-col>
  </b-row>
      </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      postss: null
    }
  },
  created () {
    // eslint-disable-next-line no-unused-expressions
    this.axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.postss = response.data
        console.log(response.data)
      })
  }
}
</script>
<style >

</style>
