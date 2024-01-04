<template>
  <div>
    <div class="overflow-scroll cs">
      <DiscountSectionHeader />
      <NavBar />
      <DiscountCoupon />
      <DiscountSection />
      <GiftPack />
    </div>
  </div>
</template>

<script setup lang="ts">
import DiscountSectionHeader from "@/components/DiscountSection/DiscountSectionHeader.vue"
import NavBar from "@/components/DiscountSection/NavBar.vue"
import DiscountCoupon from "@/components/DiscountSection/DiscountCoupon.vue"
import DiscountSection from "@/components/DiscountSection/DiscountSection.vue"
import GiftPack from "@/components/DiscountSection/GiftPack.vue"
</script>

<style>
.cs::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
