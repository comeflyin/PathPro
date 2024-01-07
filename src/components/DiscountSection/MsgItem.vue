<template>
  <div class="mt-2 mb-2" :class="{ flex: isflex, [`w-${width}`]: true }">
    <!-- 图片封面 -->
    <img :src="discount.cover" alt="" class="rounded-xl" :class="{ [`w-${widthimg}`]: true }" />
    <!-- 信息块 -->
    <div class="flex flex-col justify-center" :class="{ 'pl-2': isflex }">
      <!-- Exclusive Discount -->
      <div v-if="Exclusive">
        <span
          class="text-white bg-[#ff5b00] w-5/12 h-6 whitespace-nowrap rounded-lg text-sm font-semibold pl-2 pr-2 pt-1 pb-1"
        >
          Exclusive Discount
        </span>
      </div>
      <!-- 城市信息 -->
      <span class="text-sm text-[#7d7d7d] mt-1" v-if="discount.city">{{ discount.city }}</span>
      <!-- 优惠信息标题 -->
      <span
        class="text-sm font-semibold w-full overflow-hidden text-ellipsis"
        v-if="discount.title"
        :class="{ 'whitespace-nowrap': lines == 1, [`line-clamp-${lines}`]: lines != 1 }"
      >
        {{ discount.title }}
      </span>
      <!-- 评分与参与情况 -->
      <div class="text-sm flex-nowrap flex">
        <span class="text-[#f09b0a]"><van-icon name="star" />{{ discount.rating }}</span>
        <span
          class="text-[#9a9a9a] w-3/4 whitespace-nowrap overflow-hidden text-ellipsis"
          v-if="discount.evaluate && discount.participants"
        >
          <span v-if="discount.evaluate">({{ discount.evaluate }})</span
          ><span v-if="discount.evaluate || discount.participants">·</span
          ><span v-if="discount.participants"> {{ discount.participants }}+人参与 </span>
        </span>
      </div>
      <!-- 标签 -->
      <div class="flex mt-1 overflow-hidden flex-nowrap">
        <div
          class="mr-2 bg-[#f5f5f5] text-[#7d7d7d] pl-2 pr-2 rounded-xl text-xs flex items-center"
          v-for="(tag, index) in discount.tags"
          :key="index"
        >
          {{ tag }}
        </div>
      </div>
      <div>
        <!-- 价格 -->
        <span>￥{{ discount.price }}</span>
        <span class="text-sm ml-1">起</span>
      </div>
      <div class="overflew-hidden flex-nowrap whitespace-nowrap w-1/2">
        <!-- 打折信息 -->
        <span
          class="text-[#ff5b00] bg-[#fff0e5] text-xs text-center font-semibold rounded-lg mr-2 pl-2 pr-2 pt-1 pb-1"
          v-for="(discountMsg, index) in discount.discounts"
          :key="index"
        >
          {{ discountMsg }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface MsgItem {
  /** 优惠信息标题 */
  title?: string
  /** 封面 */
  cover?: string
  /** 评价人数 */
  evaluate?: number
  /** 评分 */
  rating?: number
  /** 参与人数 */
  participants?: string
  /** 城市 */
  city?: string
  /** 价格 */
  price?: number
  /** 打折信息 */
  discounts?: string[]
  /** 标签 */
  tags?: string[]
}

defineProps({
  // 是否在一行
  isflex: {
    type: Boolean,
    default: false,
  },
  // 多行省略
  lines: {
    type: Number,
    default: 1,
  },
  // 数据元
  discount: {
    type: Object as () => MsgItem,
    required: true,
  },
  // 整体宽度
  width: {
    type: String,
    default: "[48%]",
  },
  // 图片宽度
  widthimg: {
    type: String,
    default: "full",
  },
  // Exclusive
  Exclusive: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped></style>
