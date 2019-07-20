<template>
  <div class="wrapper">
      <TitleTypeA :title="title"></TitleTypeA>
      <ListItem v-for="(item,index) in dataList" :key="item.id" :item="item"></ListItem>
      <a class="btn">查看所有产品</a>
  </div>
</template>

<script>
import TitleTypeA from "../../global_components/TitleTypeA"
import ListItem from "../../global_components/ListItem"

export default {
  name: "",
  components:{
      TitleTypeA,
      ListItem
  },
  data() {
    return {
       title:{
              title_icon:true,
              title_icon_URL:"http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png",
              title_text:"猜你喜欢",
              asideOption:false
        },
        dataList:[
            {id:'0001',title:'北京欢乐谷',score:5,commentCount:'72624',price:97,location:'朝阳区',detail:'亚洲唯一飞行式过山车等你来挑战',orderable:true,imgURL:'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg'},
            {id:'0002',title:'古北水镇',score:5,commentCount:'10966',price:140,location:'密云县',detail:'',orderable:false,imgURL:'http://img1.qunarzz.com/sight/p0/1903/5d/5dcaf453dfd6f5dba3.img.jpg_200x200_51d03f19.jpg'},
            {id:'0003',title:'故宫',score:5,commentCount:'428064',price:60,location:'东城区',detail:'世界五大宫之首，穿越与您近在咫尺',orderable:false,imgURL:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg'},
            {id:'0004',title:'八达岭长城',score:5,commentCount:'55092',price:40,location:'延庆县',detail:'不到长城非好汉',orderable:false,imgURL:'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg'},
            {id:'0005',title:'北京动物园',score:5,commentCount:'8805',price:165,location:'西城区',detail:'',orderable:false,imgURL:'http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_200x200_c62292e9.jpg'},
            {id:'0006',title:'大望京儿童游乐园',score:5,commentCount:'35',price:69,location:'大望京公园',detail:'',orderable:false,imgURL:'http://img1.qunarzz.com/sight/p0/1509/f9/f9cc067524ca03f6.water.jpg_200x200_670fe0a2.jpg'},
            {id:'0007',title:'金瓯凤山温泉',score:5,commentCount:'785',price:248,location:'昌平区',detail:'',orderable:true,imgURL:'http://img1.qunarzz.com/sight/p0/1510/8e/8eea8eb6f41698290.img.jpg_200x200_595cfa1d.jpg'},
            {id:'0008',title:'恭王府',score:5,commentCount:'35998',price:28,location:'西城区',detail:'一座恭王府，半部清代史',orderable:false,imgURL:'http://img1.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_200x200_8eb33f07.jpg'},
            {id:'0009',title:'什刹海',score:5,commentCount:'3744',price:10,location:'西城区',detail:'',orderable:false,imgURL:'http://img1.qunarzz.com/sight/p0/1603/85/85c883189bf7293390.water.jpg_200x200_3165123d.jpg'},
            {id:'0010',title:'京东石林峡',score:5,commentCount:'2794',price:58,location:'平谷区',detail:'谷内山峰挺立峭拔，天上美景落人间',orderable:false,imgURL:'http://img1.qunarzz.com/sight/p0/1604/78/78873494f26e554090.water.jpg_200x200_331422ad.jpg'}
        ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.btn
  display block
  color #01afc7
  font-size 14px
  line-height .4rem
  padding .2rem 0
  text-align center
</style>