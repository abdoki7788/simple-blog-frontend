<template>
  <div class="login">
	<form class="col-lg-6 mx-auto" @submit.prevent="doLogin()">
		<h1>Login</h1>
		<div v-if="nonFieldError" id="nonfielderror" class="invalid-feedback d-block">{{ nonFieldError }}</div>
		<div class="mb-3">
			<label for="usernameField" class="form-label">Username</label>
			<input type="text" class="form-control" :class="{'is-invalid': usernameError, 'is-valid': usernameError===false }" id="usernameField" aria-describedby="emailHelp" v-model="username">
			<div v-if="usernameError" id="usernameerror" class="invalid-feedback">{{ usernameErrorMessage }}</div>
		</div>
		<div class="mb-3">
			<label for="passwordField" class="form-label">Password</label>
			<input type="password" class="form-control" :class="{'is-invalid': passwordError, 'is-valid': passwordError===false }" id="passwordField" v-model="password">
			<div v-if="passwordError" id="passworderror" class="invalid-feedback">{{ passwordErrorMessage }}</div>
		</div>
		<button class="btn btn-success" type="submit">login</button>
	</form>
  </div>
</template>


<script>
import axios from 'axios'
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
			nonFieldError: ''
		}
	},
	methods: {
		doLogin() {
			if(this.username.length <= 5) {
				this.usernameError = true
				if (this.username.length === 0){
					this.usernameErrorMessage = 'username field cannot be empty'
				} else {
					this.usernameErrorMessage = 'The username field must be at least 5 characters long'
				}
			} else {
				this.usernameError = false
			}
			if(this.password.length < 8) {
				this.passwordError = true
				if (this.password.length === 0){
					this.passwordErrorMessage = 'password field cannot be empty'
				} else {
					this.passwordErrorMessage = 'The password field must be at least 8 characters long'
				}
			} else {
				this.passwordError = false
			}
			if(!this.passwordError && !this.usernameError){
				axios
					.post(
						'/api/auth/token/login/',
						{
							"password": this.password,
							"username": this.username
						}
					)
					.then(response => {
						console.log(response.data.auth_token)
						this.$store.commit('Login', response.data.auth_token)
						this.$router.push('/')
					})
					.catch(error => {
						this.nonFieldError = error.response.data.non_field_errors.join(' , ')
						this.usernameError = true
						this.passwordError = true
					})
			}
		}
	}
}
</script>