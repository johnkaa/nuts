import Vue from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

vSelect.props.components.default = () => ({
  Deselect: {
    render: null,
  },
});

Vue.component('VSelect', vSelect)