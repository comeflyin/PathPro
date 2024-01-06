import type { DiscountItem } from "@/types/discount"

export type HotSale = {
  /** 热卖类型 */
  type: string
  /** 热卖信息列表 */
  hotSales: HotSaleItem[]
}

type HotSaleItem = Omit<DiscountItem, "discounts" | "participants" | "tags">
