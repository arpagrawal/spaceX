export default {
    name: 'sx-filter-section',
    components: {
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
        } else {
          this.$set(this.currentFilter, category, value);
        }
        this.$emit('filterChange', JSON.stringify(this.currentFilter));
      }
    },
  };