import type { DiscountItem } from "@/types/discount"

export type Gifts = Omit<DiscountItem, "evaluate" | "rating" | "tags">
