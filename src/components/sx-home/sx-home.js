import sxFilterSection from './../sx-filter-section/sx-filter-section.vue';
import sxCard from '../sx-card/sx-card.vue';
import serviceUrls from '../../utils/sx-service-urls';

export default {
    name: 'sx-home',
    components: {
        sxFilterSection,
        sxCard,
    },
    props: {},
    data() {
      return {
        spacexData: [],
        launchYears: [],
        currentQuery: {},
      };
    },
    directives: {},
    computed: {},
    mounted() {
      this.getSpacexData()
      .then(this.handleSpacexDataResponse.bind(this, 'initial'))
      .catch(this.handleSpacexDataError);
    },
    methods: {
     /**
     * function to handle flight data response
     */
      async getSpacexData(config) {
        let configParams = {
          limit: 100,
        };
        if (config) {
          const configObject = JSON.parse(config);
          configParams = {...configParams, ...configObject};
        }
        this.currentQuery = new URLSearchParams(configParams);
        let response = await fetch(`${serviceUrls.launchData}?${this.currentQuery}`);
        let json = await response.json();
        return json;
      },
     /**
     * function to handle flight data response
     */
      handleSpacexDataResponse(callbackType, res) {
        if (res) {
          this.spacexData = res;
          if (callbackType === 'initial') {
          this.launchYears =  this.getLaunchYears(this.spacexData);
          }
          this.updateURL();
        }
      },  

    /**
     * function to handle flight response error
     */
      handleSpacexDataError(err) {
        console.error(err);
      },
      getLaunchYears(data) {
        let yearList = new Set(data.map((item) => item.launch_year));
        yearList = Array(...yearList);
        console.log(`Year array ${yearList}`);
        return yearList;
      },
      updateURL() {
        let queryUrl = '';
        const state = { page_id: 1, user_id: 5 };
        const title = '';
        queryUrl += `?${this.currentQuery}`;
        history.pushState(state, title, queryUrl);
      },
      getFilteredProducts(config) {
        this.getSpacexData(config)
        .then(this.handleSpacexDataResponse.bind(this, ''))
        .catch(this.handleSpacexDataError);
      },
    },
  };