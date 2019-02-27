<template>
  <div class="m-header">
    <el-row :gutter="0" class="m-header">
      <el-col :span='5'>
        <Geo/>
      </el-col>
       <el-col :span='5'>
        <User/>
      </el-col>
       <el-col :span='14'>
        <NavBar/>
        </el-col>
    </el-row>
  </div>
</template>
<script>
import Geo from './geo.vue'
import User from './user.vue'
import NavBar from './nav.vue'
export default {
  components: {
    Geo,
    User,
    NavBar
  }
}
</script>
<style lang="scss">
@import '@/assets/css/public/header/index.scss';
@import '@/assets/css/public/layout.scss';
</style>
