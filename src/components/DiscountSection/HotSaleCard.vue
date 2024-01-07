<template>
  <div class="item-warpper w-full p-2 space-y-1" :ref="forwardRef">
    <div class="img-wrapper rounded-xl overflow-hidden relative">
      <img class="w-full" :src="item.cover" alt="" />
      <div class="item-mask absolute w-full h-full bg-black opacity-20 bottom-0"></div>
      <div class="area absolute bottom-1 left-1 text-white text-sm font-bold flex items-center space-x-1">
        <van-icon name="location" />
        <div class="area__text">{{ item.city }}</div>
      </div>
    </div>
    <div class="title text-sm font-bold">{{ item.title }}</div>
    <!-- 评分与参与情况 -->
    <div class="text-sm flex-nowrap flex">
      <span class="text-[#f09b0a]" v-if="item.rating"><van-icon name="star" />{{ item.rating }}</span>
      <span class="text-[#9a9a9a] w-3/4 whitespace-nowrap overflow-hidden text-ellipsis">
        <span>({{ item.evaluate }})</span>
      </span>
    </div>
    <div class="price text-sm font-bold">
      {{ getCurrency(item.price) }}
      <span class="font-normal text-xs">起</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HotSaleItem } from "@/types/hotSale"
import { getCurrency } from "@/utils/utils"
import { useForwardRef } from "@/hooks/useForwardRef"

defineProps<{
  item: HotSaleItem
}>()

const forwardRef = useForwardRef()
</script>

<style scoped></style>
