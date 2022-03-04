<template>
	<div class="AddArticle">
		<form @submit.prevent="doAdd()">
			<div class="mb-3">
				<label for="title" class="form-label">Title</label>
				<input v-model="title" type="text" class="form-control" id="title" placeholder="enter title ...">
			</div>
			<div class="mb-3">
				<label for="content" class="form-label">Content</label>
				<textarea v-model="content" class="form-control" id="content" placeholder="enter content here ..." rows="10"></textarea>
			</div>
			<button type="submit" class="btn btn-success">add article</button>
		</form>
	</div>
</template>

<script>
export default {
	name: 'addArticle',
	data() {
		return {
			articles: JSON.parse(localStorage.getItem('articles')),
			title: '',
			content: ''
		}
	}, methods: {
		doAdd() {
			let article = {
				"title": this.title,
				"slug": this.title.replaceAll(' ', '-'),
				"content": this.content
			}
			this.articles.push(article)
			localStorage.setItem('articles', JSON.stringify(this.articles))
			this.$router.push(`/article/${article.slug}`)
		}
	}
}
</script>