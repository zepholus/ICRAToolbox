<template lang="pug">
  div


    b-jumbotron(header="" style="background-color: #c9ccd1")
      div#filters
        b-row.greenTitles.px-3(align-v="center")
          b-col(sm="12" lg="8" xl="10").text-left.px-3.pb-2
            span(style="color: var(--green-primary); font-weight: var(--bold-text); font-size: 14px") AQUÍ ANIRAN ELS FILTRES

    br

    b-input(type="text" v-model="search" placeholder="search apps")


    div.mt-3
      b-card-group(columns)
        div(v-for="app,index in filteredApps")
          b-card(no-body style="max-width: 540px;").overflow-hidden
            b-row(no-gutters)
              b-col(md="6")
                b-card-img(src="https://picsum.photos/400/400/?image=20" alt="Image").rounded-0
              b-col(md="6")
                b-card-body(:title="app.name")
                  b-card-text
                    p {{app.shortDescription | snippet}}






</template>

<script>
  export default {
    name: 'AppsList',
    props: {
      msg: String
    },
    data(){
      return{
        appsInfo: [],
        search: "",

      }
    },
    computed: {
      filteredApps: function(){

        let lowerSearch = this.search.toLowerCase()

        return this.appsInfo.filter((app) => {
          let nameLower = app.name.toLowerCase()
          let descriptionLower = app.shortDescription.toLowerCase()
          return nameLower.match(lowerSearch) || descriptionLower.match(lowerSearch)
        });
      }
    },
    mounted: function () {
      let _this = this;
      _this.appsInfo = _this.$store.getters.getAppsInfo;
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
  }
</style>