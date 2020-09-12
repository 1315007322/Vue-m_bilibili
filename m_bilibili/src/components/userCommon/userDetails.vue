<template>
  <div class="userDetail">
    <div>
      <div class="user_pic">
        <img src="@/assets/img/info.jpg" alt="">
      </div>
      <div class="user_edit">
        <div class="user_edit_top">
          <div><p>8888</p> <p>粉丝</p></div> <span class="spit"></span>
          <div><p>1</p> <p>关注</p></div><span class="spit"></span>
          <div><p>2.4w</p> <p>获赞</p></div>
        </div>
        <p @click="$router.push('/edit')">编辑资料</p>
      </div>
    </div>

    <div>
      <span class="name">精神小伙欢乐多</span>
      <p>该用户很懒，什么也没写- - </p>
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
    padding-bottom: 3vw;
    & > div:nth-child(1){
      display: flex;
      margin-bottom: 20px;
    }
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
    & > div:nth-child(2){
      padding: 0 15px;
      p{
        margin-top: 2.13333vw;
        font-size: 3.46667vw;
        color: #999;
        line-height: 4.53333vw;
        width: 83.46667vw;
        height: 4.53333vw;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .name{
        font-size: 4.8vw;
        color: #212121;
        max-width: 62.66667vw;
        vertical-align: middle;
        line-height: 7vw;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: inline-block;
      }
    }
  }

</style>