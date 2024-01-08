<template>
  <div
    class="flex justify-center items-center overflow-hidden sticky top-0 z-10"
    :class="{ 'sticky-active': isSticky, 'shadow-bottom': isSticky }"
    ref="stickyElement"
  >
    <div
      id="sticky"
      class="cs ml-3 mr-3 w-11/12 h-12 border-slate-300 border-2 p-1 text-base rounded-xl pl-2 pr-2 overflow-hidden overflow-x-auto transition-all"
      :class="{ 'border-white': isSticky, 'w-full': isSticky }"
    >
      <ul class="flex whitespace-nowrap">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="pl-2 pr-4 text-center text-base leading-10"
          :class="{ active: checked === index }"
          @click="scrollToSection(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"
const items = ["领卷享折扣", "年末促销季", "礼卷包", "打折热卖区"]
interface section {
  id: string
}
const sections = ref([
  {
    id: "coupon",
  },
  {
    id: "section",
  },
  {
    id: "giftPack",
  },
  {
    id: "hotSale",
  },
])
// 选中元素
let checked = ref(0)

// 选中样式 滚动至对应位置
const scrollToSection = (index: number) => {
  checked.value = index
  // 获取对应的 section id
  const sectionId = sections.value[index].id
  // 获取对应的元素
  const element = document.getElementById(sectionId)
  // 滚动至对应位置
  if (element) {
    const elementTop = element.getBoundingClientRect().top + window.scrollY

    window.scrollTo({
      top: elementTop - (stickyElement.value?.offsetHeight || 0),
      behavior: "smooth",
    })
  }
}

// 处理滚动事件
const handleScroll = () => {
  // 获取元素
  // const stickyElement = $refs.stickyElement
  // 获取所有 div
  const sectiondivs: HTMLElement[] = []
  sections.value.forEach((section: section) => {
    const element = document.getElementById(section.id)
    if (element) {
      sectiondivs.push(element)
    }
  })

  // 获取滚动位置
  const scrollY = window.scrollY
  // 当前处于视口中的 div 的索引
  let foundSectionIndex = -1

  // 根据滚动位置判断当前处于视口中的 div
  sectiondivs.forEach((section: HTMLElement, index: number) => {
    // 获取 div 的上下边界
    const sectionTop = section.offsetTop - 49
    const sectionBottom = sectionTop + section.offsetHeight + 49
    // 判断滚动位置是否在 div 的上下边界之间
    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      foundSectionIndex = index
      checked.value = index
    }
  })

  // 更新选中样式
  if (foundSectionIndex !== -1) {
    checked.value = foundSectionIndex
  }
}

onMounted(() => {
  // 添加滚动监听
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  // 移除滚动监听
  window.removeEventListener("scroll", handleScroll)
})

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
