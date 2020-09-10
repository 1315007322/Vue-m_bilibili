<template>
  <div>
    <div class="LoginTop">
      <div>
        <slot name="left"></slot>
      </div>
      <div>{{middleTop}}</div>
      <div>
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "loginTop",
    props: ['middleTop']
	}
</script>

<style scoped lang="less">

  .LoginTop{
    display: flex;
    height: 45px;
    line-height: 45px;
    background-color: #fff;
    & > div{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 4.4444vw;
    }
  }

</style>