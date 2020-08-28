<template lang="pug">
  div.home
    img(alt="ICRA logo" src="../assets/icra-logo-en.png")
    AppsList(msg="Welcome to Your Vue.js App")
</template>

<script>
// @ is an alias to /src
import AppsList from '@/components/AppsList.vue'

export default {
  name: 'Home',
  components: {
    AppsList
  }
}
</script>
