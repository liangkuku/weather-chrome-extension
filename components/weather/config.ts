export const m = {
  "00": "C2",
  "01": "C9",
  "02": "C1",
  "03": "C3",
  "04": "C3",
  "05": "C3",
  "06": "C3",
  "07": "C3",
  "08": "C3",
  "09": "C3",
  10: "C3",
  11: "C3",
  12: "C3",
  13: "C4",
  14: "C4",
  15: "C4",
  16: "C4",
  17: "C4",
  18: "C5",
  19: "C3",
  20: "C7",
  21: "C3",
  22: "C3",
  23: "C3",
  24: "C3",
  25: "C3",
  26: "C4",
  27: "C4",
  28: "C4",
  29: "C7",
  30: "C7",
  31: "C7",
  53: "C6",
  99: "C8",
  32: "C5",
  49: "C5",
  54: "C6",
  55: "C6",
  56: "C6",
  57: "C5",
  58: "C5",
  301: "C3",
  302: "C4"
}

//黄历、穿衣、雨伞、感冒、洗车、运动、防晒、钓鱼、旅游、交通、空气污染扩散条件、舒适度、晾晒指数
export const livingKeys = [
  // { key: "huangli", icon: "icon_huangli" },
  { key: "clothes", icon: "icon_chuanyi" },
  { key: "umbrella", icon: "icon_yusan" },
  { key: "cold", icon: "icon_ganmao" },
  { key: "carwash", icon: "icon_xiche" },
  { key: "sports", icon: "icon_yundong" },
  { key: "sunscreen", icon: "icon_fangsai" },
  { key: "fish", icon: "icon_diaoyu" },
  { key: "tourism", icon: "icon_lvyou" },
  { key: "traffic", icon: "icon_jiaotong" },
  { key: "diffusion", icon: "icon_wurankuosan" },
  { key: "comfort", icon: "icon_shushidu" },
  { key: "drying", icon: "icon_liangshai" },
  { key: "makeup", icon: "icon_huazhuang" },
  { key: "morning", icon: "icon_chenlian" },
  { key: "chill", icon: "icon_guomin" },
  { key: "heatstroke", icon: "icon_zhongshu" }
]

//配置穿衣指数的信息
//key:序号，level：穿衣级别，icon：对应服饰的icon
//1，炎热;2，热，短袖
//3，舒适;4，较舒适，长袖，衬衫，薄外套
//5，较冷，厚外套，毛衣
//6，冷;7，寒冷，棉服，羽绒服
export const clothesKeys = [
  { key: 1, level: "炎热", icon: "icon_chuanyi_hot" },
  { key: 2, level: "热", icon: "icon_chuanyi_hot" },
  { key: 3, level: "舒适", icon: "icon_chuanyi_shushi" },
  { key: 4, level: "较舒适", icon: "icon_chuanyi_shushi" },
  { key: 5, level: "较冷", icon: "icon_chuanyi_jiaoleng" },
  { key: 6, level: "冷", icon: "icon_chuanyi_cool" },
  { key: 7, level: "寒冷", icon: "icon_chuanyi_cool" }
]
