<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input placeholder="搜索商家或地点"></el-input>
          <button class="el-button el-button-primary">
            <i class="el-icon-search"></i>
          </button>
          <dl class="hotPlace">
            <dt>热门搜索</dt>
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#">故宫博物馆</a>
          <a href="#">故宫博物馆</a>
          <a href="#">故宫博物馆</a>
          <a href="#">故宫博物馆</a>
          <a href="#">故宫博物馆</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="/" class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="takeout">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="takeout">民宿</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="takeout">商家入住</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="6" class="right">
        <ul class="security">
        <li><i class="refund"><p class="txt">随时退</p></i></li>
        <li><i class="single"><p class="txt">不满意免单</p></i></li>
        <li><i class="overdue"><p class="txt">过期退</p></i></li>
        </ul>


      </el-col>
    </el-row>
  </div>
</template>
