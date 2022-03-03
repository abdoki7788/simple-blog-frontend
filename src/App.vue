<template>
  <Navbar/>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  export default {
    components : {
      Navbar
    },
    watch: {
      $route() {
        this.$store.commit("onStart")
      }
    },
    mounted() {
      this.$store.commit("onStart")
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar-link {
  color: #2c3e50;
  text-decoration: none;
  margin: 0 0.5rem;
}

.navbar-link:hover {
  color: inherit;
  opacity: 0.7;
}

.router-link-exact-active {
  color: #42b983;
}
</style>
