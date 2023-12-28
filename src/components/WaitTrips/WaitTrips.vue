<template>
  <div class="overflow-hidden">
    <div class="WaitOrder">
      <WaitTripOrder />
    </div>
    <div class="">
      <WaitDetail />
    </div>
  </div>
</template>

<script setup lang="ts">
import WaitTripOrder from "./WaitTripOrder.vue"
import WaitDetail from "./WaitDetail.vue"
</script>
