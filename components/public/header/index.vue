<template>
  <div class="m-header">
    <el-row>
      <el-col>
        <TopBar></TopBar>
      </el-col>
    </el-row>
    <el-row>
      <SearchBar></Searchbar>
    </el-row>

  </div>
</template>
<script>
import TopBar from './topbar.vue'
import SearchBar from './searchBar'
export default {
  components: {
    TopBar,
    SearchBar
  }
}
</script>
