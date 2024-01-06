<template>
  <div>
    <van-dropdown-menu
      :overlay="false"
      class="text-left border-0 [&_.van-dropdown-menu\_\_bar]:shadow-none [&_.van-dropdown-menu\_\_item]:justify-start"
    >
      <van-dropdown-item
        v-model="value"
        :options="option"
        class="w-40"
        @click="
          () => {
            router.push({ name: routerName })
          }
        "
      />
    </van-dropdown-menu>
  </div>
  <router-view />
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import type { DropdownItemOption } from "vant/es"
import { useRouter } from "vue-router"

const router = useRouter()
const value = ref(0)
const nameFilter: {
  [key: number]: string
} = {
  0: "MyOrder",
  1: "FailPayOrder",
  2: "SealeOrder",
}
const routerName = computed(() => {
  return nameFilter[value.value]
})
const option: DropdownItemOption[] = [
  { text: "我的订单", value: 0 },
  { text: "支付失效订单", value: 1 },
  { text: "已封存订单", value: 2 },
]
</script>

<style scoped></style>
