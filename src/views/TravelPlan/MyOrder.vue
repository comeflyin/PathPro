<template>
  <div v-if="order.length > 0">我的订单</div>
  <div v-if="order.length == 0">
    <img src="../../assets/image/NoWait.png" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const order = ref([])
</script>

<style scoped></style>
