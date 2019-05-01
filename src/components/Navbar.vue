<template>
  <div id="navbar">
    <div>
      <b-navbar toggleable="sm" type="dark" variant="dark">
        <b-navbar-brand href="#">
          <img src="../assets/logo.webp"/>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">BTT Revenue Analysis</b-nav-item>
              <b-nav-item-dropdown left>  
                <template slot="button-content">Dashboard</template>
                <b-dropdown-item href="#">Dashbord Main Page</b-dropdown-item>
                <b-dropdown-item href="#">Dashboard Setup</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown left>
                <template slot="button-content">Reports</template>
                <b-dropdown-item href="#">Standard Reports</b-dropdown-item>
                <b-dropdown-item href="#">Custom Reports</b-dropdown-item>
                <b-dropdown-item href="#">Report Settings</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown left>
                <template slot="button-content">Data</template>
                <b-dropdown-item @click="getData">Display All Airtable Data</b-dropdown-item>
                <b-dropdown-item href="#">Airtable Display Settings</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content"><em>User</em></template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  },
  methods: {
    getData() {
      console.log('triggered')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
