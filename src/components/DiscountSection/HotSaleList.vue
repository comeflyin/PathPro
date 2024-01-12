<template>
  <div class="list-wrapper flex flex-wrap items-center">
    <div class="item flex-[0_0_50%]" v-for="(item, index) in items" :key="index">
      <MsgItem
        :key="index"
        :discount="item"
        :lines="2"
        width="100%"
        :ref="(el) => (index === items.length - 1 ? (itemRef = el as HTMLElement) : '')"
      />
    </div>
  </div>
  <div class="text-center" v-if="!hasMore">没有更多了</div>
</template>

<script setup lang="ts">
import type { HotSaleItem } from "@/types/hotSale"
// import HotSaleCard from "./HotSaleCard.vue"
import useIntersectionObserver from "@/hooks/useIntersectionObserver"
import { ref } from "vue"

defineOptions({
  inheritAttrs: false,
})

const itemRef = ref<HTMLElement | null>(null)

const props = defineProps<{
  items: HotSaleItem[]
  /** 获取下一页的方法 */
  next?: (setHasMore: (value: boolean) => void) => void
}>()

// itemRef 最后一个元素的引用
const { hasMore, setHasMore } = useIntersectionObserver(itemRef, () => {
  // 当最后一个元素出现在视口时，触发回调函数
  // 调用父组件传递的 next 方法，加载下一页
  props.next?.(setHasMore)
})
</script>

<style scoped></style>
