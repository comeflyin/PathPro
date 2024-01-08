<template>
  <div class="w-screen h-screen bg-[#f6f6f6]">
    <div class="border-b border-gray-500">
      <van-nav-bar title="常用信息" left-arrow @click-left="onClickLeft" />
    </div>
    <div>
      <van-cell title="出行人信息管理" title-style="font-size:12px;" is-link size="large" />
      <van-cell title="管理邮寄地址" title-style="font-size:12px;" is-link size="large" />
      <van-cell title="支付方式管理" title-style="font-size:12px;" is-link size="large" />
    </div>
  </div>
</template>

<script setup lang="ts">
const onClickLeft = () => {
  history.back()
}
</script>

<style scoped>
:deep(.van-icon-arrow-left) {
  @apply text-[#000] text-lg font-bold;
}

:deep(.van-nav-bar__text) {
  @apply text-[#000] font-bold;
}
</style>
