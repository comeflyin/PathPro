<template>
  <div>
    <div class="cs relative">
      <!-- header -->
      <DiscountSectionHeader />
      <!-- 选项栏 -->
      <NavBar />
      <!-- 领卷享折扣 -->
      <DiscountCoupon />
      <!-- 精选优惠 -->
      <DiscountSection />
      <!-- 礼卷包 -->
      <GiftPack />
      <!-- 打折热卖 -->
      <DiscountHotSale />
    </div>
  </div>
</template>

<script setup lang="ts">
import DiscountSectionHeader from "@/components/DiscountSection/DiscountSectionHeader.vue"
import NavBar from "@/components/DiscountSection/NavBar.vue"
import DiscountCoupon from "@/components/DiscountSection/DiscountCoupon.vue"
import DiscountSection from "@/components/DiscountSection/DiscountSection.vue"
import GiftPack from "@/components/DiscountSection/GiftPack.vue"
import DiscountHotSale from "@/components/DiscountSection/DiscountHotSale.vue"
</script>

<style>
.cs::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
