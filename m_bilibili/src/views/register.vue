<template>
  <div>
   <LoginTop middle-top="注册bilibili">
     <div slot="right" @click="$router.push('/Login')" style="font-size: 12px">
       切换到登录
     </div>
   </LoginTop>
    <loginText label="姓名" style="margin: 4.16vw 0;"
               placeholder="请输入姓名"
               rule="^.{6,16}$"
               @inputChange="res => model.name = res"></loginText>

    <loginText label="账号"
               placeholder="请输入账号"
               rule="^.{6,16}$"
               @inputChange="res => model.username = res"></loginText>

    <loginText label="密码" type="password"
               placeholder="请输入密码"
               rule="^.{6,16}$"
               @inputChange="res => model.password = res"></loginText>
    <LoginBtn btn-text="注册" @registerSubmit="registerSubmit"></LoginBtn>
  </div>
</template>

<script>
  import LoginTop from "../components/common/LoginTop";
  import LoginText from "../components/common/loginText";
  import LoginBtn from "../components/common/LoginBtn";
	export default {
		data() {
			return {
				model: {
					name: '',
					username: '',
					password: ''
        }

      }
    },
    components: {
    	LoginTop,
      LoginText,
      LoginBtn
    },
    methods: {
			 async registerSubmit(){
			 	let rulg = /^.{6,16}$/
				if(rulg.test(this.model.name) && rulg.test(this.model.username) && rulg.test(this.model.password)) {
					const res = await this.$http.post('/register', this.model)
          this.$msg.success(res.data.msg)
        /*-------------------------------------------*/
				}else {
					this.$msg.fail('格式不正确')
        }

    }
	}

	}
</script>

<style scoped>

</style>