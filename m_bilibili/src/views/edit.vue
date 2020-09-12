<template>
  <div class="edit">
    <NavBar></NavBar>
    <div class="up_pic" style="margin-top: 3vw">
      <van-uploader  preview-size="100vw" :after-read="afterRead"/>
      <editBaner left="头像" >
        <img :src="model.user_img" alt="" slot="right" v-if="model.user_img">
        <img src="@/assets/img/info.jpg" alt="" slot="right" v-else >
      </editBaner>
    </div>
    <editBaner left="昵称" @bannerClick="show = true">
      <a href="javascript:;" slot="right">{{model.name}}</a>
    </editBaner>
    <editBaner left="账号"  slot="right">
      <a href="javascript:;" slot="right">{{model.username}}</a>
    </editBaner>
    <editBaner left="UID"  slot="right">
      <a href="javascript:;" slot="right">{{model.id}}</a>
    </editBaner>
    <editBaner left="性别"  slot="right" @bannerClick="genderShow = true">
      <a href="javascript:;" slot="right">{{model.gender == 1 ? '男' : '女'}}</a>
    </editBaner>
    <editBaner left="个性签名"  slot="right" @bannerClick="TextShow = true">
      <a href="javascript:;" slot="right">{{model.user_desc}}</a>
    </editBaner>
    <van-dialog v-model="show" title="昵称" show-cancel-button @confirm="confirm()">
      <van-field v-model="content"  autofocus
      />
    </van-dialog>
    <van-dialog v-model="TextShow" title="个性签名" show-cancel-button @confirm="confirm()">
      <van-field v-model="GxText"  autofocus
      />
    </van-dialog>
    <van-action-sheet v-model="genderShow" cancel-text="取消" :actions="actions" @select="onSelect" close-on-click-action

    />
    <p class="back exit">
      退出登录
    </p>
    <p class="back" @click="$router.push('/userInfo')">
      返回空间
    </p>

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
        show: false,
        content: '',
        GxText: '',
        TextShow: false,
        genderShow: false,
				actions: [{ name: '男' ,val: 1 },{ name: '女' ,val: 2 }],
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
        this.content = this.model.name
				this.GxText = this.model.user_desc

			},
			async afterRead(file) {
				// 此时可以自行将文件上传至服务器
				const fromdata = new FormData()
				fromdata.append('file',file.file)
				const res = await this.$http.post('upload',fromdata)
				this.model.user_img = res.data.url
				this.UserUpdate()
			},
		  async UserUpdate(){
				const res = await this.$http.post('/update/' + localStorage.getItem('id'),this.model)
			  console.log(res);
        this.$msg.fail('修改成功')
		  },
			confirm(){
        this.model.name = this.content
        this.model.user_desc = this.GxText
        this.UserUpdate()
			},
			onSelect(data){
				console.log(data);
				this.model.gender = data.val
        this.UserUpdate()
			}
    },
		created() {
			this.SelectUser()

		},


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
  .edit{
    .exit{
      margin-top: 5vw;
    }
    .back{
      display: block;
      padding: 2.66667vw;
      text-align: center;
      color: #505050;
      text-decoration: none;
      background: #fff;
      font-size: 3.73333vw;
      border-bottom: 1px solid #eee;
    }
  }

</style>