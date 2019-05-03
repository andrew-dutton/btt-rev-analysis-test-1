<template>
  <div>
    <div class="textbox">
      <p class="alignleft">{{ today }}</p>
      <p class="alignright">
        <span id="usd" @click="select($event)" class="flag-icon flag-icon-us"></span>  ${{ usd }}  
        <span id="aud" @click="select($event)" class="flag-icon flag-icon-au"></span>  ${{ aud }} 
        <span id="cad" @click="select($event)" class="flag-icon flag-icon-ca"></span>  ${{ cad }}   
        <span id="nzd" @click="select($event)" class="flag-icon flag-icon-nz"></span>  ${{ nzd }}    
        <span id="gbp" @click="select($event)" class="flag-icon flag-icon-gb"></span>  £{{ gbp }}
      </p>
    </div>
    <div style="clear: both;"></div>
  </div>
</template>

<script>
import moment from 'moment';
import axios from 'axios';

export default {
  name: 'dateAndRates',
  modules: moment,
  data() {
    return {
      today: "",
      usd: "-",
      aud: "-",
      nzd: "-",
      gbp: "-",
      cad: "-",
      usFlag: 'USD',
      auFlag: "AUD",
      nzFlag: "NZD",
      gbFlag: "GBP",
      caFlag: "CAD",
      base: 0
      }
  },
  methods: {
    getFxRates() {
      axios.get('https://openexchangerates.org/api/latest.json?app_id=API_KEY')
        .then(response => {
          this.usd = parseFloat(1).toFixed(2)
          this.aud = parseFloat(response.data.rates.AUD).toFixed(2)
          this.nzd = parseFloat(response.data.rates.NZD).toFixed(2)
          this.gbp = parseFloat(response.data.rates.GBP).toFixed(2)
          this.cad = parseFloat(response.data.rates.CAD).toFixed(2)
        })      
    },
    select(event) {
      this.base = this[event.target.id]
      this.usd = parseFloat(this.usd / this.base).toFixed(2)
      this.aud = parseFloat(this.aud / this.base).toFixed(2)
      this.nzd = parseFloat(this.nzd / this.base).toFixed(2)
      this.gbp = parseFloat(this.gbp / this.base).toFixed(2)
      this.cad = parseFloat(this.cad / this.base).toFixed(2)
    },
    getFxUsage() {
      axios.get('https://openexchangerates.org/api/usage.json?app_id=API_KEY')
        .then(response => {
          console.log(response.data.data.usage.requests_remaining)
          console.log(response.data.data.usage.days_remaining)
        })      
    }
  },
  created() {
    this.today = moment().format('Do MMMM YYYY, h:mm a');
    this.getFxRates()
    this.getFxUsage()
  }
}
</script>

<style scoped>

.textbox {
  padding: 10px
}
.alignleft {
	float: left;
}
.alignright {
	float: right;
}

</style>
