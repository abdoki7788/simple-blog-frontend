<template>
  <div class="Register">
	<form class="col-lg-6 mx-auto" @submit.prevent="doRegister()">
		<h1>Register</h1>
		<div v-if="nonFieldError" id="nonfielderror" class="invalid-feedback d-block">{{ nonFieldError }}</div>
		<div class="mb-3">
			<label for="usernameField" class="form-label">Username</label>
			<input type="text" class="form-control" :class="{'is-invalid': usernameError, 'is-valid': usernameError===false }" id="usernameField" aria-describedby="emailHelp" v-model="username">
			<div v-if="usernameError" id="emailHelp" class="invalid-feedback">{{ usernameErrorMessage }}</div>
		</div>
		<div class="mb-3">
			<label for="password1Field" class="form-label">Password</label>
			<input type="password" class="form-control" :class="{'is-invalid': password1Error, 'is-valid': password1Error===false }" id="password1Field" v-model="password1">
			<div v-if="password1Error" id="emailHelp" class="invalid-feedback">{{ password1ErrorMessage }}</div>
		</div>
		<div class="mb-3">
			<label for="password2Field" class="form-label">Password confirm</label>
			<input type="password" class="form-control" :class="{'is-invalid': password2Error, 'is-valid': password2Error===false }" id="password2Field" v-model="password2">
			<div v-if="password2Error" id="emailHelp" class="invalid-feedback">{{ password2ErrorMessage }}</div>
		</div>
		<button class="btn btn-success" type="submit">register</button>
	</form>
  </div>
</template>


<script>
import axios from 'axios'
export default {
	name: 'register',
	data() {
		return {
			username: '',
			password1: '',
			password2: '',
			usernameError: null,
			usernameErrorMessage: '',
			password1Error: null,
			password1ErrorMessage: '',
			password2Error: null,
			password2ErrorMessage: '',
			nonFieldError: ''
		}
	},
	methods: {
		doRegister() {
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
			if(this.password1.length < 6) {
				this.password1Error = true
				if (this.password1.length === 0){
					this.password1ErrorMessage = 'password field cannot be empty'
				} else {
					this.password1ErrorMessage = 'The password field must be at least 6 characters long'
				}
			} else {
				this.password1Error = false
			}
			if(this.password2 != this.password1) {
				this.password2Error = true
				this.password2ErrorMessage = 'password confirm must be equal with password'
			} else {
				this.password2Error = false
				this.password2ErrorMessage = ''
			}
			if(!this.password1Error && !this.password2Error && !this.usernameError){
				axios
					.post(
						'/api/auth/users/',
						{
							"password": this.password1,
							"username": this.username
						}
					)
					.then(response => {
						this.$router.push('/login')
					})
					.catch(error => {
						if(error.response.data.non_field_errors) {
							this.nonFieldError = error.response.data.non_field_errors.join(' , ')
							this.password1Error = true
							this.usernameError = true
						}
						if(error.response.data.username) {
							this.usernameErrorMessage = error.response.data.username.join(' , ')
							this.usernameError = true
						}
						if(error.response.data.password) {
							this.password1ErrorMessage = error.response.data.password.join(' , ')
							this.password1Error = true
						}
					})
			}
		}
	}
}
</script>