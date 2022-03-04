<template>
	<div class="home" align="center">
		<article>
			<h3>{{ article.title }}</h3>
			<p>{{ article.content }}</p>
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
