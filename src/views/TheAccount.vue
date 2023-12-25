<template>
  <div class="w-screen h-screen overflow-y-auto p-4 bg-[#f6f6f6]">
    <!-- avatar -->
    <div class="flex items-center">
      <van-image round width="4rem" height="4rem" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
      <div class="ml-4">
        <div class="font-bold text-lg">Klook客路用户</div>
        <div class="mt-1 text-xs text-[#2d72c8]">个人信息管理<van-icon class="ml-1" name="arrow" /></div>
      </div>
    </div>
    <div class="w-full h-20 bg-[#fff] my-4 rounded-lg flex items-center p-2 text-sm">
      <div class="flex-1 flex flex-col items-center">
        <span class="font-bold">+</span>
        <span>优惠码</span>
      </div>
      <van-divider vertical :hairline="false" :style="{ height: '40px' }" />
      <div class="flex-1 flex flex-col items-center">
        <span class="font-bold">0</span>
        <span>积分</span>
      </div>
    </div>
    <div class="bg-[#fff] mb-2 rounded-lg">
      <van-cell
        icon="location-o"
        title="我的订单"
        title-style="font-size:14px;font-weight:bold;"
        is-link
        size="large"
      />
      <van-cell
        icon="location-o"
        title="我的订单"
        title-style="font-size:14px;font-weight:bold;"
        label="管理出行人信息、地址和支付方式"
        is-link
        size="large"
      />
      <van-cell
        icon="location-o"
        title="我的订单"
        title-style="font-size:14px;font-weight:bold;"
        is-link
        size="large"
      />
      <van-cell
        icon="location-o"
        title="我的订单"
        title-style="font-size:14px;font-weight:bold;"
        is-link
        size="large"
      />
      <van-cell
        icon="location-o"
        title="我的订单"
        title-style="font-size:14px;font-weight:bold;"
        is-link
        size="large"
      />
    </div>
    <div class="mb-2">
      <van-cell
        icon="location-o"
        title="我的订单"
        title-style="font-size:14px;font-weight:bold;"
        is-link
        size="large"
      />
      <van-cell
        icon="location-o"
        title="我的订单"
        title-style="font-size:14px;font-weight:bold;"
        is-link
        size="large"
      />
    </div>
    <div class="flex bg-[#fff] p-2 mb-2 rounded-lg">
      <div class="flex-1 flex flex-col ml-3">
        <h3 class="text-sm font-bold">klook容易使用和理解吗?</h3>
        <span class="text-xs my-2">想听听您的意见!</span>
        <van-button type="danger">填写问卷</van-button>
      </div>
      <div class="w-24 h-24">
        <img src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" alt="" />
      </div>
    </div>
    <div class="flex bg-[#fff] p-2 mb-2 rounded-lg">
      <div class="flex-1 flex flex-col ml-3">
        <h3 class="text-sm font-bold">获得优惠</h3>
        <span class="text-xs my-2">每成功邀请一位好友可获得￥20旅行基金</span>
        <van-button type="danger">填写问卷</van-button>
      </div>
      <div class="w-28 h-28">
        <img src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
:deep(.van-cell__label) {
  @apply text-xs text-[#787878];
}
:deep(.van-button) {
  @apply text-xs w-20 h-6 bg-[#ff5c01] text-[#fff];
}
</style>
