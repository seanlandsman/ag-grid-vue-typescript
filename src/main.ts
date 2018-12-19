import Vue from 'vue'

// sfc vue
// import App from './SfcApp.vue'

// ts component
// if using this ensure "runtimeCompiler: true" is set in vue.config.js as the template needs to be compiled
// in a full app the template would be precompiled
// this property can be removed/commented out when doing a prod build though as the template will be compiled during that
// process
import App from './TsApp'

import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
import "../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css";

Vue.config.productionTip = false;

new Vue({
    render: (h: any) => h(App),
}).$mount('#app');
