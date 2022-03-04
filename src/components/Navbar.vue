<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<router-link class="navbar-brand" to="/">MY BLOG</router-link>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link to="/" class="navbar-link">home</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/profile" class="navbar-link" v-if="$store.state.isAuthenticated">profile</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/add" class="navbar-link" v-if="$store.state.isAuthenticated">add article</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/login" class="navbar-link" v-if="!$store.state.isAuthenticated">login</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/register" class="navbar-link" v-if="!$store.state.isAuthenticated">register</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/logout" class="navbar-link" v-if="$store.state.isAuthenticated">logout</router-link>
					</li>
				</ul>
				<form class="d-flex">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'Navbar',
}
</script>