<template lang="pug">
  .appsList
    div#filters
      b-row.px-3(align-v="center")
        b-col(sm="4" lg="4" xl="4").text-left.p-3
          b-input(type="text" v-model="search" placeholder="Search apps")
        b-col(sm="8" lg="8" xl="8").text-rightp-3
          b-button(v-b-toggle.filters).float-right.buttonFilter Show filters

          b-sidebar(id="filters" title="Filters" right shadow)
            div(role="tablist").px-4.py-4

              b-row(v-b-toggle.filter1)
                b-col(cols="10")
                  p.sideBar CODE TYPE
                b-col(cols="2")
                  b-icon(icon="chevron-up" size="sm")

              b-collapse(id="filter1" role="tabpanel")
                b-form-radio-group(v-model="codeType.selected", :options="codeType.options" stacked).m-3

              b-row(v-b-toggle.filter2)
                b-col(cols="10")
                  p.sideBar CODE TYPE 2
                b-col(cols="2")
                  b-icon(icon="chevron-up" size="sm")

              b-collapse(id="filter2" role="tabpanel")
                b-form-radio-group(v-model="codeType.selected", :options="codeType.options" stacked).m-2



    br
    div
      b-card-group(columns)
        div(v-for="app in filteredApps")
          b-card(no-body style="max-width: 540px; max-height: max-content").overflow-hidden
            b-row(no-gutters)
              b-col(md="6").p-3.align-content-center
                b-img(fluid center :src="'./images/'+app.imageName" alt="Image" style="max-height: fit-content;").rounded-0
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

  p.sideBar {
    font-weight: bold;
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
  div.row.collapsed .b-icon.bi {
    transform: rotate(180deg);
  }

  .buttonFilter {
    color: #fff;
    background-color: var(--blue-icra);
    border-color: var(--blue-icra);
    font-weight: var(--bold-text);
    font-size: small;
    overflow: hidden;
    min-width: fit-content;
  }

  .buttonFilter:hover {
    background-color: var(--blue-icra-hovered);
  }

  .buttonFilter:checked {
    background-color: var(--orange-icra);
  }

</style>