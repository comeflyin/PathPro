<template>
  <div class="bg-white rounded-2xl p-4 h-full border-neutral-200 border">
    <div class="cs flex overflow-hidden overflow-x-auto">
      <div
        v-for="(cityDiscount, index) in discountInfo"
        :key="index"
        :class="{ active: checked === index }"
        @click="checkedCity(index)"
        class="text-nowrap p-1 pl-3 pr-3 m-1 border rounded-3xl"
      >
        {{ cityDiscount.region }}
      </div>
    </div>
    <div class="mt-3 mb-4 pt-1 pb-1 bg-[#fcf3de] text-[#ec9837] font-semibold text-center rounded-lg">
      <van-icon name="underway" />
      距结束仅剩{{ leftTime }}天
    </div>
    <TourItem :discounts="discountInfo[checked].discounts" :leftTime="leftTime" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import TourItem from "./TourItem.vue"
import { useDiscountStore } from "@/stores/discountStore"

const discounts = useDiscountStore()
const discountInfo = ref(discounts.discountInfo)

const leftTime = 6
let checked = ref(0)

const checkedCity = (index: number) => {
  checked.value = index
}
</script>

<style scoped>
.active {
  @apply bg-[#ff5303] text-white font-semibold;
}
</style>
