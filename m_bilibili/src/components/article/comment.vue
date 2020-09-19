<template>
  <div>123</div>
</template>

<script>
	export default {
		name: "comment",
    methods: {
			async commentData(){
				const res = await this.$http.get('/comment/' + this.$route.params.id)
				console.log(res);
			}
    },
    created() {
			this.commentData()
    }
	}
</script>

<style scoped>

</style>