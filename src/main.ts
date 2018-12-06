import Vue from 'vue'

// sfc vue
// import App from './App.vue'

// ts component
// if using this ensure "runtimeCompiler: true" is set in vue.config.js as the template needs to be compiled
// in a full app the template would be precompiled
// this property can be removed/commented out when doing a prod build though as the template will be compiled during that
// process
import App from './App'

import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
import "../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css";

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
