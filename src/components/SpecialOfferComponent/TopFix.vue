<template>
  <div class="mt-4 mb-3 flex justify-center items-center overflow-hidden h-20">
    <div
      class="topscroll ml-3 mr-3 w-11/12 h-12 border-slate-300 border-2 p-1 text-base rounded-xl pl-2 pr-2 overflow-hidden overflow-x-auto"
    >
      <ul class="flex whitespace-nowrap">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="pl-2 pr-4 text-center text-base leading-10"
          :class="{ active: check === index }"
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
let check = ref(0)
const checkLi = (index: number) => {
  check.value = index
}
</script>

<style scoped>
.topscroll::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.active {
  color: #ff631b;
  font-weight: 600;
}
</style>
