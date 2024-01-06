<template>
  <div class="h-[450px] ml-2 rounded-xl bg-slate-400 flxe content-stretch overflow-hidden">
    <div>
      <div class="h-80 w-80">
        <img :src="Activities.img" alt="" />
      </div>
      <div>
        <div class="font-bold">{{ Activities.name }}</div>
        <span class="text-red-500">{{ `*${Activities.star}` }}</span>
        <span>{{ `(${Activities.comment})` }}</span>
      </div>
    </div>

    <div>
      <div class="text-slate-200 text-xs line-through" v-show="Activities.oldPrice">
        {{ `￥${Activities.oldPrice}` }}
      </div>
      <div class="font-bold">{{ `￥${Activities.price}` }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PopularActivities } from "@/types/popularactivities"
import { defineProps } from "vue"
defineProps<{
  Activities: PopularActivities
}>()
</script>

<style scoped></style>
