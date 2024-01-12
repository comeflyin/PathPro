import type { HotSale, HotSaleItem } from "@/types/hotSale"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useHotSaleStore = defineStore("hotSale", () => {
  const hotSaleInfo = ref<HotSale[]>([
    {
      type: "全部",
      hotSales: [
        {
          title: "【限时优惠】深圳野生动物园门票这里是一段测试没有数据自己写",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
      ],
    },
    {
      type: "住宿套餐",
      hotSales: [
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
      ],
    },
    {
      type: "WiFi & SIM卡",
      hotSales: [
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
      ],
    },
    {
      type: "包车",
      hotSales: [
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
      ],
    },
    {
      type: "游览",
      hotSales: [
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
      ],
    },
    {
      type: "主题乐园",
      hotSales: [
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
      ],
    },
    {
      type: "地道美食",
      hotSales: [
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
      ],
    },
    {
      type: "历史古迹",
      hotSales: [
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
        {
          title: "【限时优惠】深圳野生动物园门票",
          cover:
            "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,h_534,c_fill,q_85/activities/ma4qfzieqwesrubuex8d.webp",
          evaluate: 1277,
          rating: 4.7,
          city: "深圳",
          price: 199,
        },
      ],
    },
  ])
  const hotSaleList = ref<HotSaleItem[]>([])
  const hotSaleIndex = ref(0)
  /**
   * 获取热卖列表
   * @param page // 页码
   * @param size // 每页条数
   * @param index // 当前选中的tab索引
   * @returns
   */
  const getHotSaleList = (page: number, size: number, index: number) => {
    return new Promise<{
      data: HotSaleItem[] // 当前页数据
      page: number // 当前页码
      total: number // 总条数
      hasMore: boolean // 是否还有更多
    }>((resolve) => {
      if (index !== hotSaleIndex.value) {
        hotSaleList.value = []
        hotSaleIndex.value = index
      }
      setTimeout(() => {
        const data = hotSaleInfo.value[index].hotSales.slice((page - 1) * size, page * size)
        hotSaleList.value = [...hotSaleList.value, ...data]
        resolve({
          data,
          page,
          total: hotSaleList.value.length,
          hasMore: page * size < hotSaleInfo.value[index].hotSales.length,
        })
      }, 1000)
    })
  }

  return {
    hotSaleInfo,
    hotSaleList,
    getHotSaleList,
  }
})
