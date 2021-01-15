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
        launchYears: []
      };
    },
    directives: {},
    computed: {},
    mounted() {
      this.getSpacexData()
      .then(this.handleSpacexDataResponse)
      .catch(this.handleSpacexDataError);
    },
    methods: {
     /**
     * function to handle flight data response
     */
      async getSpacexData() {
        let response = await fetch(serviceUrls.launchData);
        let json = await response.json();
        return json;
      },
     /**
     * function to handle flight data response
     */
      handleSpacexDataResponse(res) {
        if (res) {
          this.spacexData = res;
          this.launchYears = this.getLaunchYears(this.spacexData);
          console.log(res);
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
        return yearList;
      },
    },
  };