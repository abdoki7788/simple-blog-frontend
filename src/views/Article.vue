<template>
	<div class="Article" align="center">
		<article>
			<h3>{{ article.title }}</h3>
			<p>{{ article.content }}</p>
			<div>
				<router-link :to="`/article/${article.slug}/edit`" class="btn btn-warning mr-4">Edit</router-link>
				<router-link :to="`/article/${article.slug}/delete`" class="btn btn-danger">Delete</router-link>
			</div>
		</article>
	</div>
</template>

<script>

export default {
	name: 'Article',
	data() {
		return {
			article : JSON.parse(localStorage.getItem('articles')).find(article => article.slug == this.$route.params.slug)
		}
	}
}
</script>
