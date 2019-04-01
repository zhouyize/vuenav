<template>
    <!--只能存在一个根容器-->
    <div class="nav">
      <ul>
        <router-link to="/home">
          <i class="iconfont icon-shouye"></i>
          <span class="title">首页</span>
        </router-link>
        <router-link to="/order">
          <i class="iconfont icon-wodedingdan"></i>
          <span class="title">订单</span>
        </router-link>
        <router-link to="/shopcar">
          <i class="iconfont icon-gouwuche"></i>
          <span class="title">购物车</span>
        </router-link>
        <router-link to="/mine">
          <i class="iconfont icon-wodejuhuasuan"></i>
          <span class="title">我的</span>
        </router-link>
      </ul>
    </div>
</template>

<script>

    import '@/assets/iconfont.css'
    export default {
        name: 'mynav',
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

  .nav{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 40px;
    padding: 5px;
    background: #fff;
  }
  .nav ul{
    height:40px;
    width: 100%;
    display: flex;
  }

  .nav ul a{
    flex: 1;
    text-align: center;
  }

  .nav ul a i{
    font-size:20px;
  }

  .title{
    display: block;
    margin-top:8px;
    font-size:12px;
  }
  .active{
    color: #39ac69;
  }

</style>
