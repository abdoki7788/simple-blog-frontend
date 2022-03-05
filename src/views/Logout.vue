<template>
  <div class="logout">
    <h1>Logout</h1>
	<button class="btn btn-success" @click="doLogout()">logout</button>
  </div>
</template>


<script>
import axios from 'axios'
export default {
	name: 'logout',
	methods: {
		doLogout() {
			axios
				.post(
					'/api/auth/token/logout/'
				)
				.then(response => {
					this.$store.commit('Logout')
					this.$router.push('/')
				})
		}
	}
}
</script>