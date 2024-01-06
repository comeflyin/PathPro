<template>
  <div class="w-screen h-screen bg-[#f6f6f6]">
    <van-nav-bar title="帮助中心" left-arrow @click-left="onClickLeft" />
    <div
      class="flex flex-col w-full h-96 bg-cover"
      style="
        background-image: url(https://th.bing.com/th/id/OIP.0-8KaD4ntl-KaJrrb-S_KQHaGO?w=181&h=180&c=7&r=0&o=5&pid=1.7);
      "
    >
      <span class="text-white text-2xl p-2">需要什么协助吗？</span>
      <div class="bg-white mx-10 h-20 rounded-lg flex items-center my-2">
        <img
          class="w-20 p-4"
          src="https://th.bing.com/th/id/OIP.a_2XJOKnYxsnGU-tYazCWwHaF7?w=231&h=185&c=7&r=0&o=5&pid=1.7"
          alt=""
        />
        <span class="font-bold text-lg">查看订单状态</span>
      </div>
      <div class="bg-white mx-10 h-20 rounded-lg flex items-center my-2">
        <img
          class="w-20 p-4"
          src="https://th.bing.com/th/id/OIP.a_2XJOKnYxsnGU-tYazCWwHaF7?w=231&h=185&c=7&r=0&o=5&pid=1.7"
          alt=""
        />
        <span class="font-bold text-lg">更改订单</span>
      </div>
      <div class="bg-white mx-10 h-20 rounded-lg flex items-center my-2">
        <img
          class="w-20 p-4"
          src="https://th.bing.com/th/id/OIP.a_2XJOKnYxsnGU-tYazCWwHaF7?w=231&h=185&c=7&r=0&o=5&pid=1.7"
          alt=""
        />
        <span class="font-bold text-lg">取消订单</span>
      </div>
    </div>
    <div class="w-full h-28">
      <h2 class="p-2 font-bold">搜索常见问题</h2>
      <van-search placeholder="搜索常见问题" background="#f6f6f6" @search="onSearch" class="p-2" />
    </div>
    <div class="p-2 bg-white">
      <h2 class="font-bold ml-2">热门常见问题</h2>
      <van-collapse v-model="activeNames">
        <van-collapse-item title="标题1" name="1">
          <div class="text-gray-500">代码是写出来给人看的，附带能在机器上运行。</div>
        </van-collapse-item>
        <van-collapse-item title="标题2" name="2"> 技术无非就是那些开发它的人的共同灵魂。 </van-collapse-item>
        <van-collapse-item title="标题3" name="3">
          在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const onClickLeft = () => {
  history.back()
}
const onSearch = (value: string) => {
  console.log(value)
}
const activeNames = ref(["1"])
</script>

<style scoped>
:deep(.van-icon-arrow-left) {
  @apply text-gray-400 text-lg font-bold;
}

:deep(.van-collapse-item__content) {
  @apply bg-[#f6f6f6];
}
</style>
