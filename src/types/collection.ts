export type Discount = {
  // 收藏类型
  category: string
  // 收藏信息列表
  collections: CollectionItem[]
}

export type CollectionItem = {
  /** 收藏信息标题 */
  title: string
  /** 封面 */
  cover: string
  /** 评分人数 */
  evaluate: number
  /** 评分 */
  rating: number
  /** 参与人数 */
  participants: string
  /** 价格 */
  price: number
  /** 打折信息 */
  discounts: string[]
  /** 标签 */
  tags: string[]
}
