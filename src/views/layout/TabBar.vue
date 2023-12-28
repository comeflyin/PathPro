<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o"><RouterLink to="/root/home">首页</RouterLink></van-tabbar-item>
    <van-tabbar-item icon="search"><RouterLink to="/root/specialOffer">特惠专区</RouterLink></van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/root/collection">我的收藏</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/root/Trips">行程</van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/root/account">我的账户</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref } from "vue"
const active = ref(0)
</script>

<style scoped></style>
