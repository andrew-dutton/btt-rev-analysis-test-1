<template>
  <hot-table licenseKey='non-commercial-and-evaluation' :settings="settings"></hot-table>
</template>

<script>
import axios from 'axios'
import { HotTable } from '@handsontable/vue'

export default {
  name: 'Index',
  data () {
    return {
      settings: {
        data: [],
        colHeaders: ['Invoice Number', 'Invoice Date', 'Client Name', 'Revenue Type', 'Item Type', 'EB / NB', 'Item Code', 'Account Code', 'Start Date', 'End Date', 'Term Days', 'Term Months', '$ Value Month', 'Currency','FY','Total','Notes'
        ],
        rowHeaders: [],
        columnSorting: true,
        manualColumnResize: true,
        manualRowResize: true
        },
      records: []
    }
  },
  components: {
    HotTable
  },
  methods: {
    getData() {
      axios.get('https://api.airtable.com/v0/appes0AhRWhnBvazS/Revenue%20Data?api_key=API_KEY')
      .then(response => {
        this.records = response.data.records
        this.records.forEach(item => {
          this.settings.data.push(item.fields)
        })
      }).catch(err => {
          console.log(err)
      })
    }
  },
  created() {
  this.getData()
  }
}
// ./../../node_modules
</script>

<style src="../../node_modules/handsontable/dist/handsontable.full.css"></style>
