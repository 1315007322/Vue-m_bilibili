<template>
  <div class="home">
    <NavBar></NavBar>


    <van-tabs v-model="active" swipeable sticky>
      <van-tab v-for="(item,index) in category" :title="item.title" :key="index">
        <van-list
          v-model="item.loading"
          :finished="item.finished"
          finished-text="没有更多了"
          @load="onLoad"
          :immediate-check="false"

        >
          <div class="detailparent">
            <Cover class="detailitem" :detailitem="categoryitem" v-for="(categoryitem,categoryindex) in item.list" :key="categoryindex">{{}}</Cover>

          </div>
        </van-list>

       </van-tab>
    </van-tabs>

  </div>
</template>

<script>
  import Cover from "../components/common/Cover"
  import NavBar from "../components/common/NavBar";
	export default {
		name: "Home",
    components: {
			NavBar,
	    Cover
    },
    data() {
			return {
        category: {},
        active: 0,

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
					item.loading = false
					item.finished = false
					item.pagesize = 10
					return item
        })

	     this.category = CateGory1
        this.selectArticle()
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
        categoryitem.list.push(...res.data)
        categoryitem.loading = false
	      console.log(res.data.length)
	      if(res.data.length < categoryitem.pagesize){
        	categoryitem.finished = true
        }

      },
      categoryItem() {
				const categoryitem = this.category[this.active]
	      return categoryitem
      },
	    onLoad() {
				const  categoryitem = this.categoryItem()
        setTimeout(() => {
	        categoryitem.page += 1
	        this.selectArticle()
        },1000)

	    },
    },
    watch: {
			active(){
				this.selectArticle()
      }
    },
    created() {
			this.selectCategory()
	    console.log(this.$route);
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