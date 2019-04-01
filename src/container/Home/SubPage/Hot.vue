<template>
    <!--只能存在一个根容器-->
    <div class="">
      热门
    </div>
</template>

<script>
    export default {
        name: '',
        //props: ["",""],
        props: {
            //nick:{
            //type:String,
            //default:'国民老公'
            //},


            // 对象或数组默认值必须从一个工厂函数获取
            //girlFriends:{
            //type:Array,
            //default:function(){
            //return ['g1','g2']
            //}
            //}
        },

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
