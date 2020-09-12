<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">posts</router-link> |
      <router-link to="/news">news</router-link>
    </div>
    <button class="btn btn-dark" v-darkness id="darken">dark</button>
    <router-view/>
  </div>
</template>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>

export default {
  data () {
    return{
    isSelected:false
  }},
  // methods: {
  //   dark () {
  //     console.log('run')
  //   }
  // },
  mounted () {
    // $('#darken').click(function(){
    //   this.isSelected=!this.isSelected
    //   this.isSelected ?  $('body').css('background-color','#566566')&$('.headerCustom').addClass('text-light')&$('.headerCustom').removeClass('text-dark') : $('body').css('background-color','#FFFFFF')&$('.headerCustom').addClass('text-dark')&$('.headerCustom').removeClass('.text-light')

    //   // console.log(this.isSelected)

    // })
  }
}
</script>
<style lang="scss">
dark{
  background-color: #2c3e50 !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
