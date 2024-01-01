<template>
  <div class="p-4">
    <div class="pt-4">
      <div>
        <van-sticky class="">
          <div class="text-3xl font-bold bg-white">行程</div>
        </van-sticky>

        <van-tabs v-model:active="active" color="orange" title-active-color="orange" shrink sticky offset-top="33">
          <van-tab title="待出行" class="overflow-hidden">
            <TravelAgent />
          </van-tab>
          <van-tab title="订单">
            <TripOrder />
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import TravelAgent from "./TravelAgent.vue"
import TripOrder from "./TripOrder.vue"

const active = ref(0)
</script>
<style></style>
