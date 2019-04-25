<template>
  <div>
    <b-row>
      <b-col cols="1"></b-col>

       <b-col cols="10">
        <h1 id="dashboard">Dashboard...</h1>
      </b-col>

      <b-col cols="1"></b-col>
    </b-row>
  </div>
</template>

<script>
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
  }
}

</script>

<style>

</style>

