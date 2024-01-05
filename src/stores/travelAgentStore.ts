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
              img: "222",
            },
            {
              city: "上海",
              img: "222",
            },
            {
              city: "广州",
              img: "222",
            },
            {
              city: "深圳",
              img: "222",
            },
            {
              city: "杭州",
              img: "222",
            },
            {
              city: "成都",
              img: "222",
            },
            {
              city: "重庆",
              img: "222",
            },
            {
              city: "西安",
              img: "222",
            },
          ],
        },
        {
          title: "中国香港&中国澳门",
          cityItem: [
            {
              city: "中国香港",
              img: "222",
            },
            {
              city: "中国澳门",
              img: "222",
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
