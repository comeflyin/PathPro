<template>
  <div class="m-2 mt-5">
    <span class="font-semibold text-xl ml-2 mb-3">精选优惠</span>
    <div class="m-2 mt-7 border p-3 rounded-3xl relative bg-[#fee8bf]">
      <img src="./img/年末促销季.png" alt="" class="absolute w-24 right-3 -top-5" />
      <span class="block text-lg font-semibold">年末促销季</span>
      <span class="m-1 text-sm/[20px] inline-block w-52">最高享50%折扣，PathPro独家优惠，把握机会！</span>
      <CityDiscount />
    </div>
  </div>
</template>

<script setup lang="ts">
import CityDiscount from "./CityDiscount.vue"
</script>

<style scoped></style>
