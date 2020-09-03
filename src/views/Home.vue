<template lang="pug">
  div.home
    div#presentation
      h1 IT Icra Lab
      h2 See all the apps & tools available
      b-dropdown-divider.line.py-2
      div#about
        p Bla bla bla::: description of the content in general.

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

<style scoped>
  #presentation h1 {
    font-size: 30px;
    color: #000000;
    margin: 30px 0 0 8px;
    height: 24px;
    font-weight: bold;
  }

  #presentation h2 {
    font-size: 28px;
    color: #A6AAAD;
    margin: 7px 0 8px 8px;
    width: 710px;
    line-height: 24px;
    font-weight: bold;
  }

  #presentation #about {
    margin: 20px 60px 20px 43px;
    color: var(--text-main-color);
  }

  .line {
    height: 0;
    width: 100%;
    overflow: hidden;
    border-top: 2px solid var(--blue-icra);
  }

</style>