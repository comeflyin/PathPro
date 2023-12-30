<template>
  <div>
    <div class="h-[93vh] overflow-scroll cs">
      <SOHead />
      <TopFix />
      <DiscountCoupon />
      <SelectOffers />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
@layer utilities {
  .cs::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}
@tailwind utilities;
</style>
