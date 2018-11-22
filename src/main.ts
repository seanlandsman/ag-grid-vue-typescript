import Vue from 'vue'

// sfc vue
// import App from './App.vue'

// ts component
import App from './App'

import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
import "../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css";

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
