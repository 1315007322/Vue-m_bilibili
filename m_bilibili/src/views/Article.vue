<template>
  <div>
    <NavBar></NavBar>
    <div class="detail" v-if="model">
      <div class="video">
        <video :src="model.content" controls style="width: 100%"></video>
      </div>
      <p class="detail_title">
        <span>{{model.category.title}}</span>
        {{model.name}}
      </p>
      <p class="detail-date">
        <span>{{model.userinfo.name}}</span><span>1.2万观看</span><span>497弹幕</span><span>{{model.date}}</span>
      </p>
      <p class="gn">

        <span>
          <i class="iconfont icon-dianzan"></i> 点赞
        </span>
        <span>
          <i class="iconfont icon-shoucang"></i> 收藏
        </span>
        <span>
          <i class="iconfont icon-xiazaiwenjian"></i> 缓存
        </span>
        <span>
          <i class="iconfont icon-qingxidu"></i> 清晰度
        </span>
      </p>
      <div class="detailparent">
        <Cover v-for="(item,index) in commendList"  :key="index" :detailitem="item" class="detailitem"></Cover>
      </div>
      <commentTitle></commentTitle>
      <comment></comment>
    </div>

  </div>
</template>

<script>
  import Cover from "../components/common/Cover";
  import NavBar from "../components/common/NavBar";
  import commentTitle from "../components/article/commentTitle";
  import comment from "../components/article/comment";
	export default {
		name: "Article",
    data() {
			return {
				model:null,
        commendList: null,
        myUser: {

        }
      }
    },
    components: {
			NavBar,
	    Cover,
      commentTitle,
      comment
    },
    methods: {
			async articleitemData() {
				const  res = await this.$http.get('/article/' + this.$route.params.id)
        this.model = res.data[0]
      },
      async commendData(){
				const res = await this.$http.get('/commend')
	      this.commendList = res.data
      },
      async myUserinfo(){
				const res = await this.$http.get('/user/' + localStorage.getItem('id'))

	      console.log(res);
				this.myUser = res.data[0]
      }
    },
    watch:{
			$route(){
				this.articleitemData()
				this.commendData()
      }
    },
    created() {
			this.articleitemData()
      this.commendData()

    }
	}
</script>

<style scoped lang="less">

  .detail{
    background-color: #ffff;
    p{
      padding: 5px 15px;
    }
    .detail_title{
      font-size: 4.26667vw;
      font-weight: 400;
      display: inline-block;
      span{
        font-size: 3.2vw;
        display: inline-block;
        padding: 0 1.6vw;
        height: 5.33333vw;
        line-height: 5.33333vw;
        color: #fb7299;
        background: #f4f4f4;
        margin-right: 10px;
        border-radius: 3.2vw;
        vertical-align: middle;
        margin-top: 0.53333vw;
      }
    }
    .detail-date{
      span{
        display: inline-block;
        vertical-align: middle;
        margin-right: 2.13333vw;
        font-size: 3.2vw;
        color: #999;
      }
      span:nth-child(1){
        color: #212121;
        font-size: 3.2vw;
        margin-right: 4.8vw;
      }
    }
    .gn{
      position: relative;
      span{
        display: inline-block;
        vertical-align: middle;
        margin-right: 5.13333vw;
        font-size: 3.2vw;
        color: #999;

        i{
          color: #757575;
        }
      }
      span:nth-child(4){
        position: absolute;
        right: 0;
        i{
          vertical-align: middle;
        }
      }
    }
  }

  .detailparent{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .detailitem{
      width: 45%;
      margin: 1vw 0;
    }
  }
</style>