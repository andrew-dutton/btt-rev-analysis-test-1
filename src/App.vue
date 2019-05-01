<template>
  <div id="app">
    <Navbar />
    <DateAndRates />
    <Dashboard />   
    <Filters />
    <AirtableData />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import AirtableData from './components/AirtableData.vue'
import Dashboard from './components/Dashboard.vue'
import Filters from './components/Filters.vue'
import DateAndRates from './components/DateAndRates.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    DateAndRates,
    AirtableData,
    Dashboard,
    Filters
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Oswald');

html, body {
  font-family: 'Oswald', sans-serif;
}

#app {
    font-family: 'Hind', sans-serif;
}

</style>

