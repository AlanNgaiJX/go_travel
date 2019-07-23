<template>
  <div class="wrapper">
    <div class="top_container">
      <ul class="nav1">
        <li>
          <a href="#" class="nav1_content">
            <span class="icon">&#xe89c;</span>
            <span>机票</span>
          </a>
        </li>
        <li>
          <a href="#" class="nav1_content">
            <span class="icon">&#xe60a;</span>
            <span>酒店</span>
          </a>
        </li>
        <li>
          <a href="#" class="nav1_content">
            <span class="icon">&#xe662;</span>
            <span>公寓</span>
          </a>
        </li>
        <li>
          <a href="#" class="nav1_content">
            <span class="icon">&#xe630;</span>
            <span>更多</span>
          </a>
        </li>
      </ul>

      <ul class="nav2">
        <li>
          <a href="#">登录</a>
        </li>
        <li>
          <a href="#">我的订单</a>
        </li>

        <li>
          <a href="#">最近浏览</a>
        </li>

        <li>
          <a href="#">关于我们</a>
        </li>
      </ul>
    </div>
    <div class="bottom_container">
      <ul class="nav3">
        <li>
          <a href="#">触屏版</a>
        </li>
        <li>
          <a href="#">电脑版</a>
        </li>
      </ul>
      <p>Qunar 京ICP备05021087意见反馈</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
.top_container
  padding-top 0.7rem
  background-color #f3f3f3
  border-bottom 0.05rem solid #dcdcdc
  .nav1
    display flex
    justify-content center
    li
      margin 0 0.15rem
      &:last-child:before
        content '|'
        margin 0 0.2rem
      .nav1_content
        font-size 0.28rem
        color #9e9e9e
        .icon
          font-size 0.44rem

  .nav2
    padding 0.3rem 0
    display flex
    justify-content center

    li
      margin 0 0.15rem

      a
        color #00afc7
        font-size 0.28rem

.bottom_container
  background-color #f3f3f3

  .nav3
    display flex
    justify-content center
    li  
        margin 0 .2rem
        padding .2rem 0
        a
        font-size 0.28rem
        font-weight bold
        color black

  p
    color #9e9e9e
    font-size 0.28rem
    text-align center
    padding-bottom 0.2rem
</style>