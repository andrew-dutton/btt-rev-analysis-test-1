import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import '../src/assets/css/custom.scss'

import 'moment/moment.js'
import 'pikaday/pikaday.js'
import 'pikaday/css/pikaday.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// Sign In Page - 0Auth / Google sign in
// simple sleek page with BTT icon

// Need to set up routing:
// - Report Display Page
// - Settings Page
// - Dashboards Setup Page
// - User settings Page

// Data in or just below Navbar
//   - current exchange rates
//   - databse curret as at date of most recent invoice 

// Reports Tab
//   - common reports, ready to go
//   - Custom report builder
//   - Ability to save cutom reports to (to profile)
//   - Compact view (fewer columns)
//   - Wide view (all columns)

// Dashbords Tab
//   - Default Dashboards
//      - Current financial year data
//   - Chose from selection of Dashboards

// Settings tab in Data menu 
//   - choose which columns to show
//   - number of results per page
//   - Compact view (fewer columns)
//   - Wide view (all columns)