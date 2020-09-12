<template>
  <div class="navBar">
    <div class="logo">
      <img src="@/assets/img/logo.png" alt="">
    </div>
    <div class="search">
      <div>
        <van-icon name="search" size="17" class="s-icon" color="#aaa" />
        <p>请输入内容</p>
      </div>
    </div>
    <div>
      <img :src="img_url" alt="" @click="$router.push('/edit')">
      <p>下载APP</p>
    </div>
  </div>
</template>

<script>
	export default {
		name: "NavBar",
    data(){
			return {
				img_url: ''
      }
    },
		async mounted() {

		    const res = await this.$http.get('/user/' + localStorage.getItem('id'),)

        this.img_url = res.data[0].user_img
		}
	}
</script>
<style scoped lang="less">

    .navBar{
      height: 12vw;
      background-color: #fff;
      display: flex;
      .logo{
        display: flex;
        width: 90px;
        justify-content: center;
        align-items: center;
        img{
          width: 90%;
          height: 80%;
        }
      }
      div:nth-child(2){
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        div{
          width: 95%;
          padding: 5px 0;
          line-height: 24px;
          border-radius: 10px;
          height: 14px;
          display: flex;
          align-items: center;
          background-color: #f4f4f4;
          p{
            color: #aaa;
            width: 80%;
            overflow: hidden;
            font-size: 10px;
            min-width: 100px;
          }
        }
        .s-icon{
          margin: 0 5px;
        }
      }
      div:nth-child(3){
        width: 130px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          border-radius: 50%;
          width: 24px;
          height: 24px;
        }
        p{
          font-size: 13px;
          color: #fff;
          margin: 0 8px;
          line-height: 26px;
          padding: 0 10px;
          border-radius: 5px;
          background-color: #fb7299;
        }
      }
    }


  

</style>