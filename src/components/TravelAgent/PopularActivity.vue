<template>
  <div class="h-[450px] ml-2 rounded-xl bg-slate-400 flxe content-stretch overflow-hidden">
    <div>
      <div class="h-80 w-80">
        <img :src="img" alt="" />
      </div>
      <div>
        <div class="font-bold">{{ name }}</div>
        <span class="text-red-500">{{ `*${star}` }}</span>
        <span>{{ `(${comment})` }}</span>
      </div>
    </div>

    <div>
      <div class="text-slate-200 text-xs line-through" v-show="oldPrice">{{ `￥${oldPrice}` }}</div>
      <div class="font-bold">{{ `￥${price}` }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue"
defineProps({
  img: String,
  name: String,
  star: Number,
  comment: Number,
  oldPrice: Number,
  price: Number,
})
</script>

<style scoped></style>
