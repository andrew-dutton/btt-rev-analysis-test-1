<template>
  <div>
    <b-row>
      <b-col cols="1"></b-col>

       <b-col cols="10">
         <b-jumbotron header="BTT Revenue Data Analysis">
        </b-jumbotron>
      </b-col>

      <b-col cols="1"></b-col>
    </b-row>
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
    background-color: #0072ff;
  }
</style>
