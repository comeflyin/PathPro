<template>
  <div>
    <div class="mt-2">
      <van-nav-bar
        title="所有目的地"
        left-arrow
        @click-left="
          () => {
            router.back()
          }
        "
      />
      <form action="/">
        <van-search
          v-model="value"
          show-action
          shape="round"
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
      <van-divider />
    </div>
    <div v-if="showDetail" class="mt-2">
      <SearchList />
    </div>
    <div v-else class="mt-2">
      <SearchBar />
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchBar from "@/components/TravelAgent/SearchBar.vue"
import SearchList from "@/components/TravelAgent/SearchList.vue"
import { useRouter } from "vue-router"
import { ref } from "vue"
const router = useRouter()

const value = ref("")
const showDetail = ref(false)

function onSearch() {
  showDetail.value = true
}
function onCancel() {
  showDetail.value = false
}
</script>

<style scoped></style>
