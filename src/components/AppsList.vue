<template lang="pug">
  div
    div(v-for="app,index in myJson.apps" :key="app.name")
      p {{app.name}}
      p {{app.shortDescription}}
      p {{app.description}}
      p ---------------
</template>

<script>

  import json from '../../public/data.json'
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data(){
      return{
        myJson: json
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
