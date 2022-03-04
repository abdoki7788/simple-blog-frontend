<template>
	<div class="home" align="center">
		<article v-for="article in articles" >
			<h3><a :href="'/article/'+article.slug">{{ article.title }}</a></h3>
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
