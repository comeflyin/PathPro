<template>
  <!-- 我的订单页 -->
  <div v-if="order.order">
    <div v-for="item in order.order" :key="item.id">
      <MyBuyOrder
        :img="item.img"
        :name="item.name"
        :direction="item.direction"
        :type="item.type"
        :additon="item.additon"
        :human="item.human"
        :childen="item.childen"
        :old="item.old"
        :price="item.price"
      />
    </div>
  </div>
  <div v-else>
    <img src="../../assets/image/NoOrder.jpg" />
  </div>
  <div class="m-2 font-bold">热门活动</div>
  <div class="overflow-x-scroll scroll-auto scroll-mr-2 w-full rounded-lg flex">
    <div v-for="Activities in Activity.popularActivities" :key="Activities.id">
      <PopularActivity
        :img="Activities.img"
        :name="Activities.name"
        :star="Activities.star"
        :comment="Activities.comment"
        :oldPrice="Activities.oldPrice"
        :price="Activities.price"
      />
    </div>
  </div>
  <div class="text-center border-black border-2 mt-3 rounded-lg">
    <button>查看更多</button>
  </div>
</template>

<script setup lang="ts">
import { usePopularActivityStore } from "@/stores/PopularActivitiesStore"
import { useOrderStore } from "@/stores/OrderStore"
import PopularActivity from "@/components/TravelAgent/PopularActivity.vue"
import MyBuyOrder from "@/components/TravelAgent/MyBuyOrder.vue"

const Activity = usePopularActivityStore()
const order = useOrderStore()
console.log(order.order)
</script>

<style scoped></style>
