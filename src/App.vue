<template>
  <div id="app">

    <body>
    <header>

      <nav class="navbar navbar-default" id="navbar">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#header-navbar" aria-expanded="false">
              <span class="sr-only"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>

            <h1 class="logo">
              <router-link to="/">
              <a href="#">HYuan</a>
              </router-link>
            </h1>

          </div>
          <div class="collapse navbar-collapse" id="header-navbar">
<!--            <form class="navbar-form visible-xs" action="#" method="POST">-->
<!--              <div class="input-group">-->
<!--                <input type="text" name="keyword" class="form-control" placeholder="请输入关键字" maxlength="20" autocomplete="off">-->
<!--                <span class="input-group-btn">-->
<!--                                <button type="submit" class="btn btn-default btn-search">搜索</button>-->
<!--                            </span>-->
<!--              </div>-->
<!--            </form>-->

            <ul class="nav navbar-nav navbar-right">

              <li><a style="padding-top: 30px"><router-link to="/">首页</router-link></a></li>
<!--              <li><router-link to="/idea">想法</router-link></li>-->
              <li><a style="padding-top: 30px"><router-link to="/about">关于</router-link></a></li>

            </ul>

          </div>
        </div>
      </nav>
    </header>

    <div class="container">
      <div class="introBanner" v-for="(item,i) in this.sign" :key="i">
        <p style="color: #777">{{ item.text }}</p>
      </div>

      <div class="content-wrap">
        <div class="content">

          <router-view></router-view>

<!--          <nav aria-label="Page navigation">-->
<!--            <ul class="pagination">-->

<!--              <li>-->

<!--                <router-link :to="{name:'home',params:{-->
<!--                  page:'previous',-->
<!--                }}">-->
<!--                <a href="#" aria-label="Previous">-->
<!--                  <span aria-hidden="true">&laquo;</span>-->
<!--                </a>-->
<!--                </router-link>-->
<!--              </li>-->

<!--              <li><a href="#">1</a></li>-->
<!--              <li><a href="#">2</a></li>-->
<!--              <li><a href="#">3</a></li>-->
<!--              <li><a href="#">4</a></li>-->
<!--              <li><a href="#">5</a></li>-->

<!--              <router-link :to="{name:'home',params:{-->
<!--                  page:'next',-->
<!--                }}">-->
<!--              <li>-->
<!--                <a href="#" aria-label="Next">-->
<!--                  <span aria-hidden="true">&raquo;</span>-->
<!--                </a>-->
<!--              </li>-->
<!--              </router-link>-->


<!--            </ul>-->
<!--          </nav>-->

        </div>


        <div class="sidebar">

          <div class="widget widget_hot">
            <h2 class="my_recent">最新文章</h2>

              <ul>

                <div v-for="post in recently_post" :key="post.id">
                  <router-link :to="{name:'ret_post',params:{id:post.id}}">
                    <li>

                      <a title="" href="#">

                        <span class="text">
                          {{ post.title }}
                        </span>

                        <span class="muted"><i class="glyphicon glyphicon-time"></i>
                                            {{  post.create_time.split(".")[0].slice(0,16) }}
                        </span>

                        <span class="muted"><i class="glyphicon glyphicon-eye-open"></i>
                          {{ post.pageviews }}
                        </span>

                        </a>
                    </li>
                  </router-link>
                </div>

            </ul>

          </div>

          <div class="widget widget_category">
            <h3>文章分类</h3>

            <ul>
              <a v-for="cate in all_category" :key="cate.id">

                <router-link :to="{name:'retrieve_category',params:{id:cate.id}}" :key="$route.fullPath">
                  <li><a href="#"><span class="text"><i class="glyphicon glyphicon-triangle-right"></i> {{ cate.name }}</span><span class="count">{{ cate.num_cate }}</span></a></li>
                </router-link>

              </a>
            </ul>

          </div>

          <div class="widget">
            <h3>归档</h3>

            <ul>
              <a v-for="archive in show_archives" :key="archive.id">
                <router-link v-bind:to="{name:'archives',
                                         params:{
                                                 year:archive.year,
                                                 month:archive.month,
                                          } }">
                <li><a><span class="text"><i class="glyphicon glyphicon-play-circle"></i> {{ archive.year }}年{{ archive.month }}月</span></a></li>
                </router-link>
              </a>
            </ul>

          </div>

          <div class="widget widget_sentence">
            <h3>标签云</h3>

            <ul>

              <a v-for="tag in all_tags" :key="tag.id">
                <router-link :to="{name:'ret_tag',params: {id:tag.id}}" :key=tag.id>
                <li><a href="#">{{ tag.name }} <span class="badge">{{ tag.num_tag }}</span></a></li>
                </router-link>
              </a>
            </ul>

          </div>

        </div>
      </div>
    </div>

    <div class="footer">
      <div class="container">
        <p>Copyright &copy; 2018.Reedo.Inc All rights reserved</p>
      </div>
    </div>

    </body>

  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // Hello
  },
  data(){
    return {

        recently_post: null,
        all_category:null,
        all_tags:null,
        show_archives:null,
        sign:null,

    }
  },
  created() {


    this.$axios.get('/rec_post/').then(
      res => {
        this.recently_post = res.data
    })

    this.$axios.get('/category/').then(
        res => {
          this.all_category = res.data
        })

    this.$axios.get('/tag/').then(
        res => {
          this.all_tags = res.data
        })

    this.$axios.get('/show_are/').then(
        res => {
          this.show_archives = res.data.data
        })

    this.$axios.get('/sign/').then(
        res => {
          this.sign = res.data
        })

  },


}
</script>

<style>
 @import "assets/css/style.css";
</style>


