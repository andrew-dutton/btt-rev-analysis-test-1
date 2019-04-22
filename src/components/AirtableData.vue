<template>
  <b-container>
    <b-row>
      <b-col>
        <div>
          <b-table responsive class="small" striped hover :items="items" :fields="fields"></b-table>
        </div>
      </b-col>
    </b-row> 
  </b-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Index',
  data () {
    return {
      fields: [
        { key: "Invoicenumber", sortable: true, label: "Invoice.Number" },
        { key: "invoiceDate", sortable: true },
        { key: "clientName", sortable: true },
        { key: "revenueType", sortable: true },
        { key: "itemType", sortable: true },
        { key: "ebVnb", sortable: true, label: "EB / New Bus" },
        { key: "Itemcode", sortable: true, label: "Item Code" },
        { key: "accountCode", sortable: true },
        { key: "contractStartDate", sortable: true },
        { key: "contractEndDate", sortable: true },
        { key: "termDays", sortable: true },
        { key: "termMonths", sortable: true },
        { key: "contractValuePerMonth", sortable: true },
        { key: "currency", sortable: true },
        { key: "financialYear", sortable: true },
        { key: "itemTotal", sortable: true },
      ],
      records: [],
      items: []
    }
  },
  methods: {
    getData() {
      axios.get('https://api.airtable.com/v0/appes0AhRWhnBvazS/fullDataSet?api_key=API_KEY')
      .then(response => {
        this.records = response.data.records
        this.records.forEach(item => {
          this.items.push(item.fields)
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

</script>

<style scoped>
.small {
  font-size: 60%
}
</style>
