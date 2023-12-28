<template>
  <div class="bg-white rounded-2xl p-4 h-20">
    <div class="cs flex overflow-hidden overflow-x-auto">
      <div
        v-for="(city, index) in citys"
        :key="index"
        :class="{ active: checked === index }"
        @click="checkedCity(index)"
        class="text-nowrap p-1 pl-3 pr-3 m-1 border rounded-3xl"
      >
        {{ city }}
      </div>
    </div>
    <div class="mt-3 mb-4 pt-1 pb-1 bg-[#fcf3de] text-[#ec9837] font-semibold text-center rounded-lg">
      <van-icon name="underway" />
      距结束仅剩6天
    </div>
    <TourMsg />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import TourMsg from "./TourMsg.vue"

const citys: string[] = ["日本", "新加坡", "港澳", "南韩", "欧洲", "美国"]
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
