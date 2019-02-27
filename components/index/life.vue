<template>
  <div class="m-life">
    <el-row>
      <el-col :span="14">
        <Slider/>
      </el-col>
      <el-col :span="4"></el-col>
      <el-col :span="6">
        <div class="m-life-login">
          <h4>
            <img src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt="">
          </h4>
          <p class="m-life-login-name">Hi 你好</p>
          <p><nuxt-link to="/register">
            <el-button round size="medium">注册 </el-button>
          </nuxt-link></p>
          <p>
            <nuxt-link to="/login">
              <el-button round size="medium">立即登陆</el-button>
            </nuxt-link>
          </p>
        </div>


      </el-col>

    </el-row>
    <el-row></el-row>
  </div>

</template>
<script>
import Slider from './slider.vue'
export default {
  components: {
    Slider
  }
}
</script>
<style lang="scss">
@import '@/assets/css/index/life.scss';
</style>
