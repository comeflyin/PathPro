<template>
  <div class="flex align-start justify-start mt-4">
    <div class="w-20 h-20 rounded-xl overflow-hidden">
      <img :src="item.img" alt="" />
    </div>
    <div class="flex-1 ml-2">
      <div class="text-xl font-bold">{{ item.name }}</div>
      <div class="text-sm">{{ item.direction }}·{{ item.type }}·{{ item.additon }}</div>
      <div>有效期内皆适用</div>
      <span class="text-sm" v-if="item.human">{{ item.human }}x成人</span>
      <span class="text-sm" v-if="item.childen">{{ item.childen }} x儿童(3-11岁) </span>
      <span class="text-sm" v-if="item.old">{{ item.old }} x长者 香港居民(60岁及以上)</span>
      <div class="text-xl font-bold">￥{{ item.price }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Order } from "@/types/Order"
import { defineProps } from "vue"
defineProps<{
  item: Order
}>()
</script>

<style scoped></style>
