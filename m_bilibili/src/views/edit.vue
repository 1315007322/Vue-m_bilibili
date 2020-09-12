<template>
  <div>
    <NavBar></NavBar>
    <div class="up_pic" style="margin-top: 3vw">
      <van-uploader  preview-size="100vw" :after-read="afterRead"/>
      <editBaner left="头像" >
        <img :src="model.user_img" alt="" slot="right" v-if="model.user_img">
        <img src="@/assets/img/info.jpg" alt="" slot="right" v-else>
      </editBaner>
    </div>

    <editBaner left="昵称" >
      <a href="javascript:;" slot="right">{{model.name}}</a>
    </editBaner>
    <editBaner left="账号"  slot="right">
      <a href="javascript:;" slot="right">{{model.username}}</a>
    </editBaner>
    <editBaner left="UID"  slot="right">
      <a href="javascript:;" slot="right">{{model.id}}</a>
    </editBaner>
    <editBaner left="个性"  slot="right">
      <a href="javascript:;" slot="right"></a>
    </editBaner>
  </div>
</template>

<script>
  import NavBar from "../components/common/NavBar";
  import editBaner from "../components/common/editBaner";
	export default {
		name: "edit",
		data(){
			return {
				model: {},
			}
		},
    components: {
			NavBar,
      editBaner
    },
		methods: {
			async SelectUser(){
				const res = await this.$http.get('/user/' + localStorage.getItem('id'),)

				this.model = res.data[0]
			},
			async afterRead(file) {
				// 此时可以自行将文件上传至服务器
				console.log(file);
				const fromdata = new FormData()
				fromdata.append('file',file.file)
				const res = await this.$http.post('upload',fromdata)
				console.log(res);
				this.model.user_img = res.data.url

			},
		},
		created() {
			this.SelectUser()
		}
	}
</script>

<style scoped lang="less">
  .up_pic{
    position: relative;
    overflow: hidden;
    .van-uploader{
      position: absolute;
      top: 0;
      width: 100%;
      opacity: 0;
    }
  }

</style>