import { defineStore } from "pinia"
import { ref } from "vue"

export const useCouterStore = defineStore("counter", () => {
  const count = ref(0)
  const increment = () => count.value++
  return {
    count,
    increment,
  }
})
