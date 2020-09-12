<template>
  <div class="userInfo">
    <NavBar :userInfo="model"></NavBar>
    <div class="banner"> </div>
    <userDetails :userInfo="model"></userDetails>
  </div>
</template>

<script>
  import NavBar from "../components/common/NavBar";
  import userDetails from "../components/userCommon/userDetails";
	export default {
    components: {
    	NavBar,
	    userDetails
    },
    data(){
    	return {
    		model: {

        }
      }
    },
    methods: {
      async userinfoData(){
	      const res = await this.$http.get('/user/' + localStorage.getItem('id'),)

        this.model = res.data[0]
      }
    },
    created() {
    	this.userinfoData()
    }
	}
</script>

<style scoped lang="less">
  .userInfo{
    .banner{
      width: 100vw;
      height: 24vw;
      overflow: hidden;
      background: url(~@/assets/img/bannerTop_new.png);
      background-size: cover;
      background-position: 50%;
    }
  }
</style>