<template>
  <div>
    <div class="Detial">
      <img :src="detailitem.img" alt="" width="100%">
      <p>{{detailitem.name}}</p>
    </div>
  </div>
</template>

<script>
	export default {
		name: "Detial",
    props: ['detailitem']
	}
</script>

<style scoped lang="less">
  .Detial{
    p{
      font-size: 3.2vw;
      color: #212121;
      margin-top: 1.6vw;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical
    }
  }
</style>