<template>
  <div class="cs [&_div]:cleanScroll overflow-y-auto">
    <SOHead />
    <TopFix />
    <DiscountCoupon />
    <SelectOffers />
  </div>
</template>

<script setup lang="ts"></script>

<style>
@layer utilities {
  .cs {
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
}
@tailwind utilities;
</style>
