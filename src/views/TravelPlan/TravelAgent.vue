<template>
  <!-- 待出行 -->
  <div class="overflow-hidden">
    <div class="WaitOrder">
      <!-- 待出行订单 -->
      <OrderList />
    </div>
    <div class="">
      <!-- 待出行城市 -->
      <TravelMarketing />
    </div>
  </div>
</template>

<script setup lang="ts">
import OrderList from "@/components/TravelAgent/OrderList.vue"
import TravelMarketing from "@/components/TravelAgent/TravelMarketing.vue"
</script>
