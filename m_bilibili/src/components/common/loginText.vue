<template>
  <div>
    <van-field
      :label="label"
      :type="type"
      :placeholder="placeholder"
      :rule="rule"
      v-model="content"
    />
  </div>
</template>

<script>
	export default {
		name: "LoginText",
    props: ['label','type','placeholder','rule'],
		data() {
			return {
				value: '',
        content: ''
			};
		},
    methods: {
			handLerulg (){
				const rue = new RegExp(this.rule)
        if (rue.test(this.content)){
	       this.$emit("inputChange",this.content)
        }
      }
    },
    watch: {
			content() {
				this.handLerulg()
      }
    }
	}
</script>

<style scoped>

</style>