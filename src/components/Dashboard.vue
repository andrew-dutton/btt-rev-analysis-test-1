<template>
  <div>
    <b-container id="dashboard">
      <b-row>
        <b-col id="dashboardBox" class="text-center">
          <Dashboard_1 />
        </b-col>
        <b-col id="dashboardBox" class="text-center">
          <Dashboard_2 />
        </b-col>
        <b-col id="dashboardBox" class="text-center">
          <Dashboard_3 />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Dashboard_1 from './Dashboard_1.vue'
import Dashboard_2 from './Dashboard_2.vue'
import Dashboard_3 from './Dashboard_3.vue'

export default {
  name: 'dashboard',
  props: {
    msg: {
      type: String
    }
  },
  data() {
    return {
      value: "not received"
    }
  },
  components: {
    Dashboard_1,
    Dashboard_2,
    Dashboard_3
  }
}

</script>

<style>

</style>

