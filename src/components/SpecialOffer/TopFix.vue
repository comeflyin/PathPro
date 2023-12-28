<template>
  <div class="mt-4 mb-3 flex justify-center items-center overflow-hidden h-20">
    <div
      class="cs ml-3 mr-3 w-11/12 h-12 border-slate-300 border-2 p-1 text-base rounded-xl pl-2 pr-2 overflow-hidden overflow-x-auto"
    >
      <ul class="flex whitespace-nowrap">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="pl-2 pr-4 text-center text-base leading-10"
          :class="{ active: checked === index }"
          @click="checkLi(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const items = ["领卷享折扣", "年末促销季", "景点通票", "礼卷包", "打折热卖区"]
let checked = ref(0)
const checkLi = (index: number) => {
  checked.value = index
}
</script>

<style scoped>
.active {
  color: #ff631b;
  font-weight: 600;
}
</style>
