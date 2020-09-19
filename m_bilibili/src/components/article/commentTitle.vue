<template>
  <div class="comment">
    <p class="comment_title">
      <span>评论</span> <span>(4028)</span>
    </p>
    <div class="comment_ipt">
      <img  :src="myUser.user_img" alt="" v-if="myUser">
      <img  src="@/assets/img/info.jpg" alt="" v-else>
      <input type="text" placeholder="说点什么">
      <button>发表</button>
    </div>
  </div>
</template>

<script>
	export default {
		name: "comment",
    data(){
			return {
				myUser: null
      }
    },
    methods: {
	    async myUserinfo(){
		    const res = await this.$http.get('/user/' + localStorage.getItem('id'))
		    this.myUser = res.data[0]
	    },
	    commentPublish(){
	    	if(this.myUser && !localStorage.getItem('token') && !localStorage.getItem('id')){
	    		this.$msg.fail('请先登录')
          return
        }
      }
    },
		created() {
      if(localStorage.getItem('token')){
      	this.myUserinfo()
      }
		}
	}
</script>

<style scoped lang="less">
  .comment{
    margin-top: 5vw;
    padding: 0 3vw;
    .comment_title{
      padding: 2vw 0;
      span:nth-child(2){
        color: #aaa;
        font-size: 2vw;
      }
    }
    .comment_ipt{
      img{
        width: 8vw;
        height: 8vw;
        margin-right: 2vw;
        vertical-align: middle;
        border-radius: 50%;
      }
      input{
        line-height: 7vw;
        background-color: #efefef;
        border: none;
        border-radius: 8vw;
        font-size: 2vw;
        padding: 0 4vw;
      }
      button{
        background-color: #fb7299;
        color: #fff;
        border-radius: 6vw;
        height: 6vw;
        font-size: 2vw;
        padding: 0 3vw;
        border: none;
      }
    }
  }
</style>