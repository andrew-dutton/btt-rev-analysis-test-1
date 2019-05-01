<template>
  <div>
    <div class="textbox">
      <p class="alignleft">{{ today }}</p>
      <p class="alignright">{{ usFlag }}: $1.00   {{ auFlag }}: ${{ usdaud }}   {{ nzFlag }}: ${{ usdnzd }}   {{ gbFlag }}: £{{ usdgbp }}   {{ caFlag }}: ${{ usdcad }}</p>
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
      usdaud: "-",
      usdnzd: "-",
      usdgbp: "-",
      usdcad: "-",
      usFlag: 'USD',
      auFlag: "AUD",
      nzFlag: "NZD",
      gbFlag: "GBP",
      caFlag: "CAD"
      }
  },
  methods: {
    getFxRates() {
      axios.get('https://openexchangerates.org/api/latest.json?app_id=2312e9ebca594bc88ad456acefdd39e8')
        .then(response => {
          this.usdaud = parseFloat(response.data.rates.AUD).toFixed(2)
          this.usdnzd = parseFloat(response.data.rates.NZD).toFixed(2)
          this.usdgbp = parseFloat(response.data.rates.GBP).toFixed(2)
          this.usdcad = parseFloat(response.data.rates.CAD).toFixed(2)
          })      
    }  
  },
  created() {
    this.today = moment().format('Do MMMM YYYY, h:mm a');
    this.getFxRates()
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
