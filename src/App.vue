<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Aside/>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Aside from "@/components/Aside/index.vue";
import Header from "@/components/Header/index.vue";
</script>

<style lang="scss" scoped>
.common-layout {
  .el-header {
    padding: 0;
    height: auto;
  }
  .el-main {
    background-color: #e5ebf2;
  }
}
</style>
