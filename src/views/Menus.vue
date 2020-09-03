<template lang="pug">
  b-container(fluid).p-0
    b-row(no-gutters)
      b-col(cols="3" md="3" xl="3"  style="min-height: 100vh; position:sticky; top:0;").py-3
        b-navbar(toggleable='lg').p-0
          .sidebar-header
            b-container(fluid title="home" style="width: 70%" @click="home").pb-3.px-0.float-left
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


</style>