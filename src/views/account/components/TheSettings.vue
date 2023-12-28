<template>
  <div class="w-screen h-screen bg-[#f6f6f6]">
    <van-nav-bar title="设置" left-arrow @click-left="onClickLeft" />
    <div class="text-xs font-bold p-3">账户设置</div>
    <van-cell title="登录方式管理" title-style="font-size:12px;" is-link size="large" />
    <van-cell title="账户安全" title-style="font-size:12px;" is-link size="large" />
    <div class="text-xs font-bold p-3">偏好设置</div>
    <van-cell title="通知" title-style="font-size:12px;" is-link size="large" />
    <div class="text-xs font-bold p-3">其他</div>
    <van-cell title="隐私设置" title-style="font-size:12px;" is-link size="large" />
    <van-cell title="意见反馈" title-style="font-size:12px;" is-link size="large" />
    <van-cell title="关于" title-style="font-size:12px;" is-link size="large" />
    <div class="mt-2">
      <van-cell title="退出" title-style="font-size:12px;" is-link size="large" />
    </div>
  </div>
</template>

<script setup lang="ts">
const onClickLeft = () => {
  history.back()
}
</script>

<style scoped>
:deep(.van-badge__wrapper) {
  @apply text-[#000];
}
</style>
