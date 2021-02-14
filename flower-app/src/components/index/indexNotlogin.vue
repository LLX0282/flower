<template>
<div class="maxBox">
    <div class="box">
        <div class="left">
            立即登录，查看状态
        </div>
        <div class="right">
            <div class=" gong login">
                登录
            </div>
            <div class=" gong regisered">
                注册
            </div>
        </div>
    </div>
    <div class="hr"></div>
</div>
    
</template>

<script>
    export default {

    }
</script>

<style lang='scss' scoped>
    .box {
        display: flex;
        width: 100vw;
        height: 60px;
        align-items: center;
        .left {
            font-size: 14px;
            margin-left: 5px;
            white-space:nowrap;  
        }
        .right{
            display: flex;
            align-items: center;
            font-size: 14px;
            margin-left: 70px;
            .gong{
                border: solid 1px #4098D7 ;
                width: 75px;
                height: 35px;
                border-radius: 5px;
                text-align: center;
                line-height: 35px;
            }
            .login{
                color:#4098D7 ;
                margin-right: 10px;
            }
            .regisered{
                background-color: #4098D7;
                color: #fff;
                margin-right: 10px;
            }
        }
    }
    .maxBox .hr{
        width: 100vw;
        height: 10px;
        background-color:#f6f6f6 ;
    }
</style>