<template>
  <div class="m-4">
    <span class="font-semibold text-xl pb-2 flex">领卷享折扣</span>
    <div class="bg-white rounded-2xl p-4 h-full">
      <!-- 标签 城市选择 -->
      <div class="cs flex overflow-hidden overflow-x-auto">
        <div
          v-for="(cityDiscount, index) in hotSaleInfo"
          :key="index"
          :class="{ active: checked === index }"
          @click="checkedCity(index)"
          class="text-nowrap p-1 pl-3 pr-3 m-1 border rounded-3xl"
        >
          {{ cityDiscount.type }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useHotSaleStore } from "@/stores/discountStore"

const HotSale = useHotSaleStore()
const hotSaleInfo = ref(HotSale.hotSaleInfo)
// 选中的城市
let checked = ref(0)

// 选择城市
const checkedCity = (index: number) => {
  checked.value = index
}
</script>

<style scoped>
.active {
  @apply bg-[#ff5303] text-white font-semibold;
}
</style>
