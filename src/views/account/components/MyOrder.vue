<template>
  <div class="w-screen h-screen bg-[#f6f6f6]">
    <div class="bg-white">
      <van-nav-bar left-text="订单" left-arrow @click-left="onClickLeft" />
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
  @apply text-[#000] text-lg font-bold;
}

:deep(.van-nav-bar__text) {
  @apply text-[#000] font-bold;
}
</style>
