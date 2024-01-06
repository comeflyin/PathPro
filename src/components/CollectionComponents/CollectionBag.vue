<template>
  <div class="cleanScroll overflow-hidden overflow-x-scroll">
    <div class="flex">
      <div class="w-48 h-40 bg-teal-100 ml-5 rounded-2xl shrink-0"></div>
      <div class="w-48 h-40 bg-teal-100 ml-5 rounded-2xl shrink-0"></div>
      <div class="w-48 h-40 bg-teal-100 ml-5 rounded-2xl shrink-0"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.cleanScroll::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
