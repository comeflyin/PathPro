<template>
  <div>
    <div class="flex rounded-xl mb-4">
      <MsgItem :discount="discounts[0]" width="98%" widthimg="48%" :isflex="true" :Exclusive="true" />
    </div>
    <div class="flex flex-wrap justify-between mt-2">
      <!-- 循环生成所有Item -->
      <MsgItem
        v-for="(item, index) in discounts"
        ref="items"
        :key="index"
        v-show="index > 0 && index < showCount"
        :discount="item"
        :lines="1"
        width="50%"
      />
    </div>
    <div
      class="text-center mt-2 underline"
      v-show="discounts.length >= 6 && showCount != discounts.length"
      @click="showMore"
    >
      查看更多<van-icon name="arrow-down" class="ml-2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DiscountItem } from "@/types/discount"
import { ref } from "vue"
import MsgItem from "./MsgItem.vue"

const items = ref<HTMLElement[]>([])

const { discounts } = defineProps<{
  discounts: DiscountItem[]
  leftTime: number
}>()

let showCount = ref(7)
function showMore() {
  showCount.value = discounts.length
  console.log(showCount.value)
}
</script>

<style scoped></style>
