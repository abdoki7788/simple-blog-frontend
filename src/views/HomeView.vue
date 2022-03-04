<template>
	<div class="home" align="center">
		<article v-for="(article, index) in articles" >
			<h3><router-link :to="'/article/'+article.slug">{{ article.title }}</router-link></h3>
			<p>{{ description(index) }}</p>
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
	},
	methods: {
		description(ind) {
			return this.articles[ind].content.length > 300 ? this.articles[ind].content.slice(0, 300) + ' ...' : this.articles[ind].content
		}
	}
}
</script>
