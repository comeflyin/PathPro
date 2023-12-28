<template>
  <div>
    <RouterView />
    <TabBar class="absolute bottom-0" />
  </div>
</template>

<script setup lang="ts">
import TabBar from "@/views/layout/TabBar.vue"
</script>

<style scoped></style>
