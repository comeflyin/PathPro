<template>
  <div class="cleanScroll overflow-hidden overflow-x-scroll">
    <div class="flex">
      <div class="w-48 h-40 mr-5 rounded-2xl shrink-0 border-solid border-2 border-slate-300"></div>
      <div class="w-48 h-40 mr-5 rounded-2xl shrink-0 border-solid border-2 border-slate-300"></div>
      <div class="w-48 h-40 mr-5 rounded-2xl shrink-0 border-solid border-2 border-slate-300"></div>
      <div
        class="w-20 h-40 rounded-2xl shrink-0 border-solid border-2 border-slate-300 flex justify-center items-center"
      >
        <div class="text-center">
          <div class="border-solid border-2 border-black rounded-full w-7 h-7">
            <van-icon name="arrow" />
          </div>
          <div class="text-xs mt-1">更多</div>
        </div>
      </div>
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
