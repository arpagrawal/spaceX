import sxFilterButton from '../sx-filter-button/sx-filter-button.vue';

export default {
    name: 'sx-filter-section',
    components: {
      sxFilterButton
    },
    props: {
      launchYears : {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        currentFilter: {},
      };
    },
    directives: {},
    computed: {},
    mounted() {},
    methods: {
      applyFilter(category, value) {
        if (this.currentFilter[category] === value) {
          this.$delete(this.currentFilter,category);
          this.isActive = false;
        } else {
          this.$set(this.currentFilter, category, value);
          this.isActive = true;
        }
        console.log(`from filter ${JSON.stringify(this.currentFilter)}`);
        this.$emit('filterChange', JSON.stringify(this.currentFilter));
      }
    },
  };