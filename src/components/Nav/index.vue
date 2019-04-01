<template>
    <!--只能存在一个根容器-->
    <div class="nav">
      <ul>
        <router-link to="/home">首页</router-link>
        <router-link to="/order">订单</router-link>
        <router-link to="/shopcar">购物车</router-link>
        <router-link to="/mine">我的</router-link>
      </ul>
    </div>
</template>

<script>
    export default {
        name: 'nav',
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
    height: 50px;
  }
  .nav ul{
    height:50px;
    width: 100%;
  }
</style>
