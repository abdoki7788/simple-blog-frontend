<template>
  <div class="login">
	<form class="col-lg-6 mx-auto" @submit.prevent="doLogin()">
		<h1>Login</h1>
		<div class="mb-3">
			<label for="usernameField" class="form-label">Username</label>
			<input type="text" class="form-control" :class="{'is-invalid': usernameError, 'is-valid': usernameError===false }" id="usernameField" aria-describedby="emailHelp" v-model="username">
			<div v-if="usernameError" id="emailHelp" class="invalid-feedback">{{ usernameErrorMessage }}</div>
		</div>
		<div class="mb-3">
			<label for="passwordFiels" class="form-label">Password</label>
			<input type="password" class="form-control" :class="{'is-invalid': passwordError, 'is-valid': passwordError===false }" id="passwordFiels" v-model="password">
			<div v-if="passwordError" id="emailHelp" class="invalid-feedback">{{ passwordErrorMessage }}</div>
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
			password: '',
			usernameError: null,
			usernameErrorMessage: '',
			passwordError: null,
			passwordErrorMessage: '',
		}
	},
	methods: {
		doLogin() {
			if(this.username.length < 5) {
				if (this.username.length === 0){
					this.usernameError = true
					this.usernameErrorMessage = 'username field cannot be empty'
				} else {
					this.usernameErrorMessage = 'The username field must be at least 5 characters long'
				}
			} else {
				this.usernameError = false
			}
			if(this.password.length < 6) {
				if (this.password.length === 0){
					this.passwordError = true
					this.passwordErrorMessage = 'password field cannot be empty'
				} else {
					this.passwordErrorMessage = 'The password field must be at least 6 characters long'
				}
			} else {
				this.passwordError = false
			}
			if(!this.passwordError && !this.usernameError){
				this.$store.commit('Login', this.username + ':' + this.password)
				this.$router.push('/')
			}
		}
	}
}
</script>