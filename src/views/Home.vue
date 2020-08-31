<template lang="pug">
  div.home
    AppsList
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
