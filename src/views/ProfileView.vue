<template>
  <div class="profile">
    <h1>This is a profile page</h1>
    <ul>
      <li v-for="(value, key) in userdata">
        {{ key }} : {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'profile',
  data() {
    return {
      userdata: {}
    }
  },
  mounted() {
    axios
      .get('/api/auth/users/me')
      .then(
        response => this.userdata = response.data
      )
      .catch(error => {
          console.log(error)
          this.$store.commit('Logout')
          this.$router.push('/login')
        })
  }
}
</script>