<template>
  <div class="m-2 mt-5">
    <div class="m-2 mt-7 border rounded-3xl relative bg-[#ffe0ce] h-auto">
      <img
        src="https://res.klook.com/image/upload/fl_lossy.progressive,w_208,h_208,c_fill,q_85/v1677035412/UED_new/Platform/platform_deals_spot_illustration_2302/sales/value_pack.webp"
        alt=""
        class="absolute w-28 right-0 -top-4"
      />
      <!-- 标题 -->
      <span class="block text-lg font-semibold m-3 mb-2">礼卷包</span>
      <span class="m-3 mt-0 text-sm/[22px] inline-block w-52">预定多个热门景点，畅享超值优惠</span>
      <!-- 礼卷 -->
      <div class="bg-white rounded-2xl p-4 h-full border-neutral-200 border">
        <div class="flex rounded-xl mt-2 mb-2" v-for="(item, index) in giftsInfo" :key="index">
          <!-- 封面 -->
          <img :src="item.cover" alt="" class="w-2/5 h-auto rounded-xl" />
          <!-- 右详情信息 -->
          <div class="ml-3 flex flex-col justify-center w-1/2">
            <!-- 城市信息 -->
            <span class="text-sm text-[#7d7d7d] mt-1 flex-1">{{ item.city }}</span>
            <!-- 礼卷信息标题 -->
            <span class="flex-1 text-sm font-semibold w-11/12 whitespace-nowrap overflow-hidden text-ellipsis">
              {{ item.title }}
            </span>
            <div class="text-sm flex-nowrap flex flex-1">
              <!-- 参与人数 -->
              <span class="flex-1 text-[#9a9a9a] w-3/4 whitespace-nowrap overflow-hidden text-ellipsis">
                {{ item.participants }}+人参与
              </span>
            </div>
            <div class="flex-1">
              <!-- 价格 -->
              <span class="text-[#ff5b00]">￥{{ item.price }}</span>
            </div>
            <div class="flex-1 overflew-hidden flex-nowrap whitespace-nowrap w-1/2">
              <!-- 打折信息 -->
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGiftStore } from "@/stores/discountStore"
import { ref } from "vue"

const gifts = useGiftStore()
const giftsInfo = ref(gifts.giftsInfo)
</script>

<style scoped></style>
