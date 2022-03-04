<template>
	<div class="AddArticle">
		<form @submit.prevent="doEdit()">
			<div class="mb-3">
				<label for="title" class="form-label">Title</label>
				<input v-model="title" type="text" class="form-control" id="title" placeholder="enter title ...">
			</div>
			<div class="mb-3">
				<label for="content" class="form-label">Content</label>
				<textarea v-model="content" class="form-control" id="content" placeholder="enter content here ..." rows="10"></textarea>
			</div>
			<button type="submit" class="btn btn-success">edit article</button>
		</form>
	</div>
</template>

<script>
export default {
	name: 'addArticle',
	data() {
		let articles = JSON.parse(localStorage.getItem('articles'))
		let article = articles.find(article => article.slug == this.$route.params.slug)
		return {
			article: article,
			articles: articles,
			title: article.title,
			content: article.content
		}
	}, methods: {
		doEdit() {
			let articleIndex = this.articles.findIndex(article => article.slug == this.$route.params.slug)
			this.articles[articleIndex].title = this.title
			this.articles[articleIndex].slug = this.title.replaceAll(' ', '-')
			this.articles[articleIndex].content = this.content
			localStorage.setItem('articles', JSON.stringify(this.articles))
			this.$router.push(`/article/${this.articles[articleIndex].slug}`)
		}
	}
}
</script>