<template>
  <div class="home">
    <NavBar></NavBar>

    <van-tabs v-model="active" swipeable sticky>
      <van-tab v-for="(item,index) in category" :title="item.title" :key="index">
        <div class="detailparent">
          <Detail class="detailitem" :detailitem="categoryitem" v-for="(categoryitem,categoryindex) in item.list" :key="categoryindex">{{}}</Detail>

        </div>
       </van-tab>
    </van-tabs>

  </div>
</template>

<script>
  import Detail from "../components/common/Detial"
  import NavBar from "../components/common/NavBar";
	export default {
		name: "Home",
    components: {
			NavBar,
	    Detail
    },
    data() {
			return {
        category: {},
        active: 0
      }
    },
    methods: {
			async selectCategory() {
				const res = await this.$http.get('/category')
        this.changeCategory(res.data)

			},
      changeCategory(data){
				const CateGory1 =  data.map((item,index) => {
					item.list = []
					item.page = 0
					item.pagesize = 10
					return item
        })

	     this.category = CateGory1
      },
      async selectArticle() {
				const categoryitem = this.categoryItem()
	      const res = await this.$http.get('/detail/' + categoryitem._id,{
					params: {
						page: categoryitem.page,
            pagesize: categoryitem.pagesize
          }
        })

	      // this.category.list = res.data
        categoryitem.list = res.data
      },
      categoryItem() {
				const categoryitem = this.category[this.active]
	      return categoryitem
      }
    },
    watch: {
			active(){
				this.selectArticle()
      }
    },
    created() {
			this.selectCategory()
    }
	}
</script>

<style scoped lang="less">
  .home{
    background-color: #fff;
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