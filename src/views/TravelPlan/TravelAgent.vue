<template>
  <div class="overflow-hidden">
    <div class="WaitOrder">
      <OrderList />
    </div>
    <div class="">
      <TravelMarketing />
    </div>
  </div>
</template>

<script setup lang="ts">
import OrderList from "@/components/TravelAgent/OrderList.vue"
import TravelMarketing from "@/components/TravelAgent/TravelMarketing.vue"
</script>
