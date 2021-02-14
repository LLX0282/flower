<template>
    <div class="top">
        <div class="left">
            <img src="../../assets/user.png" alt="">
        </div>
        <div class="right">
            <img src="../../assets/search.png" alt="">
            <div>
                搜索
            </div>
        </div>
    </div>
</template>
<script>
    export default {  
    }
</script>
<style lang='scss' scoped>
.top{
    width: 100vw;
    height: 50px;
    display: flex;
    align-items: center;
    .left{
            width:36px;
            height: 36px;
            margin-left: 15px;
            margin-right:15px ;
        img{
            width:100%;
            height: 100%;
        }
    }
    .right{
       
       height: 34px;
       border-radius: 34px;
       width: 278px;
       font-size: 16px;
       display: flex;
       align-items: center;
       background-color: rgb(246, 246, 246);
       img{
           width: 23px;
           height: 23px;
           
           margin-left: 5px;
       }
       div{
           height: 34px;
           line-height: 33px;
           color: rgb(118, 118, 118);
           margin-left: 5px;
       }
    }
}
</style>