const questions = [
  {
    subject: "resource",
    q: "阿里山位於哪個縣？",
    options: ["嘉義", "南投", "花蓮", "台東"],
    answer: 0
  },
  {
    subject: "resource",
    q: "日月潭位於哪個縣？",
    options: ["南投", "台中", "嘉義", "花蓮"],
    answer: 0
  },
  {
    subject: "resource",
    q: "太魯閣國家公園位於哪裡？",
    options: ["花蓮", "宜蘭", "高雄", "台東"],
    answer: 0
  },
  {
    subject: "resource",
    q: "墾丁國家公園位於哪裡？",
    options: ["屏東", "高雄", "台東", "宜蘭"],
    answer: 0
  },
  {
    subject: "resource",
    q: "陽明山國家公園靠近哪裡？",
    options: ["台北", "台中", "高雄", "台南"],
    answer: 0
  },
  {
    subject: "resource",
    q: "野柳地質公園位於哪裡？",
    options: ["新北", "台北", "宜蘭", "基隆"],
    answer: 0
  },
  {
    subject: "resource",
    q: "故宮博物院位於哪裡？",
    options: ["台北", "台中", "台南", "高雄"],
    answer: 0
  },
  {
    subject: "resource",
    q: "清境農場位於哪裡？",
    options: ["南投", "台中", "嘉義", "花蓮"],
    answer: 0
  },
  {
    subject: "resource",
    q: "清水斷崖位於哪裡？",
    options: ["花蓮", "宜蘭", "台東", "屏東"],
    answer: 0
  },
  {
    subject: "resource",
    q: "台江國家公園位於哪裡？",
    options: ["台南", "高雄", "屏東", "嘉義"],
    answer: 0
  },
  {
    subject: "resource",
    q: "金門國家公園位於哪裡？",
    options: ["金門", "澎湖", "馬祖", "台東"],
    answer: 0
  },
  {
    subject: "resource",
    q: "澎湖著名地形為？",
    options: ["玄武岩", "石灰岩", "大理石", "花崗岩"],
    answer: 0
  },
  {
    subject: "law",
    q: "觀光署隸屬於哪個部會？",
    options: ["交通部", "文化部", "教育部", "經濟部"],
    answer: 0
  },
  {
    subject: "law",
    q: "旅行業主管機關常見答案為？",
    options: ["交通部觀光署", "教育部", "文化部", "勞動部"],
    answer: 0
  },
  {
    subject: "law",
    q: "旅行業依法應重視？",
    options: ["旅客權益", "私人利益", "個人情緒", "隨意加價"],
    answer: 0
  },
  {
    subject: "law",
    q: "導遊執業應重視？",
    options: ["職業倫理", "個人方便", "隨意解說", "誇大資訊"],
    answer: 0
  },
  {
    subject: "law",
    q: "旅行服務核心在於？",
    options: ["安全與品質", "大量購物", "快速結束", "減少說明"],
    answer: 0
  },
  {
    subject: "law",
    q: "旅遊行程安排最重要原則？",
    options: ["合理與安全", "越滿越好", "越晚越好", "越亂越好"],
    answer: 0
  },
  {
    subject: "law",
    q: "旅行業服務精神應以什麼為主？",
    options: ["誠信", "敷衍", "拖延", "隨意"],
    answer: 0
  },
  {
    subject: "law",
    q: "旅遊服務中最重要的基本權益之一是？",
    options: ["安全保障", "免費購物", "永久折扣", "私人司機"],
    answer: 0
  },
  {
    subject: "law",
    q: "旅客個人資料應該如何處理？",
    options: ["妥善保護", "隨意公開", "公開討論", "傳給他人"],
    answer: 0
  },
  {
    subject: "law",
    q: "旅客對行程有疑問時，導遊較適合？",
    options: ["清楚說明", "直接忽略", "隨便回答", "叫旅客自己查"],
    answer: 0
  },
  {
    subject: "practice",
    q: "導遊主要工作？",
    options: ["解說與帶團", "駕駛車輛", "販售商品", "旅館管理"],
    answer: 0
  },
  {
    subject: "practice",
    q: "導遊帶團最重要原則？",
    options: ["安全第一", "購物第一", "速度第一", "娛樂第一"],
    answer: 0
  },
  {
    subject: "practice",
    q: "團體旅遊管理重點？",
    options: ["時間控制", "購物安排", "娛樂節目", "自由活動"],
    answer: 0
  },
  {
    subject: "practice",
    q: "旅遊服務核心？",
    options: ["顧客滿意", "公司利益", "交通速度", "購物金額"],
    answer: 0
  },
  {
    subject: "practice",
    q: "導遊最重要能力？",
    options: ["溝通能力", "烹飪能力", "建築能力", "工程能力"],
    answer: 0
  },
  {
    subject: "practice",
    q: "導遊需具備？",
    options: ["服務精神", "駕駛能力", "醫療能力", "工程能力"],
    answer: 0
  },
  {
    subject: "practice",
    q: "旅遊安全第一原則？",
    options: ["保障旅客安全", "增加收入", "購物", "娛樂"],
    answer: 0
  },
  {
    subject: "practice",
    q: "導遊基本職責？",
    options: ["解說", "開車", "售票", "清潔"],
    answer: 0
  },
  {
    subject: "practice",
    q: "旅遊解說目的？",
    options: ["介紹文化", "增加購物", "娛樂", "休息"],
    answer: 0
  },
  {
    subject: "practice",
    q: "導遊帶團時旅客生病應先？",
    options: ["協助就醫", "要求繼續行程", "先拍照記錄", "立刻解散"],
    answer: 0
  },
  {
    subject: "practice",
    q: "導遊解說最重要的是？",
    options: ["清楚生動", "越快越好", "越短越好", "只講外語"],
    answer: 0
  },
  {
    subject: "practice",
    q: "旅客走失時導遊應先？",
    options: ["立即尋找並聯絡", "直接離開現場", "關閉手機", "取消全團用餐"],
    answer: 0
  },
  {
    subject: "practice",
    q: "導遊面對旅客提問時應？",
    options: ["耐心回答", "故意忽略", "隨意回答", "直接生氣"],
    answer: 0
  },
  {
    subject: "practice",
    q: "導遊與旅客溝通時應？",
    options: ["態度清楚友善", "語氣冷淡", "避免回應", "只用命令"],
    answer: 0
  },
  {
    subject: "practice",
    q: "旅客遺失物品時導遊應？",
    options: ["協助尋找與通報", "立刻停止服務", "要求自行處理", "拒絕回應"],
    answer: 0
  },
  {
    subject: "practice",
    q: "導遊面對抱怨時較佳做法是？",
    options: ["先傾聽再處理", "立刻反駁", "直接離開", "忽略不理"],
    answer: 0
  },
  {
    subject: "practice",
    q: "旅客集合時間到仍未出現，導遊應？",
    options: ["先聯絡確認", "直接出發", "取消行程", "責罵全團"],
    answer: 0
  }
];
