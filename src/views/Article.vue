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
import axios from 'axios'

export default {
	name: 'Article',
	data() {
		return {
			article: ''
		}
	},
	mounted() {
		axios.get(`/api/articles/${this.$route.params.slug}`).then(response => {
			this.article = response.data
		}).catch(error => {
			if(error.response.status) {
				this.$router.push({
					name:'pageNotFound',
					params: { pathMatch: this.$route.path.substring(1).split('/') }
				})
			}
		})
	},
	methods: {
		doRemove() {
			
			this.$router.push(`/`)
		}
	}
}
</script>
