<template lang="pug">
  b-container(fluid).p-0
    b-row(no-gutters)
      b-col(cols="3" md="3" xl="3"  style="min-height: 100vh; position:sticky; top:0;").py-3
        b-navbar(toggleable='lg').p-0
          .sidebar-header
            b-container(fluid title="back to ICRA homepage" style="width: 70%").pb-3.px-0.float-left
              a(href="http://icra.cat/index.php?lang=3")
                img(alt="ICRA logo" src="../assets/icra-logo-en.png").img-fluid
            b-container(fluid)
              ul.list-unstyled.components()
                li.menuTitle
                  a(type="button" @click="home") HOME
                li.menuTitle AVAILABLE APPS & TOOLS
                template(v-for="app in myJson.apps")
                  li.pl-3
                    a.link(type="button" @click="moreInfo(app)" :id="app.name" :class="getClass(app.name)") {{app.name}}

      b-col().py-3
        Header
        router-view

</template>

<script>

  import json from '../../public/data.json'
  import Header from "../components/Header";

  export default {
    name: 'Menus',
    components: {Header},
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
      moreInfo: function (currentApp) {
        let _this = this;
        _this.$store.dispatch('setCurrentApp', {currentApp});
        let appName = currentApp.name.replace(/\s/g, "-"); //replace whitespaces with '-'
        const path = '/'+appName;
        if(this.$route.path !== path)
          this.$router.push({ name: 'appInfo', params: { appName: appName }});
      },
      home: function () {
        const path = '/';
        if(this.$route.path !== path)
          this.$router.push('/');
      },
      getClass: function (name) {
        let _this = this;
        let className ="";
        let appName = _this.$store.getters.getCurrentApp['name'];
        if(this.$route.path !== '/')
          if(appName === name)
            className = "active"
        return className;
      },
      computed: {

      }
    }
  }
</script>

<<style scoped>

  .sidebar-header {
    line-height: 1.6;
  }

  li.menuTitle{
    color: var(--text-main-color);
    font-weight: bold;
    margin-bottom: 10px;
  }

  a.link, a.link[type=button] {
    color: var(--text-nav-color);
  }

  a.link:hover, a.link[type=button]:hover {
    color: var(--blue-icra);
    text-decoration: none;
  }

  a.link.active, a.link.active[type=button] {
    color: var(--blue-icra);
    font-weight: bold;
  }

  /*
  .btn-secondary {
    color: #fff;
    background-color: #e65943;
    border-color: #e65943;
    font-weight: bold;
  }

  .btn-secondary:hover {
    color: #fff;
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
  */

</style>