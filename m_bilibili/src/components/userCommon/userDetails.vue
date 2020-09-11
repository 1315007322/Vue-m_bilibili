<template>
  <div class="userDetail">
    <div class="user_pic">
      <img src="@/assets/img/info.jpg" alt="">
    </div>
    <div class="user_edit">
      <div class="user_edit_top">
        <div><p>8888</p> <p>粉丝</p></div> <span class="spit"></span>
        <div><p>1</p> <p>关注</p></div><span class="spit"></span>
        <div><p>2.4w</p> <p>获赞</p></div>
      </div>
      <p>编辑资料</p>
    </div>
  </div>
</template>

<script>
	export default {
		name: "userDetails"
	}
</script>

<style scoped lang="less">

  .userDetail{
    background-color: #fff;
    display: flex;
    padding-bottom: 3vw;
    .user_pic img{
      width: 22.4vw;
      height: 22.4vw;
      margin-top: -2vw;
      margin-left: 15px;
      border-radius: 50%;
    }
    .user_edit{
      flex: 1;
      padding-left: 10px;
      .user_edit_top{
        display: flex;
        width: 100%;
        height: 9vw;
        padding: 10px 0;
        .spit{
          position: relative;
          top: 8px;
          width: 1px;
          height: 4.26667vw;
          background: #e7e7e7;
        }
        div{
          display: inline-block;
          flex: 1;
          text-align: center;
          vertical-align: middle;
          p:nth-child(2){
            color: #aaa;
            font-size: 12px;
          }
        }
      }
      & > p{
        box-sizing: border-box;
        border: 1px solid #fb7299;
        color: #fb7299;
        margin: 0 20px;
        display: block;
        height: 8vw;
        line-height: 8vw;
        border-radius: 1.06667vw;
        font-size: 3.73333vw;
        outline: none;
        text-align: center;
      }
    }

  }

</style>