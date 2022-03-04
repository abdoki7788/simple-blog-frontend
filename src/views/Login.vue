<template>
  <div class="login">
	<form class="col-lg-6 mx-auto" @submit.prevent="doLogin()">
		<h1>Login</h1>
		<div class="mb-3">
			<label for="usernameField" class="form-label">Username</label>
			<input type="text" class="form-control" id="usernameField" aria-describedby="emailHelp" v-model="username">
			<!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
		</div>
		<div class="mb-3">
			<label for="passwordFiels" class="form-label">Password</label>
			<input type="password" class="form-control" id="passwordFiels" v-model="password">
		</div>
		<button class="btn btn-success" type="submit">login</button>
	</form>
  </div>
</template>


<script>
export default {
	name: 'login',
	data() {
		return {
			username: '',
			password: ''
		}
	},
	methods: {
		doLogin() {
			// this.$store.commit('Login', 'abc123')
			// this.$router.push('/')
			console.log(this.username)
			console.log(this.password)
		}
	}
}
</script>