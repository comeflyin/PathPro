import type { Order } from "../types/Order"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useOrderStore = defineStore("order", () => {
  const order = ref<Order[]>([
    {
      id: 1,
      img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_640,c_fill,q_85/activities/z5oxfvdbejb5s78qjwge.webp",
      name: "香港迪士尼门票",
      direction: "单程",
      type: "标准车厢",
      additon: "无额外附加",
      human: 1,
      childen: 1,
      old: 1,
      price: 1000,
    },
    {
      id: 2,
      img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_640,c_fill,q_85/activities/z5oxfvdbejb5s78qjwge.webp",
      name: "香港迪士尼门票",
      direction: "往返",
      type: "水晶车厢",
      additon: "小食餐具",
      human: 1,
      childen: 0,
      old: 0,
      price: 2000,
    },
  ])
  return {
    order,
  }
})
