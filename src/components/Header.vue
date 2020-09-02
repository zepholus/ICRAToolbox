<template lang="pug">
  .header
    div#header
      ul.components().float-right
        li
          a(type="button" href="http://icra.cat/index.php?lang=3" target="_blank") ICRA Homepage
        li |
        li
          a(type="button" href="mailto:icra@icra.cat" target="_blank") Contact
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>

  #header {
    padding-bottom: 2rem;
  }

  #header li a {
    text-decoration: none;
    color: var(--text-nav-color);
  }

  #header ul, li {
    margin: 0;
    padding: 4px;
    display:inline
  }

  #header li a:hover {
    text-decoration: underline;
    color: black;
  }


</style>