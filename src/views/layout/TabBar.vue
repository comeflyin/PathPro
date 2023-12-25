<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="search">特惠专区</van-tabbar-item>
    <van-tabbar-item icon="friends-o">我的收藏</van-tabbar-item>
    <van-tabbar-item icon="setting-o">行程</van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/root/account">我的账户</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref } from "vue"
const active = ref(0)
</script>

<style scoped></style>
