import Vue from 'vue'
import Component from 'vue-class-component'
import {AgGridVue} from 'ag-grid-vue';

@Component({
    template: `
        <ag-grid-vue style="width: 500px; height: 150px;"
                 class="ag-theme-balham"
                 :columnDefs="columnDefs"
                 :rowData="rowData">
        </ag-grid-vue>
    `,
    components: {
        AgGridVue
    }
})
export default class MyComponent extends Vue {
    columnDefs: any[] = [];
    rowData: any[] = [];

    beforeMount(): void {
        this.columnDefs = [
            {headerName: 'Make', field: 'make'},
            {headerName: 'Model', field: 'model'},
            {headerName: 'Price', field: 'price'}
        ];

        this.rowData = [
            {make: 'Toyota', model: 'Celica', price: 35000},
            {make: 'Ford', model: 'Mondeo', price: 32000},
            {make: 'Porsche', model: 'Boxter', price: 72000}
        ];
    }
}