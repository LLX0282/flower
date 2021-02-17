<template>
    <div class="bottom">
        <div class="home">
            <div class="iconfont icon-yemian1 homeIcon"></div>
            <div class="homeText">首页</div>
        </div>
        <div class="home">
            <div class="iconfont icon-shangdian homeIcon "></div>
            <div class="homeText">商店</div>
        </div>
        <div class="center">
            <img src="../../assets/add-baise.png" alt="">
        </div>
        <div class="home">
            <div class="iconfont icon-gouwuche1 homeIcon "></div>
            <div class="homeText">购物</div>
        </div>
        <div class="home">
            <div class="el-icon-s-custom homeIcon "></div>
            <div class="homeText">我的</div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang='scss' scoped>
    .bottom{
        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 100vw;
        display: flex;
        align-items: center;
        background-color: #fff;
        z-index: 100;
        padding-top: 2px;
        padding-bottom: 2px;
        .home{
            color: #8c8c8c;
            margin-left: 35px;
            .homeIcon{
                font-size: 30px;
            }
            .homeText{
                font-size: 14px;
                padding-left: 2px;
            }
            
        }
        .center{
                width: 42px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
                margin-left: 35px;
                background-color: rgb(57, 154, 235);
                img{
                    width: 16px;
                    height: 16px;
                }
            }
    }
</style>