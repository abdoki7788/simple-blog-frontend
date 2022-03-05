<template>
	<div class="home">
		<article v-if="articles" v-for="(article, index) in articles" class="my-4">
			<h3 class="d-inline"><router-link class="text-info text-decoration-none" :to="'/article/'+article.slug">{{ article.title }}</router-link></h3>
			<span class="badge bg-success padding-2 mx-2">{{ article.get_date }}</span>
			<p>{{ description(index) }}</p>
			<hr>
		</article>
		<div v-if="!articles.length" class="alert alert-danger">No articles yet</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'HomeView',
	data() {
		return {
			articles: "",
		}
	},
	methods: {
		description(ind) {
			return this.articles[ind].content.length > 300 ? this.articles[ind].content.slice(0, 300) + ' ...' : this.articles[ind].content
		}
	},
	mounted() {
		axios.get('/api/articles/').then(response => {
			this.articles = response.data

		}).catch(error => {
			this.articles = true
		})
	}
}
</script>
