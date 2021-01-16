export default {
    name: 'sx-filter-button',
    components: {},
    props: {
        value: {
            type: String,
            default: '',
            required: true
        },
    },
    data() {
      return {
        isActive: false,
      };
    },
    directives: {},
    computed: {},
    mounted() {},
    methods: {
        filterSelected() {
            if (this.isActive) {
                this.isActive = false;
            } else {
                this.isActive = true;
            }
            this.$emit('clicked',this.value)
        }
    },
  };