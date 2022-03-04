<template>
  <div class="login">
    <h1>Login</h1>
	<button class="btn btn-success" @click="doLogin()">login</button>
  </div>
</template>


<script>
export default {
	name: 'login',
	methods: {
		doLogin() {
			this.$store.commit('Login', 'abc123')
			this.$router.push('/')
		}
	}
}
</script>