<template>
  <div id="app">
    <Navbar />
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

export default {
  name: 'app',
  components: {
    Navbar,
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

