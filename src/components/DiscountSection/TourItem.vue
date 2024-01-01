<template>
  <div>
    <div class="flex rounded-xl mb-4">
      <img :src="discounts[0].cover" alt="" class="w-1/2 rounded-xl" />
      <div class="ml-3 flex flex-col justify-center w-1/2">
        <div>
          <span
            class="text-white bg-[#ff5b00] w-5/12 h-6 whitespace-nowrap rounded-lg text-sm font-semibold pl-2 pr-2 pt-1 pb-1"
          >
            Exclusive Discount
          </span>
        </div>
        <span class="text-sm text-[#7d7d7d] mt-1">{{ discounts[0].city }}</span>
        <span class="text-sm font-semibold w-11/12 whitespace-nowrap overflow-hidden text-ellipsis">
          {{ discounts[0].title }}
        </span>
        <div class="text-sm flex-nowrap flex">
          <span class="text-[#f09b0a]"><van-icon name="star" />{{ discounts[0].rating }}</span>
          <span class="text-[#9a9a9a] w-3/4 whitespace-nowrap overflow-hidden text-ellipsis">
            ({{ discounts[0].evaluate }})·{{ discounts[0].participants }}+人参与
          </span>
        </div>
        <div class="flex mt-1 overflow-hidden flex-nowrap">
          <div
            class="mr-2 bg-[#f5f5f5] text-[#7d7d7d] pl-2 pr-2 rounded-xl text-xs flex items-center"
            v-for="(item, index) in discounts[0].tags"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
        <div>
          <span>￥{{ discounts[0].price }}</span>
          <span class="text-sm ml-1">起</span>
        </div>
        <div class="overflew-hidden flex-nowrap whitespace-nowrap w-1/2">
          <span
            class="text-[#ff5b00] bg-[#fff0e5] text-xs text-center font-semibold rounded-lg mr-2 pl-2 pr-2 pt-1 pb-1"
            v-for="(discountMsg, index) in discounts[0].discounts"
            :key="index"
          >
            {{ discountMsg }}
          </span>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-between mt-2">
      <div
        class="w-[48%] mt-2 mb-2"
        v-for="(item, index) in discounts"
        :key="index"
        v-show="index > 0 && index < showCount"
      >
        <img :src="item.cover" alt="" class="w-full rounded-xl" />
        <div class="flex flex-col justify-center">
          <span class="text-sm text-[#7d7d7d] mt-1">{{ item.city }}</span>
          <span class="text-sm font-semibold w-full whitespace-nowrap overflow-hidden text-ellipsis">
            {{ item.title }}
          </span>
          <div class="text-sm flex-nowrap flex">
            <span class="text-[#f09b0a]"><van-icon name="star" />{{ item.rating }}</span>
            <span class="text-[#9a9a9a] w-3/4 whitespace-nowrap overflow-hidden text-ellipsis">
              ({{ item.evaluate }})·{{ item.participants }}+人参与
            </span>
          </div>
          <div class="flex mt-1 overflow-hidden flex-nowrap">
            <div
              class="mr-2 bg-[#f5f5f5] text-[#7d7d7d] pl-2 pr-2 rounded-xl text-xs flex items-center"
              v-for="(tag, index) in item.tags"
              :key="index"
            >
              {{ tag }}
            </div>
          </div>
          <div>
            <span>￥{{ item.price }}</span>
            <span class="text-sm ml-1">起</span>
          </div>
          <div class="overflew-hidden flex-nowrap whitespace-nowrap w-1/2">
            <span
              class="text-[#ff5b00] bg-[#fff0e5] text-xs text-center font-semibold rounded-lg mr-2 pl-2 pr-2 pt-1 pb-1"
              v-for="(discountMsg, index) in item.discounts"
              :key="index"
            >
              {{ discountMsg }}
            </span>
          </div>
        </div>
      </div>
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
