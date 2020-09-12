<template>
  <div>
    <div class="editbaner">
      <span>{{left}}</span>
      <span><slot name="right"></slot></span>
    </div>
  </div>
</template>

<script>
	export default {
		name: "editBaner",
    props: ['left' , 'right'],


	}
</script>

<style scoped lang="less">

  .editbaner{
    background-color: #fff;
    padding: 4.5vw 2vw;
    font-size: 4vw;
    border-bottom: 1px solid #eee;
    span:nth-child(1){
      padding-left: 3.2vw;
      text-align: left;
      color: #505050;
    }
    span:nth-child(2){
      float: right;
    }
    a{
      color: #aaa!important;
    }
    img{
      margin-top: -1vw;
      width: 10vw;
      height: 10vw;
      border-radius: 50%;
    }
  }

</style>