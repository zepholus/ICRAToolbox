<template lang="pug">
  .appInfo
    b-container(fluid="true")
      p Hola

</template>

<script>

  export default {
    name: "AppInfo",
    props: ['app'],
    data: function () {
      return {
        appInfo: null
      }
    },
    mounted: function () {

    },
  }

</script>

<style scoped>

</style>