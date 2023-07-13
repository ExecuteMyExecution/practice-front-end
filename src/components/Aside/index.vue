<template>
  <el-menu active-text-color="#ffd04b" background-color="#09192a" class="el-menu-vertical-demo" default-active="0"
    text-color="#fff">
    <el-menu-item v-for="(item, index) in menu" :key="index" :index="index.toString()" @click="goto(item.path)">
      <!-- <el-icon><icon-menu /></el-icon> -->
      <component :is="item.icon" class="icon"></component>
      <span>{{ item.text }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { HomeFilled, List, Histogram, TrendCharts, Platform, Comment, Flag, UserFilled, BellFilled, StarFilled } from '@element-plus/icons-vue'
const router = useRouter();

const menu = [
  { text: '主页', path: '/home', icon: HomeFilled },
  { text: '比赛信息', path: '/race-info', icon: Flag },
  { text: '近期比赛统计', path: '/recent-race', icon: TrendCharts },
  { text: '比赛反馈', path: '/race-feedback', icon: Comment },
  { text: '比赛安排', path: '/race-arrange', icon: List },
  { text: '月度排名', path: '/monthly-ranking', icon: Histogram },
  { text: '训练信息', path: '/train-info', icon: BellFilled },
  { text: '获奖情况', path: '/awards', icon: StarFilled },
  { text: '数据可视化', path: '/data-visualization', icon: Platform },
  { text: '信息注册', path: '/info-register', icon: UserFilled }
];
const goto = (path) => {
  router.push(path);
};
</script>

<style lang="scss" scoped>
.icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
</style>