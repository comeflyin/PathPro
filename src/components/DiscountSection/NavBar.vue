<template>
  <div
    class="mt-4 mb-3 flex justify-center items-center overflow-hidden sticky top-0 z-10"
    :class="{ 'sticky-active': isSticky, 'shadow-bottom': isSticky }"
    ref="stickyElement"
  >
    <div
      class="cs ml-3 mr-3 w-11/12 h-12 border-slate-300 border-2 p-1 text-base rounded-xl pl-2 pr-2 overflow-hidden overflow-x-auto transition-all"
      :class="{ 'border-white': isSticky, 'w-full': isSticky }"
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
import { ref, onMounted, onUnmounted } from "vue"
const items = ["领卷享折扣", "年末促销季", "景点通票", "礼卷包", "打折热卖区"]
// 选中元素
let checked = ref(0)
// 选中样式
const checkLi = (index: number) => {
  checked.value = index
}

const stickyElement = ref<HTMLElement | null>(null)
const isSticky = ref(false)
const checkStickiness = () => {
  // 使用 if 语句来确保 stickyElement.value 不为 null
  if (stickyElement.value) {
    isSticky.value = stickyElement.value.getBoundingClientRect().top <= 0
  } else {
    isSticky.value = false
  }
}

onMounted(() => {
  window.addEventListener("scroll", checkStickiness)
  // 初始检查
  checkStickiness()
})

onUnmounted(() => {
  window.removeEventListener("scroll", checkStickiness)
})
</script>

<style scoped>
.active {
  color: #ff631b;
  font-weight: 600;
}
.sticky-active {
  background: #ffffff;
}
.shadow-bottom {
  box-shadow:
    0 4px 4px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
