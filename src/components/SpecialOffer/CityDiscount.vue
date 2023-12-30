<template>
  <div class="bg-white rounded-2xl p-4 h-full border-neutral-200 border">
    <div class="cs flex overflow-hidden overflow-x-auto">
      <div
        v-for="(cityDiscount, index) in cityDiscounts"
        :key="index"
        :class="{ active: checked === index }"
        @click="checkedCity(index)"
        class="text-nowrap p-1 pl-3 pr-3 m-1 border rounded-3xl"
      >
        {{ cityDiscount.city }}
      </div>
    </div>
    <div class="mt-3 mb-4 pt-1 pb-1 bg-[#fcf3de] text-[#ec9837] font-semibold text-center rounded-lg">
      <van-icon name="underway" />
      距结束仅剩{{ leftTime }}天
    </div>
    <TourMsg :ticketMsgs="cityDiscounts[checked].ticketMsgs" :leftTime="cityDiscounts[0].leftTime" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import TourMsg from "./TourMsg.vue"

const cityDiscounts = ref([
  {
    city: "日本",
    ticketMsgs: [
      {
        name: "东京三丽鸥彩虹乐园门票",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_640,c_fill,q_85/activities/z5oxfvdbejb5s78qjwge.webp",
        evaluate: 4273,
        point: 4.7,
        join: "200k",
        adress: "东京",
        price: 165,
        discountMsgs: ["价格保证", "年终大促"],
        tag: ["热卖", "轻松退款"],
      },
      {
        name: "东京丰洲 teamLab Planets TOKYO 展览门票",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/wtxexj7k3jr5pz0xs9o2.webp",
        evaluate: 6077,
        point: 4.8,
        join: "200k",
        adress: "东京",
        price: 190,
        discountMsgs: ["年终大促", "B1G1"],
        tag: ["热卖", "立即确认"],
      },
      {
        name: "大阪长居植物园 teamLab Botanical Garden Osaka 门票",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/yvp0rpmm4xgmye4cshb3.webp",
        evaluate: 2779,
        point: 4.5,
        join: "100k",
        adress: "大阪",
        price: 90,
        discountMsgs: ["年终大促"],
        tag: ["热卖", "立即确认"],
      },
      {
        name: "东京Mega Ilumi 灯光秀2023 - 2024门票（大井赛马场）",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_2160,h_1440,c_fill,q_85/activities/s3cnpljwj3ajnmr9emwy.webp",
        evaluate: 72,
        point: 4.3,
        join: "4k",
        adress: "东京",
        price: 25,
        discountMsgs: ["年终大促", "价格保证"],
        tag: ["立即确认"],
      },
      {
        name: "福冈teamLab森林美术馆门票 ",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_426,c_fill,q_85/activities/izgqkr0xlnmka5szdbsy.webp",
        evaluate: 531,
        point: 4.7,
        join: "10k",
        adress: "福冈",
        price: 110,
        discountMsgs: ["年终大促", "超值优惠"],
        tag: ["热卖", "立即确认"],
      },
      {
        name: "福冈 BOSS E ZO FUKUOKA 门票",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_426,c_fill,q_85/activities/l2fkrhfjlgljlc94j2sb.webp",
        evaluate: 71,
        point: 4.7,
        join: "5k",
        adress: "福冈",
        price: 50,
        discountMsgs: ["年终大促", "价格保证"],
        tag: ["立即确认"],
      },
      {
        name: "冲绳丰见城市 DMM Kariyushi 水族馆门票",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_426,c_fill,q_85/activities/wkcjofrgzjylcqlppicj.webp",
        evaluate: 538,
        point: 4.7,
        join: "20k",
        adress: "冲绳",
        price: 96,
        discountMsgs: ["价格保证"],
        tag: ["热卖", "立即确认"],
      },
      {
        name: "二次元之森火影忍者 & 火影新世代主题乐园门票",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_426,c_fill,q_85/activities/ziuyvdvejgmv2jg2wk2q.webp",
        evaluate: 119,
        point: 4.7,
        join: "6k",
        adress: "兵库县",
        price: 124,
        discountMsgs: ["最高25%折扣"],
        tag: ["热卖", "轻松退款"],
      },
      {
        name: "BOSS E・ZO 福冈美术馆V-World AREA门票",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_426,c_fill,q_85/activities/efloofmzc2ovzguxzgfq.webp",
        evaluate: 3,
        point: 4.7,
        join: "100",
        adress: "福冈",
        price: 200,
        discountMsgs: ["年终大促", "价格保证"],
        tag: ["立即确认"],
      },
      {
        name: "【最高可省JPY5,900】关西乐享周游券",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_426,c_fill,q_85/activities/k68tcgymiazgbk0poopw.webp",
        evaluate: 223,
        point: 4.5,
        join: "30k",
        adress: "大阪",
        price: 151,
        discountMsgs: ["年终大促", "B1G1"],
        tag: ["热卖", "轻松退款"],
      },
      {
        name: "大阪空庭温泉门票",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_426,c_fill,q_85/activities/bingilyybukyxpkgyahr.webp",
        evaluate: 1811,
        point: 4.7,
        join: "80k",
        adress: "大阪",
        price: 133,
        discountMsgs: ["年终大促", "价格保证"],
        tag: ["热卖", "轻松退款"],
      },
    ],
  },
  {
    city: "新加坡",
    ticketMsgs: [
      {
        name: "新加坡夜间野生动物园门票（含游园车之旅）",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_640,c_fill,q_85/activities/e9lsycjm1wb884bvek1y.webp",
        evaluate: 7935,
        point: 4.5,
        join: "400k",
        adress: "新加坡",
        price: 295,
        discountMsgs: ["年终大促", "40% off"],
        tag: ["热卖", "立即确认"],
      },
      {
        name: "新加坡空中缆车往返票",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_426,c_fill,q_85/activities/lxbrecy95s5muqsgtpwb.webp",
        evaluate: 20876,
        point: 4.7,
        join: "600k",
        adress: "新加坡",
        price: 150,
        discountMsgs: ["年终大促", "35% off"],
        tag: ["热卖", "立即确认"],
      },
      {
        name: "新加坡时光之翼灯光水舞秀门票",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_426,c_fill,q_85/activities/e76dpwoxfumhoitwl0cc.webp",
        evaluate: 9810,
        point: 4.7,
        join: "300k",
        adress: "新加坡",
        price: 92,
        discountMsgs: ["年终大促"],
        tag: ["热卖", "立即确认"],
      },
      {
        name: "新加坡 Wild Wild Wet 水上乐园门票",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,c_fill,q_85/activities/zlnlnvwhym800ymhosyu.webp",
        evaluate: 3490,
        point: 4.6,
        join: "100k",
        adress: "新加坡",
        price: 117,
        discountMsgs: ["年终大促", "独家套票"],
        tag: ["热卖", "立即确认"],
      },
      {
        name: "新加坡音乐剧《玛蒂尔达》门票",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_426,c_fill,q_85/activities/rbo1asygngqfx8xkjao4.webp",
        evaluate: 10,
        point: 4.5,
        join: "400",
        adress: "新加坡",
        price: 386,
        discountMsgs: ["年终大促"],
        tag: ["48小时内确认"],
      },
    ],
  },
  {
    city: "港澳",
    ticketMsgs: [
      {
        name: "香港海洋公园门票",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_640,c_fill,q_85/activities/wbmzwynrr6vcvwfrjjgk.webp",
        evaluate: 67248,
        point: 4.7,
        join: "1M",
        adress: "中国香港",
        price: 180,
        discountMsgs: ["香港夜飨乐"],
        tag: ["热卖", "立即确认"],
      },
      {
        name: "香港迪士尼乐园门票",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_426,c_fill,q_85/activities/uifimxcuodqe2oclxqin.webp",
        evaluate: 151083,
        point: 4.8,
        join: "4M",
        adress: "中国香港",
        price: 535,
        discountMsgs: ["香港夜飨乐", "年终大促"],
        tag: ["热卖", "立即确认"],
      },
      {
        name: "[PathPro专属VIP换票通道] 昂坪360缆车门票",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_426,c_fill,q_85/activities/gtab1rrhq0yuho5xmn5q.webp",
        evaluate: 45248,
        point: 4.7,
        join: "1M",
        adress: "中国香港",
        price: 177,
        discountMsgs: ["香港夜飨乐", "年终大促"],
        tag: ["热卖", "立即确认"],
      },
      {
        name: "香港太平山顶 -第六代山顶缆车套票或凌霄阁摩天台428门票",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_426,c_fill,q_85/activities/tq125ajrqzbbtymakqhb.webp",
        evaluate: 17366,
        point: 4.5,
        join: "700k",
        adress: "中国香港",
        price: 71,
        discountMsgs: ["香港夜飨乐"],
        tag: ["热卖", "立即确认"],
      },
      {
        name: "香港杜莎夫人蜡像馆门票",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_426,c_fill,q_85/activities/fyxznjxs1bqcajxoerzh.webp",
        evaluate: 3836,
        point: 4.7,
        join: "100k",
        adress: "中国香港",
        price: 205,
        discountMsgs: ["香港夜飨乐"],
        tag: ["热卖", "立即确认"],
      },
    ],
  },
  {
    city: "南韩",
    ticketMsgs: [
      {
        name: "韩国乐高乐园®门票",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_640,c_fill,q_85/activities/rt7x7i42m3aal56zi75h.webp",
        evaluate: 230,
        point: 4.4,
        join: "9k",
        adress: "江原道",
        price: 131,
        discountMsgs: ["年终大促"],
        tag: ["轻松退款", "立即确认"],
      },
      {
        name: "首尔乐天世界门票",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_426,c_fill,q_85/activities/tjsukcbjgefqm5lc1iah.webp",
        evaluate: 22856,
        point: 4.6,
        join: "600k",
        adress: "首尔",
        price: 191,
        discountMsgs: ["年终大促"],
        tag: ["热卖", "立即确认"],
      },
    ],
  },
  {
    city: "欧洲",
    ticketMsgs: [
      {
        name: "巴黎迪士尼乐园门票",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_640,c_fill,q_85/activities/pou1mskyxljgapoolawp.webp",
        evaluate: 6298,
        point: 4.8,
        join: "200k",
        adress: "巴黎",
        price: 438,
        discountMsgs: ["年终大促"],
        tag: ["热卖", "轻松退款"],
      },
      {
        name: "阿姆斯特丹海尼根体验馆门票",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_426,c_fill,q_85/activities/a1fqckwgk14snjp7hydo.webp",
        evaluate: 1029,
        point: 4.7,
        join: "10k",
        adress: "阿姆斯特丹",
        price: 180,
        discountMsgs: ["买2立享50%折扣"],
        tag: ["热卖", "立即确认"],
      },
    ],
  },
  {
    city: "美国",
    ticketMsgs: [
      {
        name: "加州好莱坞环球影城门票",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_640,c_fill,q_85/activities/vrvkyaub0wi1jvluafqb.webp",
        evaluate: 4404,
        point: 4.9,
        join: "100k",
        adress: "洛杉矶",
        price: 772,
        discountMsgs: ["年终大促"],
        tag: ["热卖", "立即确认"],
      },
      {
        name: "圣地亚哥海洋世界门票",
        img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_640,h_426,c_fill,q_85/activities/ibhzbxsi4smvtzdnjnri.webp",
        evaluate: 669,
        point: 4.7,
        join: "20k",
        adress: "圣迭戈",
        price: 347,
        discountMsgs: ["年终大促", "以减6%"],
        tag: ["热卖", "立即确认"],
      },
    ],
  },
])
const leftTime = 6
let checked = ref(0)

const checkedCity = (index: number) => {
  checked.value = index
}
</script>

<style scoped>
.active {
  @apply bg-[#ff5303] text-white font-semibold;
}
</style>
