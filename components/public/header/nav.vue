<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list">
        <nuxt-link to="/my">我的美团</nuxt-link>
        <dl>
          <dd>
            <nuxt-link to="order">我的订单</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="order">我的收藏</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="order">抵用卷</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="order">帐户设置</nuxt-link>
          </dd>
        </dl>
      </li>
      <li class="list">
        <nuxt-link to="order">手机App</nuxt-link>
      </li>
      <li class="list">
        <nuxt-link to="order">
          商家中心
        </nuxt-link>
        <dl>
          <dd><nuxt-link to="order">登陆商家中心</nuxt-link></dd>
          <dd><nuxt-link to="order">我想合作</nuxt-link></dd>
          <dd><nuxt-link to="order">免费手机开店</nuxt-link></dd>
          <dd><nuxt-link to="order">商家申请开票</nuxt-link></dd>
        </dl>
      </li>
      <li class="list">
        <nuxt-link to="order">
          网站导航
        </nuxt-link>
        <div class="subContainer">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>1</dd>
            <dd>1</dd>
            <dd>1</dd>
            <dd>1</dd>
            <dd>1</dd>
            <dd>1</dd>
            <dd>1</dd>
          </dl>
          <dl class="food">
            <dd>2</dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd>3</dd>
            <dd>3</dd>
            <dd>3</dd>
            <dd>3</dd>
            <dd>3</dd>
            <dd>3</dd>
            <dd>3</dd>
            <dd>3</dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd>4</dd>
            <dd>4</dd>
            <dd>4</dd>
            <dd>4</dd>
            <dd>4</dd>
            <dd>4</dd>
            <dd>4</dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>
