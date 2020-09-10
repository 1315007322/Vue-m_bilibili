<template>
  <div>
    <div class="btnParent">
      <div class="loginBtn" @click="registerClick">{{btnText}}</div>
    </div>

  </div>
</template>

<script>
	export default {
		name: "LoginBtn",
    props: ['btnText'],
    methods: {
			registerClick(){
				this.$emit('registerSubmit')
      }
    }
	}
</script>

<style scoped lang="less">

  .btnParent{
    padding: 15px 10px;
  }
  .loginBtn{
    height: 12.5vw;
    border-radius: 6.25vw;
    color: #fff;
    font-size: 4.44vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ff9db5;
  }

</style>