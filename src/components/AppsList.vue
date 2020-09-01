<template lang="pug">
  .appsList
    div#filters
      b-row.px-3(align-v="center")
        b-col(sm="3" lg="3" xl="3").text-left.p-3
          b-input(type="text" v-model="search" placeholder="Search apps")
        b-col(sm="3" lg="3" xl="3").text-left.p-3
          b-button(v-b-modal.modal-1) Select filters

          b-modal(id="modal-1" title="Filters" hide-header-close)
            div
              p Code Type
              b-form-radio-group(v-model="codeType.selected", :options="codeType.options")

    br
    div
      b-card-group(columns)
        div(v-for="app in filteredApps")
          b-card(no-body style="max-width: 540px;").overflow-hidden
            b-row(no-gutters)
              b-col(md="6").p-3
                b-card-img(:src="'./images/'+app.imageName" alt="Image").rounded-0
              b-col(md="6")
                b-card-body(:title="app.name")
                  b-card-text
                    p {{app.shortDescription | snippet}}
                    a.link(type="button" @click="moreInfo(app)") More info >>

</template>

<script>
  export default {
    name: 'AppsList',
    data(){
      return{
        appsInfo: [],
        search: "",
        codeType: {
          selected: 'any',
          options: [
          { text: '-Any-', value: 'any' },
          { text: 'Free, no licence', value: 'free' },
          { text: 'Public/open source', value: 'open'},
          { text: 'Closed source', value: 'closed'}
        ]
      }

      }
    },
    computed: {
      filteredApps: function(){

        let _this = this
        let lowerSearch = _this.search.toLowerCase()

        return _this.appsInfo.filter((app) => {
          let nameLower = app.name.toLowerCase()
          let descriptionLower = app.shortDescription.toLowerCase()

          let searchBox = nameLower.match(lowerSearch) || descriptionLower.match(lowerSearch)
          let codeType = (_this.codeType.selected === 'any') || (app.filters.codeType === _this.codeType.selected)

          return searchBox && codeType

        });
      },
    },
    mounted: function () {
      let _this = this;
      _this.appsInfo = _this.$store.getters.getAppsInfo;
    },
    methods: {
      moreInfo: function (currentApp) {
        let _this = this;
        _this.$store.dispatch('setCurrentApp', {currentApp});
        let appName = currentApp.name.replace(/\s/g, "-"); //replace all whitespaces with '-'
        const path = '/'+appName;
        if(this.$route.path !== path)
          this.$router.push({ name: 'appInfo', params: { appName: appName }});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .appsList {
    color: var(--text-main-color);
    line-height: normal;
  }

  #filters {
    background-color: var(--dark-gray);
  }

  h4.card-title {
    font-weight: bold;
  }

  a.link, a.link[type=button] {
    color: var(--blue-icra);
    align-self: center;
  }

  a.link:hover, a.link[type=button]:hover {
    color: var(--text-main-color);
    align-self: center;
    text-decoration: none;
    font-weight: bold;
  }
  /*
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
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
  }*/
</style>