<template lang="pug">
  .appInfo
    div#title
      b-row(align-v="center").text-left.px-3
        h3.appTitle.p-3 {{ getAppTitle }}
    b-container.pt-4.px-3#content
      template(v-if="this.appInfo['description']" )
        div#description
          p(v-html="showContentHtml(this.appInfo['description'])")
        b-dropdown-divider.line

      template(v-if="this.appInfo['project']" )
        div#project
          h4.sectionTitle Project
          p(v-html="showContentHtml(this.appInfo['project'])")
        b-dropdown-divider.line

      template(v-if="this.appInfo['publications']" )
        div#references
          h4.sectionTitle Publications
          ul.components()
            template(v-for="pub in this.appInfo['publications']")
              li
                p(v-html="showContentHtml(pub['authors'])")
                a.link(type="button" :href="pub.link" target="_blank") {{pub.title}}
          //p(v-html="showPublicationsHtml(this.appInfo['publications'])")
        b-dropdown-divider.line


</template>

<script>

  export default {
    name: "AppInfo",
    data: function () {
      return {
        appInfo: null
      }
    },
    created: function () {
      /*let _this = this;
      let appName = _this.$route.params.appName.replace(/(-)/g," " ); //replace all '-' from url with whitespaces
      _this.appInfo = _this.$store.getters.getAppInfoByName(appName);
      console.log("he guardat APPINFO");*/
    },
    computed: {
      getAppTitle: function () {
        let _this = this;
        //let appName = _this.$route.params.appName.replace(/(-)/g," " ); //replace all '-' from url with whitespaces
        _this.appInfo = _this.$store.getters.getCurrentApp;
        return _this.appInfo.name;
      }
    },
    methods: {
      showContentHtml: function (content) {
        return content.replace(/\n/g, "<br />");
      },
      /*showPublicationsHtml: function (content) {
        let c;
        for(c in content){

        }
      }*/
    }
  }

</script>

<style scoped>
  .appInfo {
    color: var(--text-main-color);
    //line-height: normal;
    //display: block;
    //margin-bottom: 1em;
  }

  #title {
    background-color: var(--dark-gray);
  }

  h3.appTitle{
    color: white;
    font-weight: bold;
    margin: 0;
  }

  h4.sectionTitle{
    color: var(--blue-icra);
  }

  .line {
    height: 0;
    width: 70%;
    margin: 2rem auto 1.5rem auto;
    overflow: hidden;
    border-top: 1px solid var(--orange-icra);
  }

  a.link, a.link[type=button] {
    color: var(--blue-icra);
    align-self: center;
  }

  a.link:hover, a.link[type=button]:hover {
    color: var(--orange-icra);
    align-self: center;
    text-decoration: none;
    font-weight: bold;
  }

  li > p {
    margin: 0;
  }



</style>