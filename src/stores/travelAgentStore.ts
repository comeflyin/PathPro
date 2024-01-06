import { defineStore } from "pinia"
import type { TravelAgent } from "@/types/travelAgent"
import { ref } from "vue"

export const usetravelAgent = defineStore("travelAgent", () => {
  const travelAgentInfo = ref<TravelAgent[]>([
    {
      area: "东亚",
      region: [
        {
          title: "中国内地",
          cityItem: [
            {
              city: "北京",
              img: "@/assets/image/NoWait.png",
            },
            {
              city: "上海",
              img: "@/assets/image/NoWait.png",
            },
            {
              city: "广州",
              img: "@/assets/image/NoWait.png",
            },
            {
              city: "深圳",
              img: "@/assets/image/NoWait.png",
            },
            {
              city: "杭州",
              img: "@/assets/image/NoWait.png",
            },
            {
              city: "成都",
              img: "@/assets/image/NoWait.png",
            },
            {
              city: "重庆",
              img: "@/assets/image/NoWait.png",
            },
            {
              city: "西安",
              img: "@/assets/image/NoWait.png",
            },
          ],
        },
        {
          title: "中国香港&中国澳门",
          cityItem: [
            {
              city: "中国香港",
              img: "@/assets/image/NoWait.png",
            },
            {
              city: "中国澳门",
              img: "@/assets/image/NoWait.png",
            },
          ],
        },
        {
          title: "中国台湾",
          cityItem: [
            {
              city: "中国台湾",
              img: "@/assets/image/NoWait.png",
            },
          ],
        },
      ],
    },
  ])
  return {
    travelAgentInfo,
  }
})
