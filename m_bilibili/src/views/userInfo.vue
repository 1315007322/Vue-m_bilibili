<template>
  <div class="userInfo">
    <NavBar></NavBar>
    <div class="banner"> </div>
    <userDetails></userDetails>
  </div>
</template>

<script>
  import NavBar from "../components/common/NavBar";
  import userDetails from "../components/userCommon/userDetails";
	export default {
    components: {
    	NavBar,
	    userDetails
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