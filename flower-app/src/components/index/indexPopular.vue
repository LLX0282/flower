<template>
    <div>
        <div class="title">
            {{title}}
        </div>
        <div>
            <div v-for="(item,i) in this.dataList" :key=i>
                <div class="popular">
                    <div class="top">
                        <div class="head"></div>
                        <div class="center">
                            <div class="name">
                                范迪塞尔多
                            </div>
                            <div class="timePhone">
                                <div class="time">12分钟前</div>
                                <div class="phone">
                                    <img src="../../assets/phone.png" alt="">
                                    <div class="modelPhone">华为p40</div>
                                </div>
                            </div>
                        </div>
                        <img class="zhankai" src="../../assets/zhankai.png" alt="">
                    </div>
                </div>
                <div class="preText">
                    <p ref='text'>
                        {{item.minContent}}
                        <el-button type="text" class="read-whole-btn" @click="qieHuan(item,1)"
                            v-if="item.stat==0 && item.content.length > 140">
                            <span>展开</span>
                            <i class="el-icon-arrow-down"></i>
                        </el-button>
                        <el-button type="text" class="read-whole-btn" @click="qieHuan(item,0)"
                            v-if="item.stat==1 && item.content.length > 140">
                            <span>收起</span>
                            <i class="el-icon-arrow-up"></i>
                        </el-button>
                    </p>
                </div>
                <div class="pic">
                    <van-grid :border="true" :column-num="3" :gutter="2">
                        <van-grid-item>
                            <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
                        </van-grid-item>
                        <van-grid-item>
                            <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
                        </van-grid-item>
                        <van-grid-item>
                            <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
                        </van-grid-item>
                        <van-grid-item>
                            <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
                        </van-grid-item>
                        <van-grid-item>
                            <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
                        </van-grid-item>
                        <van-grid-item>
                            <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
                        </van-grid-item>
                    </van-grid>
                </div>
                <div class="xian"></div>
                <div class="bottom">
                    <div class="icon">
                      <div class="iconfont icon-zan2-selected left"></div>
                      <div class="num">10000</div>  
                    </div>
                    <div class="icon">
                       <div class="iconfont icon-comment center"></div> 
                       <div class="num">2</div>
                    </div>
                    <div class="icon">
                        <div class="iconfont icon-shoucang right"></div>
                    </div>
                    
                </div>
                <div class="hrBot"></div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        props: ['title', 'list'],
        data() {
            return {
                dataList: [{
                    stat: 0,
                    minContent: '1',
                    content: `    文本，1是指书面语言的表现形式，从角度说，通具有完整、
                系统含义（Message）ddddddd的一个句子或多个句子的组合。一个文本可以是一（Sentence）、一个段落（Paragraph）或者一个篇章（Discourse）。广义“文本”：任何由书写所固定下来的任何话语。（利科尔） 狭义“文本”：由语言文字组成的文学实体，代指“作品”，相对于作者、世界构成一个独立、自足的系统。`
                }, {
                    stat: 0,
                    minContent: '2',
                    content: ` 1.首先打开h
                    面语言的表现形式，从角度说，通具有完整、
                系统含义（Message）ddddddd的一个句builder软件,新建一个html文件,里面写入一个p标签和一个按钮标签。
2.然后在p标签的下方设置一个script标签,里面写入js胆码;先获取p标签和按钮的dom对象,然后给按钮添加一个点击事件,再点击  `
                }, {
                    stat: 0,
                    minContent: '3',
                    content: `   文本，是指书面语言的表现形式，个文本可以是一raph）或者一个篇章（Discourse）。广义“文本”：任何。`
                }],
                aa: this.list,
            }
        },
        mounted() {

            for (var i in this.dataList) {
                this.dataList[i].minContent = this.ellipsis(this.dataList[i].content, 140)
            }
            console.log(this.dataList)
        },
        methods: {
            qieHuan(item, stat) {
                //console.log(content)
                this.$nextTick(() => {
                    if (stat == 0) {
                        let temp = item.minContent
                        item.minContent = item.content
                        item.content = temp
                    } else {
                        let temp = item.minContent
                        item.minContent = item.content
                        item.content = temp
                    }
                    item.stat = stat


                })

            },
            ellipsis(value, len) {
                console.log(len)
                if (!value) return ''
                if (value.length > len) {
                    return value.slice(0, len) + '...'
                }
                return value
            }
        }
    }
</script>

<style lang="scss" scoped>
    .title {
        font-size: 16px;
        font-weight: 650;
        margin-left: 5px;
        margin-top: 15px;
    }

    .popular {
        width: 94vw;
        margin-top: 15px;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 15px;

        .top {
            display: flex;

            .head {
                width: 50px;
                height: 50px;
                border: solid 1px red;
                border-radius: 50px;
            }

            .center {
                width: 60vw;
                height: 50px;
                margin-left: 15px;

                .name {
                    font-size: 18px;
                    white-space: nowrap;
                    width: 60vw;
                    height: 25px;
                    overflow: hidden;
                    margin-top: 2px;
                    margin-bottom: 5px;

                }

                .timePhone {
                    display: flex;
                    font-size: 12px;

                    .phone {
                        display: flex;
                        margin-left: 10px;

                        img {
                            width: 13px;
                            height: 13px;
                            margin-top: 2px;
                        }

                        .modelPhone {}
                    }
                }
            }

            .zhankai {
                width: 12px;
                height: 12px;
                margin: auto 0px auto 30px;
            }
        }
    }

    .preText {
        width: 95vw;

        margin: 0 auto;
        border: solid 1px red;

        p {
            border: solid 1px red;
            word-wrap: break-word; //长单词允许换行
            width: 95vw;
            font-size: 16px;
            line-height: 30px;
            // overflow: hidden;
            // display: -webkit-box;
            white-space: pre-wrap;
            // -webkit-line-clamp:7;//控制文本的行数
            // -webkit-box-orient: vertical;
            // text-overflow: ellipsis;
        }

        .read-whole-btn {
            color: #409EFF;
            border: 0px;
        }
    }

    .pic {

        width: 95vw;
        margin: 0 auto;
        margin-bottom: 15px;
    }

    .xian {
        border-bottom: solid 1px #BBBBBB;
        width: 95vw;
        margin: 0 auto;
        margin-bottom: 10px;
    }

    .bottom {
        width: 95vw;
        margin: 0 auto;
        margin-bottom: 10px;
        display: flex;
        color: rgb(140, 140, 140);
        display: flex;
        .icon{
            display: flex;
            width: 120px;
            padding-left: 50px;
            //justify-content: center;
            .num{
                font-size: 14px;
                margin-top: 5px;
                margin-left: 5px;
            }
        }
        .left {
            font-size: 20px;
           
        }
        .center{
            
            font-size: 21px;
        }
        .right{
            font-size: 19px;
            
        }
    }
    .hrBot{
            width: 100vw;
            height: 10px;
            background-color: #f6f6f6;
    }
</style>