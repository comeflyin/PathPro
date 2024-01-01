<template>
  <div>
    <van-sticky class="">
      <div class="text-3xl font-bold bg-white">行程</div>
    </van-sticky>

    <van-tabs v-model:active="active" color="orange" title-active-color="orange" shrink sticky offset-top="33">
      <van-tab title="待出行" class="overflow-hidden">
        <WaitTrips />
      </van-tab>
      <van-tab title="订单">
        <TripsOrder />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import WaitTrips from "@/components/WaitTrips/WaitTrips.vue"
import TripsOrder from "@/components/TripsOrder/TripsOrder.vue"

const active = ref(0)
</script>
