<template>
  <div class="logout">
    <h1>Logout</h1>
	<button class="btn btn-success" @click="doLogout()">logout</button>
  </div>
</template>


<script>
export default {
	name: 'logout',
	methods: {
		doLogout() {
			this.$store.commit('Logout')
			this.$router.push('/login')
		}
	}
}
</script>