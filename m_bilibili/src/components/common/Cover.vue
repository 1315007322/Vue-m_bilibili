<template>
  <div>
    <div class="Detial"  @click="pathPush">
      <div class="card">
        <img :src="detailitem.img" alt="" width="100%">
        <div class="icon">
            <span>
              <i class="iconfont icon-tuya-"></i>
              80.9万
            </span>
          <span>
            <i class="iconfont icon-danmushu"></i>
            1.2万
          </span>
        </div>
      </div>

      <p>{{detailitem.name}}</p>
    </div>
  </div>
</template>

<script>
	export default {
		name: "Detial",
    props: ['detailitem'],
    methods: {
			pathPush(){
				if(this.$route.path != `/article/${this.detailitem.id}`){
					this.$router.push(`/article/${this.detailitem.id}`)
        }

			}
    }
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
    .card{
      position: relative;
      font-size: 0;
      .icon{
        font-size: 3.2vw;
        color: #fff;
        position: absolute;
        bottom:0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 1.33333vw 1.6vw;
        background: -webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.85)),to(transparent));
        span:nth-child(1){
          padding-right: 5px;
        }
      }


    }
  }
</style>