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
      audClickCount: 0,
      usdClickCount: 0,
      cadClickCount: 0,
      nzdClickCount: 0,
      gbpClickCount: 0,
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
      if (event.target.id === "aud" && this.audClickCount < 1) {
        this.usd = parseFloat(this.usd / this.aud).toFixed(2)
        this.cad = parseFloat(this.cad / this.aud).toFixed(2)
        this.nzd = parseFloat(this.nzd / this.aud).toFixed(2)
        this.gbp = parseFloat(this.gbp / this.aud).toFixed(2)
        this.aud = parseFloat(this.aud / this.aud).toFixed(2)
        this.audClickCount ++
        this.usdClickCount = 0
        this.cadClickCount = 0
        this.nzdClickCount = 0
        this.gbpClickCount = 0
      } else if (event.target.id === 'cad' && this.cadClickCount < 1) {
        this.usd = parseFloat(this.usd / this.cad).toFixed(2)
        this.nzd = parseFloat(this.nzd / this.cad).toFixed(2)
        this.gbp = parseFloat(this.gbp / this.cad).toFixed(2)
        this.aud = parseFloat(this.aud / this.cad).toFixed(2)
        this.cad = parseFloat(this.cad / this.cad).toFixed(2)
        this.audClickCount = 0
        this.usdClickCount = 0
        this.cadClickCount++
        this.nzdClickCount = 0
        this.gbpClickCount = 0
      } else if (event.target.id === 'nzd' && this.nzdClickCount < 1) {
        this.usd = parseFloat(this.usd / this.nzd).toFixed(2)
        this.gbp = parseFloat(this.gbp / this.nzd).toFixed(2)
        this.aud = parseFloat(this.aud / this.nzd).toFixed(2)
        this.cad = parseFloat(this.cad / this.nzd).toFixed(2)
        this.nzd = parseFloat(this.nzd / this.nzd).toFixed(2)
        this.audClickCount = 0
        this.usdClickCount = 0
        this.cadClickCount = 0
        this.nzdClickCount++
        this.gbpClickCount = 0
      } else if (event.target.id === 'gbp' && this.gbpClickCount < 1) {
        this.usd = parseFloat(this.usd / this.gbp).toFixed(2)
        this.aud = parseFloat(this.aud / this.gbp).toFixed(2)
        this.cad = parseFloat(this.cad / this.gbp).toFixed(2)
        this.nzd = parseFloat(this.nzd / this.gbp).toFixed(2)
        this.gbp = parseFloat(this.gbp / this.gbp).toFixed(2)
        this.audClickCount = 0
        this.usdClickCount = 0
        this.cadClickCount = 0
        this.nzdClickCount = 0
        this.gbpClickCount++
      } else if (event.target.id === 'usd' && this.usdClickCount < 1) {
        this.aud = parseFloat(this.aud / this.usd).toFixed(2)
        this.cad = parseFloat(this.cad / this.usd).toFixed(2)
        this.nzd = parseFloat(this.nzd / this.usd).toFixed(2)
        this.gbp = parseFloat(this.gbp / this.usd).toFixed(2)
        this.usd = parseFloat(this.usd / this.usd).toFixed(2)
        this.audClickCount = 0
        this.usdClickCount = 0
        this.cadClickCount = 0
        this.nzdClickCount = 0
        this.gbpClickCount++
      }
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
