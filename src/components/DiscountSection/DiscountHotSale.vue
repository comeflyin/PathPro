<template>
  <div class="p-4" ref="hotSale">
    <span class="font-semibold text-xl pb-2 flex">打折热卖区</span>
    <div class="bg-white rounded-2xl p-4 h-full">
      <!-- 标签 城市选择 -->
      <div class="cs flex overflow-hidden overflow-x-auto">
        <div
          v-for="(hotSale, index) in hotSaleInfo"
          :key="index"
          :class="{ active: checked === index }"
          @click="checkedCity(index)"
          class="text-nowrap whitespace-nowrap p-1 pl-3 pr-3 m-1 border rounded-3xl"
        >
          {{ hotSale.type }}
        </div>
      </div>
    </div>
    <div>
      <van-loading v-if="Lodding" class="flex justify-center" color="#ff5303" />
      <HotSaleList v-else class="px-4" :items="hotSaleList" :next="handleNextPage" />
      <van-loading v-if="hasMoreLodding" class="flex justify-center" />
      <van-back-top offset="2500" bottom="10vh" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, toRefs } from "vue"
import { useHotSaleStore } from "@/stores/hotSaleStore"
import HotSaleList from "@/components/DiscountSection/HotSaleList.vue"

const HotSaleStore = useHotSaleStore()
// 加载中
let Lodding = ref(false)
// 是否还有更多
const hasMoreLodding = ref(false)
// 选中的类型
let checked = ref(0)
// 当前页数
const currentPage = ref(1)
// 选择城市
const checkedCity = async (index: number) => {
  Lodding.value = true
  checked.value = index
  currentPage.value = 1
  await HotSaleStore.getHotSaleList(1, 6, checked.value)
  Lodding.value = false
}

// 分页获取热卖信息
onMounted(async () => {
  await HotSaleStore.getHotSaleList(1, 6, checked.value)
})

// 获取下一页
const handleNextPage = async (setHasMore: (value: boolean) => void) => {
  currentPage.value++
  hasMoreLodding.value = true
  const res = await HotSaleStore.getHotSaleList(currentPage.value, 6, checked.value)
  hasMoreLodding.value = false
  // 如果没有更多了，就不再触发
  if (!res.hasMore) {
    setHasMore(false)
  }
}

const { hotSaleInfo, hotSaleList } = toRefs(HotSaleStore)
</script>

<style scoped>
.active {
  @apply bg-[#ff5303] text-white font-semibold;
}
</style>
