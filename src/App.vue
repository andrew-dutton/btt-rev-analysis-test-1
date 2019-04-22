<template>
  <div id="app">
    <Navbar />
    <AirtableData />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import AirtableData from './components/AirtableData.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    AirtableData
  }
}
</script>

<style>

</style>
