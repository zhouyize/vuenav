
<template>
    <!--只能存在一个根容器-->
    <div class="home">
      <ul>
        <router-link tag='li' to="/home/recommend">推荐</router-link>
        <router-link tag='li' to="/home/hot">热门</router-link>
      </ul>
      <keep-alive>
        <router-view />
      </keep-alive>
      <Nav />
    </div>
</template>



<script>

    import Nav from '@/components/Nav'

    export default {
        name: '',
        components:{
          Nav
        },
        props: [],
        //所有的初始化状态全部放入data中
        data() {
            return {}
        },
        methods: {},
        //计算属性
        computed: {},

        //实时监听数据变化，可以在这里做相关判断
        watch: {}

    }
</script>

<!--样式-->
<!--
Add "scoped" attribute to limit CSS to this component only
添加scoped属性限制样式只在当前组件中生效
-->
<style scoped>

  ul{
    with:100%;
    text-align:center;
    margin-top:20px;
  }

  ul li{
    display: inline-block;
    font-size:20px;
    margin: 0 20px;
  }

  .active{
    color: red;
  }

</style>
