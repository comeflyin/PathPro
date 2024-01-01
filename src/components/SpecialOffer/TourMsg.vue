<template>
  <div>
    <div class="flex rounded-xl mb-4">
      <img :src="ticketMsgs[0].img" alt="" class="w-1/2 rounded-xl" />
      <div class="ml-3 flex flex-col justify-center w-1/2">
        <div>
          <span
            class="text-white bg-[#ff5b00] w-5/12 h-6 whitespace-nowrap rounded-lg text-sm font-semibold pl-2 pr-2 pt-1 pb-1"
          >
            Exclusive Discount
          </span>
        </div>
        <span class="text-sm text-[#7d7d7d] mt-1">{{ ticketMsgs[0].adress }}</span>
        <span class="text-sm font-semibold w-11/12 whitespace-nowrap overflow-hidden text-ellipsis">
          {{ ticketMsgs[0].name }}
        </span>
        <div class="text-sm flex-nowrap flex">
          <span class="text-[#f09b0a]"><van-icon name="star" />{{ ticketMsgs[0].point }}</span>
          <span class="text-[#9a9a9a] w-3/4 whitespace-nowrap overflow-hidden text-ellipsis">
            ({{ ticketMsgs[0].evaluate }})·{{ ticketMsgs[0].join }}+人参与
          </span>
        </div>
        <div class="flex mt-1 overflow-hidden flex-nowrap">
          <div
            class="mr-2 bg-[#f5f5f5] text-[#7d7d7d] pl-2 pr-2 rounded-xl text-xs flex items-center"
            v-for="(item, index) in ticketMsgs[0].tag"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
        <div>
          <span>￥{{ ticketMsgs[0].price }}</span>
          <span class="text-sm ml-1">起</span>
        </div>
        <div class="overflew-hidden flex-nowrap whitespace-nowrap w-1/2">
          <span
            class="text-[#ff5b00] bg-[#fff0e5] text-xs text-center font-semibold rounded-lg mr-2 pl-2 pr-2 pt-1 pb-1"
            v-for="(discountMsg, index) in ticketMsgs[0].discountMsgs"
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
        v-for="(ticketMsg, index) in ticketMsgs"
        :key="index"
        v-show="index > 0 && index < showCount"
      >
        <img :src="ticketMsg.img" alt="" class="w-full rounded-xl" />
        <div class="flex flex-col justify-center">
          <span class="text-sm text-[#7d7d7d] mt-1">{{ ticketMsg.adress }}</span>
          <span class="text-sm font-semibold w-full whitespace-nowrap overflow-hidden text-ellipsis">
            {{ ticketMsg.name }}
          </span>
          <div class="text-sm flex-nowrap flex">
            <span class="text-[#f09b0a]"><van-icon name="star" />{{ ticketMsg.point }}</span>
            <span class="text-[#9a9a9a] w-3/4 whitespace-nowrap overflow-hidden text-ellipsis">
              ({{ ticketMsg.evaluate }})·{{ ticketMsg.join }}+人参与
            </span>
          </div>
          <div class="flex mt-1 overflow-hidden flex-nowrap">
            <div
              class="mr-2 bg-[#f5f5f5] text-[#7d7d7d] pl-2 pr-2 rounded-xl text-xs flex items-center"
              v-for="(item, index) in ticketMsg.tag"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
          <div>
            <span>￥{{ ticketMsg.price }}</span>
            <span class="text-sm ml-1">起</span>
          </div>
          <div class="overflew-hidden flex-nowrap whitespace-nowrap w-1/2">
            <span
              class="text-[#ff5b00] bg-[#fff0e5] text-xs text-center font-semibold rounded-lg mr-2 pl-2 pr-2 pt-1 pb-1"
              v-for="(discountMsg, index) in ticketMsg.discountMsgs"
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
      v-show="ticketMsgs.length >= 6 && showCount != ticketMsgs.length"
      @click="showMore"
    >
      查看更多<van-icon name="arrow-down" class="ml-2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const { ticketMsgs } = defineProps({
  ticketMsgs: Object,
})
let showCount = ref(7)
function showMore() {
  showCount.value = ticketMsgs.length
  console.log(showCount.value)
}
</script>

<style scoped></style>
