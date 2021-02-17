<template>
    <div class="bar">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="关注" name="first">
                <index-notlogin></index-notlogin>
                <index-user></index-user>
                <index-popular :title='title' :list='title'></index-popular>
                <index-bottom></index-bottom>
            </el-tab-pane>
            <el-tab-pane label="头条" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="问答" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="+"   ></el-tab-pane>
            <!-- <img class="addPic" src="../../assets/add.png" alt=""> -->
        </el-tabs>
    </div>

</template>

<script>
import indexNotlogin from '@/components/index/indexNotlogin.vue'
import indexUser from '@/components/index/indexUserrecommend.vue'
import indexPopular from '@/components/index/indexPopular.vue'
import indexBottom from '@/components/index/indexBottom.vue'
    export default {
        components:{
            indexNotlogin,
            indexUser,
            indexPopular,
            indexBottom
        },
        data() {
            return {
                activeName: 'first',
                title:'热门动态推荐'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab.name);
            }
        }
    }
</script>

<style lang='scss' scoped>
    .bar {
        .addPic{
            width: 12px;
        }
    }
   /deep/  .el-tabs__nav {
        margin-left: 40px;
    }
</style>