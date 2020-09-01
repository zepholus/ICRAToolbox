<template lang="pug">
  .appInfo
    div#title
      b-row(align-v="center").text-left.px-3
        h3.title.p-3 {{ getAppTitle }}

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
    }
  }

</script>

<style scoped>
  .appInfo {
    color: var(--text-main-color);
    line-height: normal;
  }

  #title {
    background-color: var(--dark-gray);
  }

  h3.title{
    color: white;
    font-weight: bold;
  }


</style>