<template>
  <div>
    <div class="mt-4">
      <span class="text-2xl font-bold">下一站目的地</span>
      <div class="bg-white px-4 border-2 h-20 w-full rounded-md mt-4 bg-secondary justify-between flex items-center">
        <div class="flex">
          <i class="iconfont icon-dingwei"></i>
          <div class="ml-2">
            <span class="block">当前位置</span>
            <span class="text-red-500">无法获取您的当前位置</span>
          </div>
        </div>
        <i class="iconfont icon-xiangyoujiantou"></i>
      </div>
    </div>
    <div>
      <div class="flex w-screen justify-between">
        <div class="w-1/2 pr-8">
          <div v-for="(item, index) in nums" :key="index" class="bg-gray-200 border-2 h-48 rounded-md mt-4">
            {{ item }}
          </div>
        </div>

        <div class="w-1/2 pr-2">
          <div v-for="(item, index) in nums" :key="index" class="bg-gray-200 border-2 h-48 rounded-md mt-4">
            {{ item }}
          </div>
        </div>
      </div>
      <div class="w-full rounded-md bg-red-400 mt-4 p-4">
        <span class="text-white text-2xl font-bold block mb-6">不知道去哪玩? KLOOK客路带您去看看</span>
        <button class="bg-white text-red-500 text-lg font-bold mt-4 text-center w-full rounded-md h-10">
          <i class="iconfont icon-sahua mr-4"></i>
          前往探索
        </button>
      </div>
      <div class="text-center underline mt-4">
        <router-link :to="{ name: 'MoreCity' }">查看更多城市</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const nums = ref(2)
</script>

<style scoped>
@import "https://at.alicdn.com/t/c/font_4386185_p21uuns0g6.css";
.icon-dingwei {
  font-size: 20px;
  color: #000;
}
.icon-xiangyoujiantou {
  font-size: 20px;
  color: #000;
}
</style>
