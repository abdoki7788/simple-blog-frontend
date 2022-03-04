<template>
	<div class="home" align="center">
		<article v-for="article in articles" >
			<h3><router-link :to="'/article/'+article.slug">{{ article.title }}</router-link></h3>
			<p>{{ article.content }}</p>
		</article>
	</div>
</template>

<script>

export default {
	name: 'HomeView',
	data() {
		return {
			articles : JSON.parse(localStorage.getItem('articles'))
		}
	}
}
</script>
