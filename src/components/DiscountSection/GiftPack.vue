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
        <MsgItem
          v-for="(item, index) in giftsInfo"
          :key="index"
          :discount="item"
          :isflex="true"
          :width="'full'"
          :widthimg="'2/5'"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGiftStore } from "@/stores/discountStore"
import { ref } from "vue"
import MsgItem from "./MsgItem.vue"

const gifts = useGiftStore()
const giftsInfo = ref(gifts.giftsInfo)
</script>

<style scoped></style>
