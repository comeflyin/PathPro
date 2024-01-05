export type TravelAgent = {
  // 地区
  area: string
  // 地区内国家的列表
  region: TravelAgentItem[]
}

export type TravelAgentItem = {
  //国家名
  title: string
  //城市列表
  cityItem: CityItem[]
}

export type CityItem = {
  //城市名
  city: string
  //城市的图片
  img: string
}
