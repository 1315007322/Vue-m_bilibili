<template>
  <div class="commentParent">
   <div v-for="(item,index) in commentList" :key="index">
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
       <div class="comment_text">{{item.comment_content}}</div>
       <commnetItem :commentChild="item.child"></commnetItem>
     </div>
   </div>
   </div>


</template>

<script>
  import commnetItem from "./commnetItem";

	export default {
		name: "comment",
    data(){
			return {
			  commentList:null
      }
    },
    components: {
	    commnetItem
    },
    methods: {
			async commentData(){
				const res = await this.$http.get('/comment/' + this.$route.params.id);
				if (res.data){
					this.$emit("lengthSelect",res.data.length)
				}
				this.commentList = this.changeCommentData(res.data)
			},
      changeCommentData(data){
				function foo(temp) {
            let arr1 = []
          for (let i = 0;i<data.length;i++){
          	if (data[i].parent_id == temp){
		          arr1.push(data[i]);
		          data[i].child = foo(data[i].comment_id)
            }

          }
					return arr1
				}
				return foo(null)

      }
    },
    created() {
			this.commentData()
    }
	}
</script>

<style scoped lang="less">
  .commentParent{
   & > div{
     display: flex;
     padding: 4vw 2vw;
   }
    .com_pic{
      margin-right: 2vw;
      img{
        width: 35px;
        height: 35px;
        border-radius: 50%;
      }
    }
    .com_text{
      flex: 1;
      padding: 0 2vw;
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
</style>