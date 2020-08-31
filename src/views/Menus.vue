<template lang="pug">
  b-container(fluid).p-0
    b-row(no-gutters)
      b-col(cols="4" md="3" xl="2"  style="min-height: 100vh; position:sticky; top:0;")
        b-navbar(toggleable='lg')
          .sidebar-header
            b-container(fluid @click="home")#menuHeader
              img(alt="ICRA logo" src="../assets/icra-logo-en.png").img-fluid
            b-container(fluid)#menuBlock1
              ul.list-unstyled.components()
                template(v-for="app in myJson.apps")
                  li
                    a(type="button" @click="moreInfo(app.name)") {{app.name}}

      b-col()
        router-view

</template>

<script>

  import json from '../../public/data.json'

  export default {
    name: 'Menus',

    data() {
      return {
        myJson: json,
      };
    },
    created: function () {
      let _this = this;

      let appsList = json['apps'];
      _this.$store.dispatch('addAppsInfo', {appsList});
      console.log("Apps list information saved: ", appsList);

    },
    methods: {
      moreInfo: function (name) {
        let appName = name.replace(/\s/g, "-"); //replace whitespaces with '-'
        this.$router.push('/' + appName);
      },
      home: function () {
        const path = '/';
        if(this.$route.path !== path)
          this.$router.push('/');
      }
    }
  }
</script>

<<style scoped>
  a {
    color: black;
  }

  a:hover {
    color: black;
  }

  .comingSoon{
    color: grey;
  }

  .btn-secondary {
    color: #fff;
    background-color: #e65943;
    border-color: #e65943;
    font-weight: bold;
  }

  .btn-secondary:hover {
    color: #fff;
  }

  #menuHeader {
    color: #36cb87;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  #menuBlock1 {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  h3 {
    font-weight: 900;
    text-align: center;
  }

  p {
    font-size: x-small;
    text-align: center;
    font-weight: 900;
  }

  .dropdown-divider {
    height: 0;
    margin: 1.5rem 0;
    overflow: hidden;
    border-top: 1px solid #000000;
  }

  p.barText {
    color: var(--green-primary);
    font-size: small;
  }

  .jumbotron {
    background-color: white;
    border-radius: 0rem;
    padding: 0rem;
    margin: 0;
  }

  #map {
    height: 60vh;
    width: 100%;
  }

  .greenTitles {
    color: var(--green-primary);
    text-align: center;
    font-size: small;
  }

  .checkBox {
    text-align: left;
    color: var(--green-primary);
    font-size: small;
  }

  .form-control {
    border: var(--green-primary) 1px solid;
    border-radius: 25px;
    font-size: small;
  }

  .b-icon.bi.collapsed {
    transform: rotate(180deg);
  }

  .advancedSearchOptions {
    background-color: var(--light-gray-secondary);
    font-size: small;
    margin: 0;
  }

  .optionsBut {
    color: var(--light-gray-primary);
    background-color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 2rem;
    align-self: baseline;
    margin: 0.75rem;
    padding: 0 0.1em 0 0.1em;
  }

  .optionsBut:hover {
    color: #6c757d;
    background-color: #ffffff;
    border-color: var(--dark-red);
  }

  .optionsBut > div {
    margin: 0.55rem;
  }

  .optionsBut p {
    padding: 0rem;
    margin: 0rem;
  }

  .custom-control-inline {
    margin-right: 0;
  }


</style>