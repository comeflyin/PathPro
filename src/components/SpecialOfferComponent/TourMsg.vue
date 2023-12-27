<template>
  <div>
    <div class="flex">
      <div>
        <img src="./img/东京三丽鸥.png" alt="" class="w-44 h-auto rounded-xl" />
      </div>
      <div class="ml-3 mr-2 flex flex-col justify-center">
        <div class="text-white bg-[#ff5b00] h-6 rounded-lg text-sm font-semibold flex items-center justify-center">
          Exclusive Discount
        </div>
        <span class="text-sm text-[#7d7d7d] mt-1">{{ data.adress }}</span>
        <span class="text-sm font-semibold">{{ data.name }}</span>
        <div class="text-sm whitespace-nowrap overflow-hidden">
          <span class="text-[#f09b0a]"><van-icon name="star" />{{ data.point }}</span>
          <span class="text-[#9a9a9a]">({{ data.evaluate }})·{{ data.join }}+人参与</span>
        </div>
        <div class="flex mt-1">
          <div class="mr-2 bg-[#f5f5f5] text-[#7d7d7d] pl-2 pr-2 rounded-xl text-xs flex items-center">热卖</div>
          <div class="mr-2 bg-[#f5f5f5] text-[#7d7d7d] pl-2 pr-2 rounded-xl text-xs flex items-center">轻松退款</div>
        </div>
        <div>
          <span>￥{{ data.price }}</span>
          <span class="text-sm ml-1">起</span>
        </div>
        <div class="text-[#ff5b00] bg-[#fff0e5] text-sm text-center w-24 rounded-lg">{{ data.discountMsg }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const data = {
  name: "东京三丽鸥彩虹乐园门票",
  evaluate: 4273,
  point: 4.7,
  join: "200k",
  adress: "东京",
  price: 165,
  discountMsg: "最高25%折扣",
}
</script>

<style scoped></style>
