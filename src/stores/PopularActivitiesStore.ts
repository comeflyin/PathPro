import type { PopularActivities } from "../types/popularactivities"
import { defineStore } from "pinia"
import { ref } from "vue"

export const usePopularActivityStore = defineStore("popularActivities", () => {
  const popularActivities = ref<PopularActivities[]>([
    {
      id: 1,
      img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_640,c_fill,q_85/activities/z5oxfvdbejb5s78qjwge.webp",
      name: "香港迪士尼门票",
      star: 4.8,
      comment: 151783,
      oldPrice: 584,
      price: 538,
    },
    {
      id: 2,
      img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_640,c_fill,q_85/activities/z5oxfvdbejb5s78qjwge.webp",
      name: "昂坪360缆车门票",
      star: 4.7,
      comment: 45519,
      price: 178,
    },
    {
      id: 3,
      img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_640,c_fill,q_85/activities/z5oxfvdbejb5s78qjwge.webp",
      name: "日本环球影城门票",
      star: 4.8,
      comment: 31377,
      price: 425,
    },
    {
      id: 4,
      img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_640,c_fill,q_85/activities/z5oxfvdbejb5s78qjwge.webp",
      name: "香港机场快线车票",
      star: 4.9,
      comment: 301702,
      oldPrice: 59,
      price: 53,
    },
    {
      id: 5,
      img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_640,c_fill,q_85/activities/z5oxfvdbejb5s78qjwge.webp",
      name: "香港海洋公园门票",
      star: 4.7,
      comment: 67547,
      price: 354,
    },
    {
      id: 6,
      img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_640,c_fill,q_85/activities/z5oxfvdbejb5s78qjwge.webp",
      name: "香港-澳门喷射飞航船票",
      star: 4.7,
      comment: 18673,
      price: 159,
    },
    {
      id: 7,
      img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_640,c_fill,q_85/activities/z5oxfvdbejb5s78qjwge.webp",
      name: "香港-澳门金光飞航船票",
      star: 4.7,
      comment: 7828,
      price: 159,
    },
    {
      id: 8,
      img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_640,c_fill,q_85/activities/z5oxfvdbejb5s78qjwge.webp",
      name: "JRPass全日本铁路通票",
      star: 4.8,
      comment: 23875,
      price: 2468,
    },
    {
      id: 9,
      img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_640,c_fill,q_85/activities/z5oxfvdbejb5s78qjwge.webp",
      name: "【低至买2送1】PLAYI 香港博宁酒店",
      star: 4.5,
      comment: 849,
      oldPrice: 329,
      price: 263,
    },
  ])
  return {
    popularActivities,
  }
})
