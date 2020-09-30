<template>
  <div>
    <div class="commentItems">
      <div class="commentItem" v-for="(item,index) in commentChild" :key="index">
        <div class="box">
          <div class="com_pic">
            <img v-if="item.userinfo" :src="item.userinfo.user_img" alt="" >
            <img v-else src="@/assets/img/info.jpg" alt="">
          </div>
          <div class="com_text">
            <p>
              <span v-if="item.userinfo">{{item.userinfo.name}}</span>
              <span v-else>此用户很懒</span>
              <span>{{item.comment_date}}</span>
            </p>
            <div class="comment_text" v-if="!temp">{{item.comment_content}}</div>
            <div class="comment_text" v-else>回复：<span style="color: red">{{item.parent_user_info.name}}</span>:{{item.comment_content}}</div>
            <commnetItem :commentChild="item.child" style="padding-left: 0vw" :temp="true"></commnetItem>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
	export default {
		name: "commnetItem",
    props: ['commentChild','temp']
	}
</script>

<style scoped lang="less">
  .commentItems{

  }
  .commentItem{

    .box{

      & > div:nth-child(1){
        margin-right: 2vw;
        width: 35px;
        float: left;
        img{
          width: 35px;
          height: 35px;
          border-radius: 50%;
        }
      }
      & > div:nth-child(2){
        flex: 1;
        padding: 0 ;
        & > p:nth-child(1){
          display: flex;
          font-size: 13px;
          color: #555;
          justify-content: space-between;
        }
        .comment_text{
          font-size: 14px;
          padding: 2vw 0;
          margin-bottom: 3vw;
        }
        .comment_second{

        }
      }
    }

  }
</style>