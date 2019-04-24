<template>
  <div>
    <b-jumbotron header="BTT Revenue Data Analysis" lead="Live Search">
      <input type="text"></input> <b-button variant="primary" href="#">Search</b-button>  
    </b-jumbotron>
  </div>

</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron {
    background-color: #a4bd82;
  }
  .btn-primary {
    color: black;
    background-color: #dcc30f
  }
</style>
