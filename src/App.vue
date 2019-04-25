<template>
  <div id="app">
    <Navbar />
    <Dashboard />
    <AirtableData />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import AirtableData from './components/AirtableData.vue'
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    AirtableData,
    Dashboard
  }
}
</script>
