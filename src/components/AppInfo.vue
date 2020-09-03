<template lang="pug">
  .appInfo
    div#title
      b-row(align-v="center" align-h="between" style="height: 100px;").text-left.px-3
        b-col(style="background-color: var(--dark-gray); height: 80px;" order="2").p-0
          h3.appTitle.px-3.pt-4.text-right {{ getAppTitle }}
        b-col(cols="auto" order="1")
          b-img(:src="'./images/'+appInfo['imageName']" height="80px" style="background-color: white")
    b-container.pt-4.px-3#content
      template(v-if="this.appInfo['description']" )
        div#description
          p(v-html="showContentHtml(this.appInfo['description'])")
        br

      template(v-if="this.appInfo['otherImages'].length > 0" )
        div#images()
          b-carousel(:interval="4000" indicators )
            template(v-for="img in this.appInfo['otherImages']" )
              b-carousel-slide()
                template(v-slot:img)
                  img(:src="'./images/'+img" style="margin: auto; height: 35vh; max-width: 90%").d-block.img-fluid
        br
        b-dropdown-divider.line

      template(v-if="this.appInfo['project']" )
        div#project
          h4.sectionTitle Project
          p(v-html="showContentHtml(this.appInfo['project'])")
        b-dropdown-divider.line

      template(v-if="this.appInfo['publications'].length > 0" )
        div#publications
          h4.sectionTitle Publications
          ul.components()
            template(v-for="pub in this.appInfo['publications']")
              li
                p(v-html="showContentHtml(pub['authors'])")
                a.link(type="button" :href="pub.link" target="_blank" v-html="showContentHtml(pub['title'])")
        b-dropdown-divider.line

      template(v-if="this.appInfo['experts'].length > 0" )
        div#experts
          h4.sectionTitle Tool expert(s)
          b-row(fluid)
            template(v-for="exp in this.appInfo['experts']")
              b-col(cols="4").pb-2
                ul.components()(style="margin-bottom: 0")
                  li
                    h6(v-html="showContentHtml(exp['name'])" style="margin-bottom: 0.2rem; font-weight: bold;")
                    p(v-html="showContentHtml(exp['position'])")
                    div
                      b-icon(icon="envelope-fill" size="sm")
                      a.link(type="button" :href="'mailto:'+exp['email']+'?Subject=ICRA%20(apps%20and%20tools):%20'+getAppTitle" target="_blank" v-html="showContentHtml(exp['email'])").pl-2
        b-dropdown-divider.line

      template(v-if="this.appInfo['credits'].length > 0" )
        div#credits
          h4.sectionTitle Credits
          b-row(fluid)
            template(v-for="cred in this.appInfo['credits']")
              b-col(cols="4").pb-2
                ul.components()(style="margin-bottom: 0")
                  li
                    h6(v-html="showContentHtml(cred['name'])" style="margin-bottom: 0.2rem; font-weight: bold;")
                    p(v-html="showContentHtml(cred['position'])")
        b-dropdown-divider.line

      template(v-if="this.appInfo['toolLink'] || this.appInfo['codeLink']" )
        div#links
          h4.sectionTitle Links & Downloads
          p
            | This is a
            |
            strong.font-italic {{ this.appInfo.filters['code type'][0] }}
            |
            |  tool.

          template(v-if="this.appInfo['toolLink']")
            p(style="margin: 0;") You can use, download or find more information about this tool on the following link:
            ul.components()
              li
                a.link(type="button" :href="this.appInfo['toolLink']" target="_blank" v-html="showContentHtml(this.appInfo['toolLink'])")
          template(v-if="this.appInfo['codeLink']")
            p(style="margin: 0;") Source code available on:
            ul.components()
              li
                a.link(type="button" :href="this.appInfo['codeLink']" target="_blank" v-html="showContentHtml(this.appInfo['codeLink'])")
        //b-dropdown-divider.line


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
        _this.appInfo = _this.$store.getters.getCurrentApp;
        return _this.appInfo.name;
      }
    },
    methods: {
      showContentHtml: function (content) {
        return content.replace(/\n/g, "<br />");
      }
    }
  }

</script>

<style>

  .carousel-control-prev, .carousel-control-next {
    width: 5% !important;
  }

  span.carousel-control-next-icon, span.carousel-control-prev-icon{
    background-color: var(--dark-gray);
  }

  .carousel-indicators {
    position: absolute;
    right: 0;
    bottom: -50px !important;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    padding-top: -15px;
    padding-left: 0;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
  }
  .carousel-indicators .active{
    opacity: 1!important;
  }
  .carousel-indicators li {
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 12px !important;
    height: 12px !important;
    border-radius: 50% !important;
    margin-right: 3px;
    margin-left: 3px;
    text-indent: -999px;
    cursor: pointer;
    background-color: var(--dark-gray) !important;
    opacity: .4 !important;
    transition: opacity 0.6s ease;
  }

</style>

<style scoped>
  .appInfo {
    color: var(--text-main-color);
    margin-top: 30px;
  }

  #title {
    //background-color: var(--dark-gray);
  }

  h3.appTitle{
    color: white;
    font-weight: bold;
    margin: 0;
  }

  h4.sectionTitle{
    color: var(--text-main-color);
    font-weight: bold;
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