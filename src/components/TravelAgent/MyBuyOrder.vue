<template>
  <div class="flex align-start justify-start mt-4">
    <div class="w-20 h-20 rounded-xl overflow-hidden">
      <img :src="img" alt="" />
    </div>
    <div class="flex-1 ml-2">
      <div class="text-xl font-bold">{{ name }}</div>
      <div class="text-sm">{{ direction }}·{{ type }}·{{ additon }}</div>
      <div>有效期内皆适用</div>
      <span class="text-sm" v-if="human">{{ human }}x成人</span>
      <span class="text-sm" v-if="childen">{{ childen }} x儿童(3-11岁) </span>
      <span class="text-sm" v-if="old">{{ old }} x长者 香港居民(60岁及以上)</span>
      <div class="text-xl font-bold">￥{{ price }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue"
defineProps({
  name: String,
  img: String,
  direction: String,
  type: String,
  additon: String,
  human: Number,
  childen: Number,
  old: Number,
  price: Number,
})
</script>

<style scoped></style>
