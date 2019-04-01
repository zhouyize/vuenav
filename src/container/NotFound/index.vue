<template>
    <!--只能存在一个根容器-->
    <div class="notfound">
      您找的页面飞走了~
    </div>
</template>

<script>
    export default {
        name: '',
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
<style>

</style>
