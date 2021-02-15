<template>
    <div class="userHr">
        <div class="userTitle">
            用户推荐
        </div>
        <div class="user">
            <div class="userOne">
                <div class="head">
                </div>
                <div class="test">肖阿斯顿发斯蒂芬先生</div>
            </div>
            <div class="userOne">
                <div class="head">
                </div>
                <div class="test">丶肖kkgggggggggg先生</div>
            </div>
            <div class="userOne">
                <div class="head">
                </div>
                <div class="test">丶肖kkgggggggggg先生</div>
            </div>
            <div class="userOne">
                <div class="head">
                </div>
                <div class="test">丶肖kkgggggggggg先生</div>
            </div>
            <div class="userOne">
                <div class="head">
                </div>
                <div class="test">丶肖kkgggggggggg先生</div>
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
    .userTitle {
        font-size: 16px;
        font-weight: 650;
        margin-left: 5px;
        margin-top: 15px;
    }

    .user {
        overflow-x: scroll;
        width: 90vw;
        display: flex;
        margin-bottom: 10px;
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 10px;

        .userOne {
            width: 70px;
            margin-right: 12px;
            margin-left: 5px;

            .head {
                width: 50px;
                height: 50px;
                border: solid 1px red;
                border-radius: 50px;
                margin: 0 auto;
            }

            .test {
                width: 70px;
                text-align: center;
                font-size: 16px;
                height: 42px;
                line-height: 21px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
    }

    .userHr .hr {
        width: 100vw;
        height: 10px;
        background-color: #f6f6f6;
    }
</style>