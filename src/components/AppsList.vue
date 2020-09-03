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
                b-form-checkbox-group(v-model="codeType.selected", :options="codeType.options" stacked).m-3

              b-row(v-b-toggle.filter2)
                b-col(cols="10")
                  p.sideBar FUNCTIONALITY
                b-col(cols="2")
                  b-icon(icon="chevron-up" size="sm")

              b-collapse(id="filter2" role="tabpanel")
                b-form-checkbox-group(v-model="functionality.selected", :options="functionality.options" stacked).m-3

              b-row(v-b-toggle.filter3)
                b-col(cols="10")
                  p.sideBar URBAN CYCLE WATER
                b-col(cols="2")
                  b-icon(icon="chevron-up" size="sm")

              b-collapse(id="filter3" role="tabpanel")
                b-form-checkbox-group(v-model="urbanWaterCycle.selected", :options="urbanWaterCycle.options" stacked).m-3

              b-row(v-b-toggle.filter4)
                b-col(cols="10")
                  p.sideBar TOPIC
                b-col(cols="2")
                  b-icon(icon="chevron-up" size="sm")

              b-collapse(id="filter4" role="tabpanel")
                b-form-checkbox-group(v-model="topic.selected", :options="topic.options" stacked).m-3
    br
    div.my-grid
      b-card-group(v-for="app in filteredApps" :key="app.name" ).p-2
        b-card(no-body style=" min-height: fit-content").overflow-hidden
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
  import Header from "./Header";

  export default {
    name: 'AppsList',
    components: {Header},
    data(){
      return{
        appsInfo: [],
        search: "",
        codeType: {
          selected: [],
          options: [
          { text: 'Free, no licence', value: 'free' },
          { text: 'Public/open source', value: 'open'},
          { text: 'Closed source', value: 'closed'}
          ]
        },
        functionality: {
          selected: [],
          options: [
            { text: 'Planning', value: 'planning' },
            { text: 'Design', value: 'design' },
            { text: 'Selection', value: 'selection' },
            { text: 'Operation', value: 'operation' },
            { text: 'Maintenance', value: 'maintenance' },
            { text: 'Optimization', value: 'optimization' },
            { text: 'Control', value: 'control' },
            { text: 'Management', value: 'management' },
            { text: 'Decision support', value: 'decision support' }
          ]
        },
        topic: {
          selected: [],
          options: [
            { text: 'GHG', value: 'GHG' },
            { text: 'Nitrates', value: 'nitrates' },
            { text: 'Membranes', value: 'membranes' },
            { text: 'NBS', value: 'NBS' },
            { text: 'Odours', value: 'odours' },
            { text: 'Corrosion', value: 'corrosion' },
            { text: 'Aeration', value: 'aeration' },
            { text: 'Cost', value: 'cost' },

          ]
        },
        urbanWaterCycle: {
          selected: [],
          options: [
            { text: 'Drinking water', value: 'drinking water' },
            { text: 'Distribution', value: 'distribution' },
            { text: 'Sewer', value: 'sewer' },
            { text: 'Collection', value: 'collection' },
            { text: 'Treatment', value: 'treatment' },
            { text: 'Reuse', value: 'reuse' },
            { text: 'River', value: 'river' },
          ]
        },
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
          let codeType = (_this.codeType.selected.length === 0) || (_this.codeType.selected.filter(x => app.filters.codeType.includes(x)).length > 0);
          let functionality = (_this.functionality.selected.length === 0) || (_this.functionality.selected.filter(x => app.filters.functionality.includes(x)).length > 0);
          let topic = (_this.topic.selected.length === 0) || (_this.topic.selected.filter(x => app.filters.topic.includes(x)).length > 0);
          let urbanWaterCycle = (_this.urbanWaterCycle.selected.length === 0) || (_this.urbanWaterCycle.selected.filter(x => app.filters.urbanWaterCycle.includes(x)).length > 0);


          return searchBox && codeType && functionality && topic && urbanWaterCycle
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

  .my-grid {
    display: grid;
    justify-items: center;
    /* 280px is the minimum a column can get, you might need to adjust it based on your needs. */
    grid-template-columns: 50% 50%;
    /*grid-gap: 1.5rem;*/
  }

  .my-grid > * {
    width: 100%;
  }

  .card-title {
    font-weight: bold;
  }

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
    align-self: end;
    float: right;
    padding-bottom: 1rem;
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