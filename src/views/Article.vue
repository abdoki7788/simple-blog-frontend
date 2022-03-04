<template>
	<div class="Article" align="center">
		<article>
			<h3>{{ article.title }}</h3>
			<p>{{ article.content }}</p>
			<div>
				<router-link :to="`/article/${article.slug}/edit`" class="btn btn-warning mr-4">Edit</router-link>
				<button class="btn btn-danger" @click="doRemove()">Delete</button>
			</div>
		</article>
	</div>
</template>

<script>

export default {
	name: 'Article',
	data() {
		let articles = JSON.parse(localStorage.getItem('articles'))
		let article = articles.find(article => article.slug == this.$route.params.slug)
		return {
			article: article,
			articles: articles,
			articleIndex: articles.findIndex(article => article.slug == this.$route.params.slug)
		}
	},
	methods: {
		doRemove() {
			this.articles.splice(this.articleIndex, 1)
			localStorage.setItem('articles', JSON.stringify(this.articles))
			this.$router.push(`/`)
		}
	}
}
</script>
