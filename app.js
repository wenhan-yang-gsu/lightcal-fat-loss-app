const foodDatabase = [
  { name: "米饭", unit: "g", base: 100, kcal: 116, protein: 2.6, carbs: 25.9, fat: 0.3, keywords: ["rice", "mifan", "米饭", "饭"] },
  { name: "杂粮饭", unit: "g", base: 100, kcal: 118, protein: 3.1, carbs: 24.5, fat: 0.8, keywords: ["杂粮", "grain"] },
  { name: "馒头", unit: "g", base: 100, kcal: 223, protein: 7, carbs: 47, fat: 1.1, keywords: ["馒头", "mantou"] },
  { name: "面条", unit: "g", base: 100, kcal: 137, protein: 4.5, carbs: 25.8, fat: 1.2, keywords: ["面", "noodle", "noodles"] },
  { name: "意面", unit: "g", base: 100, kcal: 158, protein: 5.8, carbs: 30.9, fat: 0.9, keywords: ["意面", "pasta"] },
  { name: "红薯", unit: "g", base: 100, kcal: 86, protein: 1.6, carbs: 20.1, fat: 0.1, keywords: ["红薯", "sweet potato"] },
  { name: "玉米", unit: "g", base: 100, kcal: 112, protein: 4, carbs: 22.8, fat: 1.2, keywords: ["玉米", "corn"] },
  { name: "燕麦", unit: "g", base: 100, kcal: 377, protein: 15, carbs: 66, fat: 6.7, keywords: ["燕麦", "oat"] },
  { name: "全麦面包", unit: "g", base: 100, kcal: 246, protein: 9.7, carbs: 41, fat: 4.2, keywords: ["面包", "bread"] },
  { name: "鸡胸肉", unit: "g", base: 100, kcal: 133, protein: 24.6, carbs: 0, fat: 3.2, keywords: ["鸡胸", "chicken"] },
  { name: "鸡腿", unit: "g", base: 100, kcal: 181, protein: 18.2, carbs: 0, fat: 11.7, keywords: ["鸡腿", "drumstick"] },
  { name: "牛肉", unit: "g", base: 100, kcal: 125, protein: 20.2, carbs: 0, fat: 4.2, keywords: ["牛肉", "beef"] },
  { name: "猪瘦肉", unit: "g", base: 100, kcal: 143, protein: 20.3, carbs: 1.5, fat: 6.2, keywords: ["猪肉", "pork"] },
  { name: "三文鱼", unit: "g", base: 100, kcal: 208, protein: 20.4, carbs: 0, fat: 13.4, keywords: ["三文鱼", "salmon"] },
  { name: "虾仁", unit: "g", base: 100, kcal: 99, protein: 20.9, carbs: 0.2, fat: 1.1, keywords: ["虾", "shrimp"] },
  { name: "鸡蛋", unit: "个", base: 1, kcal: 70, protein: 6.3, carbs: 0.6, fat: 5, keywords: ["鸡蛋", "egg"] },
  { name: "豆腐", unit: "g", base: 100, kcal: 84, protein: 8.1, carbs: 3.8, fat: 4.2, keywords: ["豆腐", "tofu"] },
  { name: "无糖酸奶", unit: "g", base: 100, kcal: 63, protein: 4.5, carbs: 5, fat: 2.8, keywords: ["酸奶", "yogurt"] },
  { name: "牛奶", unit: "ml", base: 100, kcal: 54, protein: 3.1, carbs: 3.4, fat: 3.2, keywords: ["牛奶", "milk"] },
  { name: "西兰花", unit: "g", base: 100, kcal: 36, protein: 4.1, carbs: 4.3, fat: 0.6, keywords: ["西兰花", "broccoli"] },
  { name: "生菜", unit: "g", base: 100, kcal: 16, protein: 1.4, carbs: 2.1, fat: 0.2, keywords: ["生菜", "lettuce"] },
  { name: "番茄", unit: "g", base: 100, kcal: 15, protein: 0.9, carbs: 3.3, fat: 0.2, keywords: ["番茄", "tomato"] },
  { name: "黄瓜", unit: "g", base: 100, kcal: 16, protein: 0.8, carbs: 2.9, fat: 0.2, keywords: ["黄瓜", "cucumber"] },
  { name: "炒青菜", unit: "g", base: 100, kcal: 78, protein: 2.4, carbs: 5.6, fat: 5.2, keywords: ["青菜", "蔬菜", "vegetable"] },
  { name: "沙拉", unit: "g", base: 100, kcal: 68, protein: 2, carbs: 5.5, fat: 4.4, keywords: ["沙拉", "salad"] },
  { name: "苹果", unit: "g", base: 100, kcal: 53, protein: 0.3, carbs: 13.7, fat: 0.2, keywords: ["苹果", "apple"] },
  { name: "香蕉", unit: "g", base: 100, kcal: 93, protein: 1.4, carbs: 22, fat: 0.2, keywords: ["香蕉", "banana"] },
  { name: "蓝莓", unit: "g", base: 100, kcal: 57, protein: 0.7, carbs: 14.5, fat: 0.3, keywords: ["蓝莓", "blueberry"] },
  { name: "牛油果", unit: "g", base: 100, kcal: 171, protein: 2, carbs: 7.4, fat: 15.3, keywords: ["牛油果", "avocado"] },
  { name: "火锅", unit: "份", base: 1, kcal: 900, protein: 45, carbs: 55, fat: 55, keywords: ["火锅", "hotpot"] },
  { name: "麻辣烫", unit: "份", base: 1, kcal: 650, protein: 28, carbs: 62, fat: 32, keywords: ["麻辣烫", "malatang"] },
  { name: "黄焖鸡米饭", unit: "份", base: 1, kcal: 780, protein: 36, carbs: 92, fat: 28, keywords: ["黄焖鸡"] },
  { name: "盖浇饭", unit: "份", base: 1, kcal: 720, protein: 28, carbs: 96, fat: 24, keywords: ["盖浇饭"] },
  { name: "牛肉面", unit: "碗", base: 1, kcal: 620, protein: 30, carbs: 82, fat: 18, keywords: ["牛肉面"] },
  { name: "饺子", unit: "个", base: 1, kcal: 42, protein: 2.1, carbs: 5.2, fat: 1.5, keywords: ["饺子", "dumpling"] },
  { name: "包子", unit: "个", base: 1, kcal: 185, protein: 6, carbs: 28, fat: 5.5, keywords: ["包子", "bao"] },
  { name: "煎饼果子", unit: "份", base: 1, kcal: 560, protein: 19, carbs: 67, fat: 24, keywords: ["煎饼"] },
  { name: "汉堡", unit: "个", base: 1, kcal: 520, protein: 24, carbs: 42, fat: 29, keywords: ["汉堡", "burger"] },
  { name: "薯条", unit: "g", base: 100, kcal: 312, protein: 3.4, carbs: 41, fat: 15, keywords: ["薯条", "fries"] },
  { name: "披萨", unit: "片", base: 1, kcal: 285, protein: 12, carbs: 36, fat: 10, keywords: ["披萨", "pizza"] },
  { name: "奶茶", unit: "杯", base: 1, kcal: 450, protein: 7, carbs: 68, fat: 16, keywords: ["奶茶", "milk tea"] },
  { name: "美式咖啡", unit: "杯", base: 1, kcal: 10, protein: 0.5, carbs: 1, fat: 0, keywords: ["美式", "coffee"] },
  { name: "拿铁", unit: "杯", base: 1, kcal: 180, protein: 9, carbs: 13, fat: 9, keywords: ["拿铁", "latte"] },
  { name: "蛋白粉", unit: "勺", base: 1, kcal: 120, protein: 24, carbs: 3, fat: 1.5, keywords: ["蛋白粉", "protein"] },
  { name: "坚果", unit: "g", base: 100, kcal: 607, protein: 20, carbs: 21, fat: 54, keywords: ["坚果", "nuts"] }
];

foodDatabase.push(
  { name: "白粥", unit: "g", base: 100, kcal: 46, protein: 1.1, carbs: 9.8, fat: 0.3, keywords: ["白粥", "粥", "porridge"] },
  { name: "小米粥", unit: "g", base: 100, kcal: 48, protein: 1.4, carbs: 10.4, fat: 0.4, keywords: ["小米粥"] },
  { name: "炒饭", unit: "份", base: 1, kcal: 650, protein: 18, carbs: 88, fat: 24, keywords: ["炒饭", "fried rice"] },
  { name: "蛋炒饭", unit: "份", base: 1, kcal: 690, protein: 22, carbs: 86, fat: 27, keywords: ["蛋炒饭"] },
  { name: "寿司", unit: "个", base: 1, kcal: 55, protein: 2.1, carbs: 9.8, fat: 0.9, keywords: ["寿司", "sushi"] },
  { name: "炒面", unit: "份", base: 1, kcal: 760, protein: 24, carbs: 96, fat: 30, keywords: ["炒面", "chow mein"] },
  { name: "凉皮", unit: "份", base: 1, kcal: 520, protein: 13, carbs: 82, fat: 15, keywords: ["凉皮"] },
  { name: "米粉", unit: "碗", base: 1, kcal: 560, protein: 18, carbs: 86, fat: 16, keywords: ["米粉"] },
  { name: "河粉", unit: "碗", base: 1, kcal: 610, protein: 20, carbs: 92, fat: 18, keywords: ["河粉"] },
  { name: "螺蛳粉", unit: "碗", base: 1, kcal: 820, protein: 23, carbs: 108, fat: 32, keywords: ["螺蛳粉"] },
  { name: "重庆小面", unit: "碗", base: 1, kcal: 680, protein: 20, carbs: 88, fat: 28, keywords: ["小面", "重庆小面"] },
  { name: "拉面", unit: "碗", base: 1, kcal: 640, protein: 27, carbs: 82, fat: 22, keywords: ["拉面", "ramen"] },
  { name: "乌冬面", unit: "碗", base: 1, kcal: 520, protein: 18, carbs: 78, fat: 14, keywords: ["乌冬", "udon"] },
  { name: "土豆", unit: "g", base: 100, kcal: 81, protein: 2.6, carbs: 17.8, fat: 0.2, keywords: ["土豆", "potato"] },
  { name: "山药", unit: "g", base: 100, kcal: 57, protein: 1.9, carbs: 12.4, fat: 0.2, keywords: ["山药"] },
  { name: "南瓜", unit: "g", base: 100, kcal: 23, protein: 0.7, carbs: 5.3, fat: 0.1, keywords: ["南瓜", "pumpkin"] },
  { name: "鸡翅", unit: "个", base: 1, kcal: 92, protein: 7.8, carbs: 1.8, fat: 6.1, keywords: ["鸡翅", "wing"] },
  { name: "烤鸭", unit: "g", base: 100, kcal: 436, protein: 16.6, carbs: 6, fat: 38, keywords: ["烤鸭", "duck"] },
  { name: "羊肉", unit: "g", base: 100, kcal: 203, protein: 19, carbs: 0, fat: 14.1, keywords: ["羊肉", "lamb"] },
  { name: "培根", unit: "g", base: 100, kcal: 541, protein: 37, carbs: 1.4, fat: 42, keywords: ["培根", "bacon"] },
  { name: "火腿肠", unit: "根", base: 1, kcal: 135, protein: 6, carbs: 8, fat: 9, keywords: ["火腿肠", "sausage"] },
  { name: "金枪鱼", unit: "g", base: 100, kcal: 132, protein: 28, carbs: 0, fat: 1.3, keywords: ["金枪鱼", "tuna"] },
  { name: "鳕鱼", unit: "g", base: 100, kcal: 88, protein: 20.4, carbs: 0, fat: 0.7, keywords: ["鳕鱼", "cod"] },
  { name: "带鱼", unit: "g", base: 100, kcal: 127, protein: 17.7, carbs: 3.1, fat: 4.9, keywords: ["带鱼"] },
  { name: "蟹肉", unit: "g", base: 100, kcal: 97, protein: 19, carbs: 0, fat: 1.5, keywords: ["蟹", "crab"] },
  { name: "肥牛卷", unit: "g", base: 100, kcal: 250, protein: 16, carbs: 0, fat: 20, keywords: ["肥牛"] },
  { name: "毛豆", unit: "g", base: 100, kcal: 131, protein: 13.1, carbs: 10.5, fat: 5, keywords: ["毛豆", "edamame"] },
  { name: "豆浆", unit: "ml", base: 100, kcal: 31, protein: 3, carbs: 1.2, fat: 1.6, keywords: ["豆浆", "soy milk"] },
  { name: "腐竹", unit: "g", base: 100, kcal: 461, protein: 44.6, carbs: 22.3, fat: 21.7, keywords: ["腐竹"] },
  { name: "千张", unit: "g", base: 100, kcal: 262, protein: 24.5, carbs: 5.5, fat: 16, keywords: ["千张", "豆皮"] },
  { name: "娃娃菜", unit: "g", base: 100, kcal: 13, protein: 1.9, carbs: 2.4, fat: 0.2, keywords: ["娃娃菜"] },
  { name: "菠菜", unit: "g", base: 100, kcal: 28, protein: 2.6, carbs: 4.5, fat: 0.3, keywords: ["菠菜", "spinach"] },
  { name: "芦笋", unit: "g", base: 100, kcal: 22, protein: 2.4, carbs: 4.1, fat: 0.2, keywords: ["芦笋", "asparagus"] },
  { name: "胡萝卜", unit: "g", base: 100, kcal: 39, protein: 1, carbs: 8.8, fat: 0.2, keywords: ["胡萝卜", "carrot"] },
  { name: "洋葱", unit: "g", base: 100, kcal: 40, protein: 1.1, carbs: 9.3, fat: 0.1, keywords: ["洋葱", "onion"] },
  { name: "蘑菇", unit: "g", base: 100, kcal: 24, protein: 2.7, carbs: 4.1, fat: 0.1, keywords: ["蘑菇", "香菇", "mushroom"] },
  { name: "茄子", unit: "g", base: 100, kcal: 23, protein: 1.1, carbs: 4.9, fat: 0.2, keywords: ["茄子"] },
  { name: "炒土豆丝", unit: "份", base: 1, kcal: 310, protein: 5, carbs: 38, fat: 15, keywords: ["土豆丝"] },
  { name: "番茄炒蛋", unit: "份", base: 1, kcal: 360, protein: 18, carbs: 16, fat: 25, keywords: ["番茄炒蛋", "西红柿炒蛋"] },
  { name: "宫保鸡丁", unit: "份", base: 1, kcal: 520, protein: 32, carbs: 28, fat: 31, keywords: ["宫保鸡丁"] },
  { name: "鱼香肉丝", unit: "份", base: 1, kcal: 560, protein: 27, carbs: 35, fat: 34, keywords: ["鱼香肉丝"] },
  { name: "麻婆豆腐", unit: "份", base: 1, kcal: 470, protein: 24, carbs: 19, fat: 33, keywords: ["麻婆豆腐"] },
  { name: "红烧肉", unit: "份", base: 1, kcal: 760, protein: 32, carbs: 20, fat: 62, keywords: ["红烧肉"] },
  { name: "水煮肉片", unit: "份", base: 1, kcal: 780, protein: 45, carbs: 25, fat: 55, keywords: ["水煮肉片"] },
  { name: "酸菜鱼", unit: "份", base: 1, kcal: 680, protein: 48, carbs: 18, fat: 46, keywords: ["酸菜鱼"] },
  { name: "烤鱼", unit: "份", base: 1, kcal: 920, protein: 62, carbs: 38, fat: 58, keywords: ["烤鱼"] },
  { name: "轻食碗", unit: "份", base: 1, kcal: 480, protein: 32, carbs: 48, fat: 18, keywords: ["轻食", "能量碗", "bowl"] },
  { name: "凯撒沙拉", unit: "份", base: 1, kcal: 420, protein: 25, carbs: 18, fat: 28, keywords: ["凯撒", "caesar"] },
  { name: "麦片酸奶碗", unit: "份", base: 1, kcal: 390, protein: 18, carbs: 55, fat: 10, keywords: ["酸奶碗", "麦片碗"] },
  { name: "牛排", unit: "g", base: 100, kcal: 170, protein: 22, carbs: 0, fat: 8.8, keywords: ["牛排", "steak"] },
  { name: "烤鸡胸沙拉", unit: "份", base: 1, kcal: 360, protein: 38, carbs: 18, fat: 14, keywords: ["鸡胸沙拉"] },
  { name: "炸鸡", unit: "块", base: 1, kcal: 260, protein: 17, carbs: 12, fat: 17, keywords: ["炸鸡", "fried chicken"] },
  { name: "蛋挞", unit: "个", base: 1, kcal: 220, protein: 4, carbs: 22, fat: 13, keywords: ["蛋挞"] },
  { name: "蛋糕", unit: "块", base: 1, kcal: 360, protein: 5, carbs: 42, fat: 19, keywords: ["蛋糕", "cake"] },
  { name: "冰淇淋", unit: "份", base: 1, kcal: 260, protein: 5, carbs: 32, fat: 13, keywords: ["冰淇淋", "ice cream"] },
  { name: "可乐", unit: "ml", base: 100, kcal: 43, protein: 0, carbs: 10.6, fat: 0, keywords: ["可乐", "cola"] },
  { name: "橙汁", unit: "ml", base: 100, kcal: 45, protein: 0.7, carbs: 10.4, fat: 0.2, keywords: ["橙汁", "juice"] },
  { name: "啤酒", unit: "ml", base: 100, kcal: 43, protein: 0.5, carbs: 3.6, fat: 0, keywords: ["啤酒", "beer"] },
  { name: "白葡萄酒", unit: "ml", base: 100, kcal: 82, protein: 0.1, carbs: 2.6, fat: 0, keywords: ["白葡萄酒", "wine"] },
  { name: "黑咖啡", unit: "杯", base: 1, kcal: 5, protein: 0.3, carbs: 0.5, fat: 0, keywords: ["黑咖啡"] }
);

foodDatabase.push(
  { name: "白菜", unit: "g", base: 100, kcal: 20, protein: 1.2, carbs: 3.4, fat: 0.2, keywords: ["白菜", "大白菜", "cabbage", "napa cabbage", "chinese cabbage"] },
  { name: "炒白菜", unit: "g", base: 100, kcal: 64, protein: 1.6, carbs: 5.2, fat: 4.2, keywords: ["炒白菜", "stir fried cabbage", "stir-fried cabbage", "cabbage"] }
);

const defaultProfile = {
  gender: "female",
  age: 28,
  height: 165,
  weight: 65,
  goalWeight: 58,
  activity: 1.375,
  exerciseByDate: {},
  pace: 500
};

function preferredLanguage() {
  return "en";
}

const mealTemplates = [
  {
    id: "balanced",
    name: "均衡减脂餐",
    meal: "午餐",
    description: "米饭 + 鸡胸肉 + 炒青菜",
    foodNames: ["米饭", "鸡胸肉", "炒青菜"],
    tag: "约 390 kcal"
  },
  {
    id: "convenienceBreakfast",
    name: "便利店早餐",
    meal: "早餐",
    description: "鸡蛋 + 牛奶 + 全麦面包",
    foodNames: ["鸡蛋", "牛奶", "全麦面包"],
    tag: "约 440 kcal"
  },
  {
    id: "lightBowl",
    name: "轻食碗",
    meal: "午餐",
    description: "蛋白质、蔬菜和主食比较均衡",
    foodNames: ["轻食碗"],
    tag: "约 480 kcal"
  },
  {
    id: "takeoutRice",
    name: "外卖米饭套餐",
    meal: "午餐",
    description: "盖浇饭/黄焖鸡类场景",
    foodNames: ["盖浇饭"],
    tag: "约 720 kcal"
  },
  {
    id: "noodleBowl",
    name: "面食一碗",
    meal: "晚餐",
    description: "牛肉面/拉面类场景",
    foodNames: ["牛肉面"],
    tag: "约 620 kcal"
  },
  {
    id: "snackDrink",
    name: "加餐饮品",
    meal: "加餐",
    description: "拿铁 + 香蕉",
    foodNames: ["拿铁", "香蕉"],
    tag: "约 320 kcal"
  },
  {
    id: "highCalorie",
    name: "高热量提醒",
    meal: "晚餐",
    description: "奶茶 + 炸鸡",
    foodNames: ["奶茶", "炸鸡"],
    tag: "约 710 kcal"
  },
  {
    id: "proteinBoost",
    name: "蛋白补充",
    meal: "加餐",
    description: "蛋白粉 + 无糖酸奶",
    foodNames: ["蛋白粉", "无糖酸奶"],
    tag: "约 215 kcal"
  }
];

const foodDisplayNames = {
  米饭: { en: "Rice", ja: "ご飯", es: "Arroz" },
  杂粮饭: { en: "Mixed grain rice", ja: "雑穀ご飯", es: "Arroz integral mixto" },
  馒头: { en: "Steamed bun", ja: "蒸しパン", es: "Pan al vapor" },
  面条: { en: "Noodles", ja: "麺", es: "Fideos" },
  意面: { en: "Pasta", ja: "パスタ", es: "Pasta" },
  红薯: { en: "Sweet potato", ja: "さつまいも", es: "Batata" },
  玉米: { en: "Corn", ja: "とうもろこし", es: "Maíz" },
  燕麦: { en: "Oats", ja: "オートミール", es: "Avena" },
  全麦面包: { en: "Whole-wheat bread", ja: "全粒パン", es: "Pan integral" },
  鸡胸肉: { en: "Chicken breast", ja: "鶏むね肉", es: "Pechuga de pollo" },
  鸡腿: { en: "Chicken leg", ja: "鶏もも肉", es: "Muslo de pollo" },
  牛肉: { en: "Beef", ja: "牛肉", es: "Carne de res" },
  猪瘦肉: { en: "Lean pork", ja: "赤身豚肉", es: "Cerdo magro" },
  三文鱼: { en: "Salmon", ja: "サーモン", es: "Salmón" },
  虾仁: { en: "Shrimp", ja: "えび", es: "Camarón" },
  鸡蛋: { en: "Egg", ja: "卵", es: "Huevo" },
  豆腐: { en: "Tofu", ja: "豆腐", es: "Tofu" },
  无糖酸奶: { en: "Unsweetened yogurt", ja: "無糖ヨーグルト", es: "Yogur sin azúcar" },
  牛奶: { en: "Milk", ja: "牛乳", es: "Leche" },
  西兰花: { en: "Broccoli", ja: "ブロッコリー", es: "Brócoli" },
  生菜: { en: "Lettuce", ja: "レタス", es: "Lechuga" },
  番茄: { en: "Tomato", ja: "トマト", es: "Tomate" },
  黄瓜: { en: "Cucumber", ja: "きゅうり", es: "Pepino" },
  炒青菜: { en: "Stir-fried greens", ja: "青菜炒め", es: "Verduras salteadas" },
  沙拉: { en: "Salad", ja: "サラダ", es: "Ensalada" },
  苹果: { en: "Apple", ja: "りんご", es: "Manzana" },
  香蕉: { en: "Banana", ja: "バナナ", es: "Banana" },
  蓝莓: { en: "Blueberries", ja: "ブルーベリー", es: "Arándanos" },
  牛油果: { en: "Avocado", ja: "アボカド", es: "Aguacate" },
  火锅: { en: "Hot pot", ja: "火鍋", es: "Hot pot" },
  麻辣烫: { en: "Malatang", ja: "マーラータン", es: "Malatang" },
  黄焖鸡米饭: { en: "Braised chicken rice", ja: "鶏煮込みご飯", es: "Arroz con pollo guisado" },
  盖浇饭: { en: "Rice bowl", ja: "丼ご飯", es: "Bol de arroz" },
  牛肉面: { en: "Beef noodle soup", ja: "牛肉麺", es: "Fideos con res" },
  饺子: { en: "Dumpling", ja: "餃子", es: "Dumpling" },
  包子: { en: "Bao bun", ja: "包子", es: "Bao" },
  汉堡: { en: "Burger", ja: "ハンバーガー", es: "Hamburguesa" },
  薯条: { en: "Fries", ja: "フライドポテト", es: "Papas fritas" },
  披萨: { en: "Pizza", ja: "ピザ", es: "Pizza" },
  奶茶: { en: "Milk tea", ja: "ミルクティー", es: "Té con leche" },
  美式咖啡: { en: "Americano", ja: "アメリカーノ", es: "Americano" },
  拿铁: { en: "Latte", ja: "ラテ", es: "Latte" },
  蛋白粉: { en: "Protein powder", ja: "プロテイン", es: "Proteína en polvo" },
  坚果: { en: "Nuts", ja: "ナッツ", es: "Frutos secos" },
  轻食碗: { en: "Light bowl", ja: "ライトボウル", es: "Bowl ligero" },
  炸鸡: { en: "Fried chicken", ja: "フライドチキン", es: "Pollo frito" },
  白菜: { en: "Napa cabbage", ja: "白菜", es: "Col china" },
  炒白菜: { en: "Stir-fried napa cabbage", ja: "白菜炒め", es: "Col china salteada" }
};

const translations = {
  zh: {
    htmlLang: "zh-CN",
    title: "轻卡减脂助手",
    brandName: "轻卡",
    brandSubtitle: "智能减脂助手",
    appNavigation: "应用导航",
    mainPages: "主要页面",
    todayOverview: "今日减脂概览",
    todayTips: "今日训练提示",
    calorieProgress: "今日热量进度",
    decreaseAmount: "减少份量",
    increaseAmount: "增加份量",
    quickAdjust: "快速调整份量",
    activityPresets: "常见运动消耗快捷选择",
    delete: "删除",
    prevDay: "前一天",
    nextDay: "后一天",
    navToday: "今日",
    navPhoto: "拍照",
    navLog: "记录",
    navProfile: "身体",
    todayDeficit: "今天的热量缺口",
    languageLabel: "语言",
    heroTitle: "拍照记录、确认份量、看清今天的热量缺口",
    heroText: "复杂餐盘会拆成多个食物项估算，确认后再计入当天记录。越常修正，结果越贴近你的真实饮食。",
    heroBadge1: "扩展食物库",
    heroBadge2: "复合餐盘估算",
    heroBadge3: "可手动校准",
    scanTitle: "估算",
    scanText: "食物 · 份量 · 热量",
    kcalDeficit: "kcal 缺口",
    intake: "摄入",
    targetIntake: "目标摄入",
    totalBurn: "总消耗",
    macroStructure: "营养结构",
    protein: "蛋白质",
    carbs: "碳水",
    fat: "脂肪",
    projectionTitle: "减脂预测",
    avgDeficit7: "7 日平均缺口",
    weeklyChange: "预计每周变化",
    uploadTitle: "上传餐食照片",
    uploadSubtitle: "先估算，再确认",
    uploadPromptTitle: "选择或拍摄食物照片",
    uploadPromptText: "可根据文件名关键词给出初步识别，也能手动选择食物",
    detectButton: "识别并估算",
    templateTitle: "免费套餐模板",
    templateSubtitle: "一键填入，自己微调",
    estimateTitle: "估算结果",
    localFoodLibrary: "本地食物库",
    freeModeStatus: "免费公开版使用本地食物库和套餐模板估算。照片可作为记录参考，热量请手动确认。",
    mealLabel: "餐次",
    foodLabel: "食物",
    foodPlaceholder: "搜索食物，如 米饭",
    amountLabel: "份量",
    calorieLabel: "热量",
    totalCalories: "总热量",
    mealItem: "食物项",
    addItem: "添加食物",
    addMeal: "加入今日记录",
    removeItem: "移除",
    lessAmount: "少一点",
    aboutRight: "差不多",
    moreAmount: "多一点",
    addFood: "加入今日记录",
    todayMeals: "今日饮食",
    clearDay: "清空当天",
    quickAdd: "快速添加",
    commonScenes: "常见饮食场景",
    profileTitle: "身体信息",
    genderLabel: "性别",
    female: "女",
    male: "男",
    ageLabel: "年龄",
    heightLabel: "身高 cm",
    weightLabel: "当前体重 kg",
    goalWeightLabel: "目标体重 kg",
    activityLabel: "活动水平",
    activitySedentary: "久坐少动",
    activityLight: "轻度活动",
    activityModerate: "中度活动",
    activityHigh: "高强度活动",
    exerciseLabel: "今日运动 kcal",
    paceLabel: "减脂速度",
    paceGentle: "温和：每日缺口 300",
    paceStandard: "标准：每日缺口 500",
    paceAggressive: "积极：每日缺口 700",
    walkPreset: "轻松散步 120",
    strengthPreset: "力量训练 260",
    runPreset: "慢跑有氧 420",
    resultsTitle: "计算结果",
    bmr: "基础代谢",
    dailyBurn: "日常总消耗",
    suggestedIntake: "建议摄入",
    goalGapLabel: "目标差距",
    profileHelper: "照片和模板估算天然有误差，建议把结果当成初稿。真正影响长期结果的是每天能快速确认、持续记录。",
    currentDeficit: "当前缺口",
    currentSurplus: "当前盈余",
    canEat: "今天还可以吃 {value} kcal",
    overBy: "今天超出 {value} kcal",
    noteGood: "节奏很好，缺口适中，比较适合长期坚持。",
    noteLarge: "缺口偏大，注意蛋白质和饥饿感，不建议长期过低摄入。",
    noteSmall: "已经有缺口，想更稳可以晚餐控制油脂和主食份量。",
    noteNoDeficit: "今天暂时没有缺口，可以通过少量运动或调整下一餐拉回来。",
    projectionEstimated: "按近 7 日估算",
    projectionNeedMore: "需要更多记录",
    emptyLog: "今天还没有记录，去拍照页添加第一餐。",
    foodMeta: "{amount}{unit} · 蛋白 {protein}g · 碳水 {carbs}g · 脂肪 {fat}g",
    manualSelect: "手动选择",
    templateConfidence: "套餐模板，建议按实际份量微调",
    templateStatus: "已选择「{name}」。这是免费模板估算，可用少一点/多一点快速校准。",
    compositePlate: "复合餐盘：{items}",
    detectedMultiple: "识别到 {count} 个食物，已合成餐盘",
    matchedMultiple: "已根据文件名关键词匹配多个食物。请按照片和实际份量校准。",
    matchedSingle: "根据关键词匹配，建议确认份量",
    matchedSingleStatus: "已根据文件名关键词匹配食物。请确认份量后加入记录。",
    defaultPlateConfidence: "未发现关键词，给出均衡餐盘初稿",
    defaultPlateStatus: "没有匹配到关键词，已填入均衡餐盘模板。免费版请手动搜索或选择套餐模板校准。",
    meals: { 早餐: "早餐", 午餐: "午餐", 晚餐: "晚餐", 加餐: "加餐" },
    units: { g: "g", ml: "ml", 个: "个", 杯: "杯", 碗: "碗", 份: "份", 片: "片", 根: "根", 块: "块", 勺: "勺" },
    templates: {
      balanced: ["均衡减脂餐", "米饭 + 鸡胸肉 + 炒青菜", "约 390 kcal"],
      convenienceBreakfast: ["便利店早餐", "鸡蛋 + 牛奶 + 全麦面包", "约 440 kcal"],
      lightBowl: ["轻食碗", "蛋白质、蔬菜和主食比较均衡", "约 480 kcal"],
      takeoutRice: ["外卖米饭套餐", "盖浇饭/黄焖鸡类场景", "约 720 kcal"],
      noodleBowl: ["面食一碗", "牛肉面/拉面类场景", "约 620 kcal"],
      snackDrink: ["加餐饮品", "拿铁 + 香蕉", "约 320 kcal"],
      highCalorie: ["高热量提醒", "奶茶 + 炸鸡", "约 710 kcal"],
      proteinBoost: ["蛋白补充", "蛋白粉 + 无糖酸奶", "约 215 kcal"]
    }
  },
  en: {
    htmlLang: "en",
    title: "LightCal Fat Loss Coach",
    brandName: "LightCal",
    brandSubtitle: "Smart fat-loss coach",
    appNavigation: "App navigation",
    mainPages: "Main pages",
    todayOverview: "Today's fat-loss overview",
    todayTips: "Today's tips",
    calorieProgress: "Today's calorie progress",
    decreaseAmount: "Decrease amount",
    increaseAmount: "Increase amount",
    quickAdjust: "Quick amount adjustment",
    activityPresets: "Common exercise presets",
    delete: "Delete",
    prevDay: "Previous day",
    nextDay: "Next day",
    navToday: "Today",
    navPhoto: "Photo",
    navLog: "Log",
    navProfile: "Body",
    todayDeficit: "Today's calorie deficit",
    languageLabel: "Language",
    heroTitle: "Log meals, confirm portions, and see today's calorie deficit",
    heroText: "Complex plates are estimated as multiple food items before they enter your daily log. The more you adjust, the closer it gets to your real eating pattern.",
    heroBadge1: "Expanded food library",
    heroBadge2: "Composite plate estimates",
    heroBadge3: "Manual calibration",
    scanTitle: "Estimate",
    scanText: "Food · Portion · Calories",
    kcalDeficit: "kcal deficit",
    intake: "Intake",
    targetIntake: "Target intake",
    totalBurn: "Total burn",
    macroStructure: "Macros",
    protein: "Protein",
    carbs: "Carbs",
    fat: "Fat",
    projectionTitle: "Projection",
    avgDeficit7: "7-day avg deficit",
    weeklyChange: "Estimated weekly change",
    uploadTitle: "Upload meal photo",
    uploadSubtitle: "Estimate, then confirm",
    uploadPromptTitle: "Choose or take a meal photo",
    uploadPromptText: "Use the photo as a reference, then select foods or templates manually.",
    detectButton: "Estimate",
    templateTitle: "Free meal templates",
    templateSubtitle: "Fill fast, adjust yourself",
    estimateTitle: "Estimate",
    localFoodLibrary: "Local food library",
    freeModeStatus: "The free public version uses the local food library and meal templates. Photos are for reference; please confirm calories manually.",
    mealLabel: "Meal",
    foodLabel: "Food",
    foodPlaceholder: "Search food, e.g. rice",
    amountLabel: "Amount",
    calorieLabel: "Calories",
    totalCalories: "Total calories",
    mealItem: "Food item",
    addItem: "Add item",
    addMeal: "Add meal to today",
    removeItem: "Remove",
    lessAmount: "Less",
    aboutRight: "About right",
    moreAmount: "More",
    addFood: "Add to today",
    todayMeals: "Today's meals",
    clearDay: "Clear day",
    quickAdd: "Quick add",
    commonScenes: "Common eating scenarios",
    profileTitle: "Body profile",
    genderLabel: "Sex",
    female: "Female",
    male: "Male",
    ageLabel: "Age",
    heightLabel: "Height cm",
    weightLabel: "Current weight kg",
    goalWeightLabel: "Goal weight kg",
    activityLabel: "Activity level",
    activitySedentary: "Sedentary",
    activityLight: "Light activity",
    activityModerate: "Moderate activity",
    activityHigh: "High activity",
    exerciseLabel: "Today's exercise kcal",
    paceLabel: "Fat-loss pace",
    paceGentle: "Gentle: 300 kcal deficit",
    paceStandard: "Standard: 500 kcal deficit",
    paceAggressive: "Aggressive: 700 kcal deficit",
    walkPreset: "Easy walk 120",
    strengthPreset: "Strength 260",
    runPreset: "Jogging 420",
    resultsTitle: "Results",
    bmr: "BMR",
    dailyBurn: "Daily burn",
    suggestedIntake: "Suggested intake",
    goalGapLabel: "Goal gap",
    profileHelper: "Photo-based calorie estimates are naturally imperfect. Treat them as a first draft; fast confirmation and consistent logging matter most.",
    currentDeficit: "Current deficit",
    currentSurplus: "Current surplus",
    canEat: "You can still eat {value} kcal today",
    overBy: "You are over by {value} kcal today",
    noteGood: "Good rhythm. This deficit is sustainable for long-term fat loss.",
    noteLarge: "The deficit is large. Watch protein and hunger; avoid eating too little for long periods.",
    noteSmall: "You have a deficit. For a steadier day, keep dinner oil and starch portions controlled.",
    noteNoDeficit: "No deficit yet. A small workout or a lighter next meal can bring it back.",
    projectionEstimated: "Based on recent logs",
    projectionNeedMore: "Need more logs",
    emptyLog: "No meals logged today. Add your first meal from the Photo tab.",
    foodMeta: "{amount}{unit} · Protein {protein}g · Carbs {carbs}g · Fat {fat}g",
    manualSelect: "Manual selection",
    templateConfidence: "Meal template; adjust to your actual portion",
    templateStatus: "Selected “{name}”. This is a free template estimate. Use Less/More to calibrate.",
    compositePlate: "Composite plate: {items}",
    detectedMultiple: "Matched {count} foods and combined them into a plate",
    matchedMultiple: "Matched multiple foods from the file name. Calibrate against the photo and real portion.",
    matchedSingle: "Keyword match; please confirm portion",
    matchedSingleStatus: "Matched a food from the file name. Confirm the portion before adding it.",
    defaultPlateConfidence: "No keyword found; balanced plate draft",
    defaultPlateStatus: "No keyword matched. A balanced plate template has been filled. Search manually or choose a template to calibrate.",
    meals: { 早餐: "Breakfast", 午餐: "Lunch", 晚餐: "Dinner", 加餐: "Snack" },
    units: { g: "g", ml: "ml", 个: "pc", 杯: "cup", 碗: "bowl", 份: "serving", 片: "slice", 根: "stick", 块: "piece", 勺: "scoop" },
    templates: {
      balanced: ["Balanced fat-loss meal", "Rice + chicken breast + greens", "About 390 kcal"],
      convenienceBreakfast: ["Convenience breakfast", "Egg + milk + whole-wheat bread", "About 440 kcal"],
      lightBowl: ["Light bowl", "Balanced protein, vegetables, and carbs", "About 480 kcal"],
      takeoutRice: ["Takeout rice set", "Rice bowl or braised chicken scenario", "About 720 kcal"],
      noodleBowl: ["Noodle bowl", "Beef noodles / ramen scenario", "About 620 kcal"],
      snackDrink: ["Snack drink", "Latte + banana", "About 320 kcal"],
      highCalorie: ["High-calorie reminder", "Milk tea + fried chicken", "About 710 kcal"],
      proteinBoost: ["Protein boost", "Protein powder + unsweetened yogurt", "About 215 kcal"]
    }
  },
  ja: {
    htmlLang: "ja",
    title: "LightCal ダイエットコーチ",
    brandName: "LightCal",
    brandSubtitle: "スマート減量コーチ",
    appNavigation: "アプリナビゲーション",
    mainPages: "メインページ",
    todayOverview: "今日の概要",
    todayTips: "今日のヒント",
    calorieProgress: "今日のカロリー進捗",
    decreaseAmount: "量を減らす",
    increaseAmount: "量を増やす",
    quickAdjust: "量のクイック調整",
    activityPresets: "よくある運動消費",
    delete: "削除",
    prevDay: "前日",
    nextDay: "翌日",
    navToday: "今日",
    navPhoto: "写真",
    navLog: "記録",
    navProfile: "身体",
    todayDeficit: "今日のカロリー赤字",
    languageLabel: "言語",
    heroTitle: "食事を記録し、量を確認し、今日のカロリー差を把握",
    heroText: "複雑な食事は複数の食品として見積もります。修正するほど、実際の食生活に近づきます。",
    heroBadge1: "拡張食品ライブラリ",
    heroBadge2: "複合プレート推定",
    heroBadge3: "手動調整",
    scanTitle: "推定",
    scanText: "食品 · 量 · カロリー",
    kcalDeficit: "kcal 赤字",
    intake: "摂取",
    targetIntake: "目標摂取",
    totalBurn: "総消費",
    macroStructure: "栄養バランス",
    protein: "たんぱく質",
    carbs: "炭水化物",
    fat: "脂質",
    projectionTitle: "予測",
    avgDeficit7: "7日平均赤字",
    weeklyChange: "週あたりの変化予測",
    uploadTitle: "食事写真をアップロード",
    uploadSubtitle: "推定して確認",
    uploadPromptTitle: "食事写真を選択または撮影",
    uploadPromptText: "写真を参考にし、食品やテンプレートを手動で選択します。",
    detectButton: "推定",
    templateTitle: "無料食事テンプレート",
    templateSubtitle: "すばやく入力して調整",
    estimateTitle: "推定結果",
    localFoodLibrary: "ローカル食品ライブラリ",
    freeModeStatus: "無料公開版はローカル食品ライブラリとテンプレートで推定します。写真は参考用で、カロリーは確認してください。",
    mealLabel: "食事",
    foodLabel: "食品",
    foodPlaceholder: "食品を検索、例 rice",
    amountLabel: "量",
    calorieLabel: "カロリー",
    totalCalories: "合計カロリー",
    mealItem: "食品項目",
    addItem: "食品を追加",
    addMeal: "今日に追加",
    removeItem: "削除",
    lessAmount: "少なめ",
    aboutRight: "ちょうど",
    moreAmount: "多め",
    addFood: "今日に追加",
    todayMeals: "今日の食事",
    clearDay: "今日をクリア",
    quickAdd: "クイック追加",
    commonScenes: "よくある食事シーン",
    profileTitle: "身体情報",
    genderLabel: "性別",
    female: "女性",
    male: "男性",
    ageLabel: "年齢",
    heightLabel: "身長 cm",
    weightLabel: "現在体重 kg",
    goalWeightLabel: "目標体重 kg",
    activityLabel: "活動レベル",
    activitySedentary: "座りがち",
    activityLight: "軽い活動",
    activityModerate: "中程度",
    activityHigh: "高い活動",
    exerciseLabel: "今日の運動 kcal",
    paceLabel: "減量ペース",
    paceGentle: "ゆるやか：300 kcal 赤字",
    paceStandard: "標準：500 kcal 赤字",
    paceAggressive: "積極的：700 kcal 赤字",
    walkPreset: "散歩 120",
    strengthPreset: "筋トレ 260",
    runPreset: "ジョギング 420",
    resultsTitle: "計算結果",
    bmr: "基礎代謝",
    dailyBurn: "1日の消費",
    suggestedIntake: "推奨摂取",
    goalGapLabel: "目標差",
    profileHelper: "写真によるカロリー推定には誤差があります。初稿として使い、素早く確認して続けることが大切です。",
    currentDeficit: "現在の赤字",
    currentSurplus: "現在の黒字",
    canEat: "今日はあと {value} kcal 食べられます",
    overBy: "今日は {value} kcal 超過しています",
    noteGood: "良いペースです。長く続けやすい赤字です。",
    noteLarge: "赤字が大きめです。たんぱく質と空腹感に注意してください。",
    noteSmall: "赤字があります。夕食の油と主食量を控えると安定します。",
    noteNoDeficit: "まだ赤字ではありません。軽い運動や次の食事で調整できます。",
    projectionEstimated: "最近の記録から推定",
    projectionNeedMore: "記録が必要",
    emptyLog: "今日はまだ記録がありません。写真タブから追加しましょう。",
    foodMeta: "{amount}{unit} · たんぱく質 {protein}g · 炭水化物 {carbs}g · 脂質 {fat}g",
    manualSelect: "手動選択",
    templateConfidence: "テンプレート推定。実際の量に合わせて調整してください",
    templateStatus: "「{name}」を選択しました。無料テンプレート推定です。少なめ/多めで調整できます。",
    compositePlate: "複合プレート：{items}",
    detectedMultiple: "{count} 個の食品を組み合わせました",
    matchedMultiple: "ファイル名から複数の食品を一致しました。写真と実際の量に合わせて調整してください。",
    matchedSingle: "キーワード一致。量を確認してください",
    matchedSingleStatus: "ファイル名から食品を一致しました。追加前に量を確認してください。",
    defaultPlateConfidence: "キーワードなし。バランスプレート案",
    defaultPlateStatus: "キーワードが一致しません。バランスプレートを入力しました。手動検索またはテンプレートで調整してください。",
    meals: { 早餐: "朝食", 午餐: "昼食", 晚餐: "夕食", 加餐: "間食" },
    units: { g: "g", ml: "ml", 个: "個", 杯: "杯", 碗: "杯", 份: "食分", 片: "枚", 根: "本", 块: "個", 勺: "杯" },
    templates: {
      balanced: ["バランス減量食", "ご飯 + 鶏むね肉 + 青菜炒め", "約 390 kcal"],
      convenienceBreakfast: ["コンビニ朝食", "卵 + 牛乳 + 全粒パン", "約 440 kcal"],
      lightBowl: ["ライトボウル", "たんぱく質・野菜・主食のバランス", "約 480 kcal"],
      takeoutRice: ["テイクアウトご飯セット", "丼/鶏肉ご飯の場面", "約 720 kcal"],
      noodleBowl: ["麺一杯", "牛肉麺/ラーメンの場面", "約 620 kcal"],
      snackDrink: ["間食ドリンク", "ラテ + バナナ", "約 320 kcal"],
      highCalorie: ["高カロリー注意", "ミルクティー + フライドチキン", "約 710 kcal"],
      proteinBoost: ["プロテイン補給", "プロテイン + 無糖ヨーグルト", "約 215 kcal"]
    }
  },
  es: {
    htmlLang: "es",
    title: "LightCal Coach de pérdida de grasa",
    brandName: "LightCal",
    brandSubtitle: "Coach inteligente de pérdida de grasa",
    appNavigation: "Navegación de la app",
    mainPages: "Páginas principales",
    todayOverview: "Resumen de hoy",
    todayTips: "Consejos de hoy",
    calorieProgress: "Progreso calórico de hoy",
    decreaseAmount: "Disminuir cantidad",
    increaseAmount: "Aumentar cantidad",
    quickAdjust: "Ajuste rápido de cantidad",
    activityPresets: "Ejercicios comunes",
    delete: "Eliminar",
    prevDay: "Día anterior",
    nextDay: "Día siguiente",
    navToday: "Hoy",
    navPhoto: "Foto",
    navLog: "Registro",
    navProfile: "Cuerpo",
    todayDeficit: "Déficit calórico de hoy",
    languageLabel: "Idioma",
    heroTitle: "Registra comidas, confirma porciones y mira tu déficit de hoy",
    heroText: "Los platos complejos se estiman como varios alimentos. Cuanto más ajustes, más se acerca a tu alimentación real.",
    heroBadge1: "Base de alimentos ampliada",
    heroBadge2: "Estimación de plato compuesto",
    heroBadge3: "Calibración manual",
    scanTitle: "Estimación",
    scanText: "Alimento · Porción · Calorías",
    kcalDeficit: "kcal de déficit",
    intake: "Ingesta",
    targetIntake: "Objetivo",
    totalBurn: "Gasto total",
    macroStructure: "Macros",
    protein: "Proteína",
    carbs: "Carbos",
    fat: "Grasa",
    projectionTitle: "Proyección",
    avgDeficit7: "Déficit medio 7 días",
    weeklyChange: "Cambio semanal estimado",
    uploadTitle: "Subir foto de comida",
    uploadSubtitle: "Estima y confirma",
    uploadPromptTitle: "Elige o toma una foto",
    uploadPromptText: "Usa la foto como referencia y selecciona alimentos o plantillas manualmente.",
    detectButton: "Estimar",
    templateTitle: "Plantillas gratis",
    templateSubtitle: "Rellena rápido y ajusta",
    estimateTitle: "Estimación",
    localFoodLibrary: "Base local de alimentos",
    freeModeStatus: "La versión pública gratuita usa una base local y plantillas. Las fotos son referencia; confirma las calorías manualmente.",
    mealLabel: "Comida",
    foodLabel: "Alimento",
    foodPlaceholder: "Buscar alimento, ej. rice",
    amountLabel: "Cantidad",
    calorieLabel: "Calorías",
    totalCalories: "Calorías totales",
    mealItem: "Alimento",
    addItem: "Añadir alimento",
    addMeal: "Añadir comida a hoy",
    removeItem: "Eliminar",
    lessAmount: "Menos",
    aboutRight: "Correcto",
    moreAmount: "Más",
    addFood: "Añadir a hoy",
    todayMeals: "Comidas de hoy",
    clearDay: "Borrar día",
    quickAdd: "Añadir rápido",
    commonScenes: "Escenarios comunes",
    profileTitle: "Perfil corporal",
    genderLabel: "Sexo",
    female: "Mujer",
    male: "Hombre",
    ageLabel: "Edad",
    heightLabel: "Altura cm",
    weightLabel: "Peso actual kg",
    goalWeightLabel: "Peso objetivo kg",
    activityLabel: "Actividad",
    activitySedentary: "Sedentario",
    activityLight: "Actividad ligera",
    activityModerate: "Actividad moderada",
    activityHigh: "Actividad alta",
    exerciseLabel: "Ejercicio de hoy kcal",
    paceLabel: "Ritmo",
    paceGentle: "Suave: déficit 300 kcal",
    paceStandard: "Estándar: déficit 500 kcal",
    paceAggressive: "Agresivo: déficit 700 kcal",
    walkPreset: "Caminata 120",
    strengthPreset: "Fuerza 260",
    runPreset: "Trote 420",
    resultsTitle: "Resultados",
    bmr: "BMR",
    dailyBurn: "Gasto diario",
    suggestedIntake: "Ingesta sugerida",
    goalGapLabel: "Distancia al objetivo",
    profileHelper: "Las estimaciones por foto tienen error natural. Úsalas como borrador; confirmar rápido y registrar con constancia es lo importante.",
    currentDeficit: "Déficit actual",
    currentSurplus: "Superávit actual",
    canEat: "Hoy aún puedes comer {value} kcal",
    overBy: "Hoy te pasaste por {value} kcal",
    noteGood: "Buen ritmo. Este déficit es sostenible.",
    noteLarge: "El déficit es grande. Cuida proteína y hambre; evita comer demasiado poco por mucho tiempo.",
    noteSmall: "Ya tienes déficit. Para más estabilidad, controla aceite y carbohidratos en la cena.",
    noteNoDeficit: "Aún no hay déficit. Un poco de ejercicio o una comida más ligera puede ayudar.",
    projectionEstimated: "Según registros recientes",
    projectionNeedMore: "Faltan registros",
    emptyLog: "Aún no hay comidas hoy. Añade la primera desde Foto.",
    foodMeta: "{amount}{unit} · Proteína {protein}g · Carbos {carbs}g · Grasa {fat}g",
    manualSelect: "Selección manual",
    templateConfidence: "Plantilla; ajusta a tu porción real",
    templateStatus: "Seleccionaste “{name}”. Es una estimación gratuita; usa Menos/Más para calibrar.",
    compositePlate: "Plato compuesto: {items}",
    detectedMultiple: "Coincidieron {count} alimentos y se combinaron en un plato",
    matchedMultiple: "Se encontraron varios alimentos por el nombre del archivo. Ajusta según la foto y la porción real.",
    matchedSingle: "Coincidencia por palabra clave; confirma porción",
    matchedSingleStatus: "Se encontró un alimento por el nombre del archivo. Confirma la porción antes de añadir.",
    defaultPlateConfidence: "Sin palabra clave; borrador de plato equilibrado",
    defaultPlateStatus: "No hubo coincidencias. Se rellenó una plantilla equilibrada; busca manualmente o elige una plantilla.",
    meals: { 早餐: "Desayuno", 午餐: "Almuerzo", 晚餐: "Cena", 加餐: "Snack" },
    units: { g: "g", ml: "ml", 个: "ud", 杯: "taza", 碗: "bol", 份: "porción", 片: "rebanada", 根: "pieza", 块: "pieza", 勺: "scoop" },
    templates: {
      balanced: ["Comida equilibrada", "Arroz + pechuga de pollo + verduras", "Aprox. 390 kcal"],
      convenienceBreakfast: ["Desayuno rápido", "Huevo + leche + pan integral", "Aprox. 440 kcal"],
      lightBowl: ["Bowl ligero", "Proteína, verduras y carbohidratos equilibrados", "Aprox. 480 kcal"],
      takeoutRice: ["Menú con arroz", "Bol de arroz / pollo guisado", "Aprox. 720 kcal"],
      noodleBowl: ["Bol de fideos", "Fideos con ternera / ramen", "Aprox. 620 kcal"],
      snackDrink: ["Bebida snack", "Latte + banana", "Aprox. 320 kcal"],
      highCalorie: ["Aviso alto en calorías", "Té con leche + pollo frito", "Aprox. 710 kcal"],
      proteinBoost: ["Extra proteína", "Proteína en polvo + yogur sin azúcar", "Aprox. 215 kcal"]
    }
  }
};

let state = loadState();
let mealDraftItems = [];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const elements = {
  activeDate: $("#activeDate"),
  languageSelect: $("#languageSelect"),
  dayTitle: $("#dayTitle"),
  gaugeValue: $("#gaugeValue"),
  deficitLabel: $("#deficitLabel"),
  deficitValue: $("#deficitValue"),
  dailyNote: $("#dailyNote"),
  intakeMetric: $("#intakeMetric"),
  targetMetric: $("#targetMetric"),
  burnMetric: $("#burnMetric"),
  macroTotal: $("#macroTotal"),
  proteinText: $("#proteinText"),
  carbsText: $("#carbsText"),
  fatText: $("#fatText"),
  proteinMeter: $("#proteinMeter"),
  carbsMeter: $("#carbsMeter"),
  fatMeter: $("#fatMeter"),
  avgDeficit: $("#avgDeficit"),
  weeklyLoss: $("#weeklyLoss"),
  projectionPace: $("#projectionPace"),
  foodPhoto: $("#foodPhoto"),
  photoPreview: $("#photoPreview"),
  uploadPrompt: $("#uploadPrompt"),
  confidenceText: $("#confidenceText"),
  mealType: $("#mealType"),
  mealBuilder: $("#mealBuilder"),
  addMealItemButton: $("#addMealItemButton"),
  estimateStatus: $("#estimateStatus"),
  previewCalories: $("#previewCalories"),
  previewProtein: $("#previewProtein"),
  previewCarbs: $("#previewCarbs"),
  previewFat: $("#previewFat"),
  mealGroups: $("#mealGroups"),
  templateGrid: $("#templateGrid"),
  logTemplateGrid: $("#logTemplateGrid"),
  bmrResult: $("#bmrResult"),
  tdeeResult: $("#tdeeResult"),
  targetResult: $("#targetResult"),
  goalGap: $("#goalGap")
};

function todayKey() {
  return toDateKey(new Date());
}

function toDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function createId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function loadState() {
  const saved = localStorage.getItem("lightCalorieState");
  if (!saved) {
    return {
      activeDate: todayKey(),
      language: preferredLanguage(),
      profile: defaultProfile,
      logs: {}
    };
  }

  try {
    const parsed = JSON.parse(saved);
    return {
      activeDate: parsed.activeDate || todayKey(),
      language: parsed.language || preferredLanguage(),
      profile: { ...defaultProfile, ...parsed.profile },
      logs: parsed.logs || {}
    };
  } catch {
    return {
      activeDate: todayKey(),
      language: preferredLanguage(),
      profile: defaultProfile,
      logs: {}
    };
  }
}

function saveState() {
  localStorage.setItem("lightCalorieState", JSON.stringify(state));
}

function currentLang() {
  return translations[state.language] ? state.language : "zh";
}

function t(key) {
  return translations[currentLang()][key] ?? translations.zh[key] ?? key;
}

function formatText(key, values = {}) {
  return String(t(key)).replace(/\{(\w+)\}/g, (_, name) => values[name] ?? "");
}

function translateMeal(meal) {
  return t("meals")[meal] || meal;
}

function translateUnit(unit) {
  return t("units")[unit] || unit;
}

function displayFoodName(food) {
  if (!foodDatabase.includes(food) && food.sourceFoodNames?.length) {
    const foods = food.sourceFoodNames
      .map((name) => foodDatabase.find((item) => item.name === name))
      .filter(Boolean);
    if (foods.length) {
      return formatText("compositePlate", { items: foods.map((item) => displayFoodName(item)).join(" + ") });
    }
  }

  if (food.base === 1 && !foodDatabase.includes(food)) return food.name;
  if (currentLang() === "zh") return food.name;
  if (foodDisplayNames[food.name]?.[currentLang()]) return foodDisplayNames[food.name][currentLang()];
  return food.keywords?.find((keyword) => /[a-z]/i.test(keyword)) || food.name;
}

function findFoodByText(value) {
  const searchValue = value.trim().toLowerCase();
  if (!searchValue) return null;

  return foodDatabase.find((item) =>
    item.name.toLowerCase() === searchValue ||
    displayFoodName(item).toLowerCase() === searchValue ||
    item.keywords.some((keyword) => keyword.toLowerCase() === searchValue)
  ) || foodDatabase.find((item) =>
    item.name.toLowerCase().includes(searchValue) ||
    displayFoodName(item).toLowerCase().includes(searchValue) ||
    item.keywords.some((keyword) => keyword.toLowerCase().includes(searchValue))
  );
}

function findExactFoodByText(value) {
  const searchValue = value.trim().toLowerCase();
  if (!searchValue) return null;

  return foodDatabase.find((item) =>
    item.name.toLowerCase() === searchValue ||
    displayFoodName(item).toLowerCase() === searchValue ||
    item.keywords.some((keyword) => keyword.toLowerCase() === searchValue)
  );
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function round(value, digits = 0) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function calculateProfile(date = state.activeDate) {
  const profile = state.profile;
  const genderAdjust = profile.gender === "male" ? 5 : -161;
  const bmr = 10 * Number(profile.weight) + 6.25 * Number(profile.height) - 5 * Number(profile.age) + genderAdjust;
  const exercise = Number(profile.exerciseByDate?.[date] || 0);
  const tdee = bmr * Number(profile.activity) + exercise;
  const target = Math.max(1200, tdee - Number(profile.pace));

  return {
    bmr,
    tdee,
    target,
    exercise,
    goalGap: Number(profile.weight) - Number(profile.goalWeight)
  };
}

function calculateFood(food, amount) {
  const ratio = Number(amount) / Number(food.base);
  return {
    kcal: food.kcal * ratio,
    protein: food.protein * ratio,
    carbs: food.carbs * ratio,
    fat: food.fat * ratio
  };
}

function getDayLogs(date = state.activeDate) {
  return state.logs[date] || [];
}

function dayTotals(date = state.activeDate) {
  return getDayLogs(date).reduce(
    (sum, item) => ({
      kcal: sum.kcal + item.kcal,
      protein: sum.protein + item.protein,
      carbs: sum.carbs + item.carbs,
      fat: sum.fat + item.fat
    }),
    { kcal: 0, protein: 0, carbs: 0, fat: 0 }
  );
}

function averageDeficit(days = 7) {
  const baseDate = new Date(`${state.activeDate}T12:00:00`);
  let total = 0;
  let count = 0;

  for (let index = 0; index < days; index += 1) {
    const date = new Date(baseDate);
    date.setDate(baseDate.getDate() - index);
    const key = toDateKey(date);
    const totals = dayTotals(key);
    const profile = calculateProfile(key);
    if (totals.kcal > 0 || key === state.activeDate) {
      total += profile.tdee - totals.kcal;
      count += 1;
    }
  }

  return count ? total / count : 0;
}

function setActiveTab(tabId) {
  $$(".nav-tab").forEach((button) => button.classList.toggle("active", button.dataset.tab === tabId));
  $$(".tab-panel").forEach((panel) => panel.classList.toggle("active", panel.id === tabId));
}

function populateFoodOptions() {
  const options = $("#foodOptions");
  options.innerHTML = foodDatabase.map((food) => `<option value="${displayFoodName(food)}"></option>`).join("");
}

function applyTranslations() {
  const dict = translations[currentLang()];
  document.documentElement.lang = dict.htmlLang;
  document.title = dict.title;
  elements.languageSelect.value = currentLang();

  $$("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  $$("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });

  $$("[data-i18n-aria-label]").forEach((node) => {
    node.setAttribute("aria-label", t(node.dataset.i18nAriaLabel));
  });

  $("#prevDay").setAttribute("aria-label", t("prevDay"));
  $("#nextDay").setAttribute("aria-label", t("nextDay"));
}

function syncMealOptions() {
  Array.from(elements.mealType.options).forEach((option) => {
    option.textContent = translateMeal(option.value);
  });
}

function syncProfileForm() {
  const profile = state.profile;
  $("#gender").value = profile.gender;
  $("#age").value = profile.age;
  $("#height").value = profile.height;
  $("#weight").value = profile.weight;
  $("#goalWeight").value = profile.goalWeight;
  $("#activity").value = profile.activity;
  $("#exercise").value = profile.exerciseByDate?.[state.activeDate] || 0;
  $("#pace").value = profile.pace;
}

function portionForFood(food) {
  if (food.base === 1) return 1;
  if (["ml"].includes(food.unit)) return 250;
  if (["个", "杯", "碗", "份", "片", "根", "块", "勺"].includes(food.unit)) return 1;
  return 120;
}

function makeMealDraftItem(food, amount = null) {
  const safeFood = food || foodDatabase[0];
  return {
    id: createId(),
    food: safeFood,
    input: displayFoodName(safeFood),
    amount: amount ?? portionForFood(safeFood)
  };
}

function defaultMealDraftItems() {
  return [
    ["米饭", 150],
    ["鸡胸肉", 120],
    ["炒青菜", 150]
  ].map(([name, amount]) => makeMealDraftItem(foodDatabase.find((food) => food.name === name), amount));
}

function setMealDraftItems(items, confidence = null) {
  mealDraftItems = items.length ? items : defaultMealDraftItems();
  if (confidence) elements.confidenceText.textContent = confidence;
  renderMealBuilder();
  updateNutritionPreview();
}

function templateToDraftItems(template) {
  return template.foodNames
    .map((name) => foodDatabase.find((food) => food.name === name))
    .filter(Boolean)
    .map((food) => makeMealDraftItem(food, portionForFood(food)));
}

function draftTotals() {
  return mealDraftItems.reduce(
    (sum, item) => {
      if (!item.food) return sum;
      const nutrition = calculateFood(item.food, Number(item.amount) || 0);
      return {
        kcal: sum.kcal + nutrition.kcal,
        protein: sum.protein + nutrition.protein,
        carbs: sum.carbs + nutrition.carbs,
        fat: sum.fat + nutrition.fat
      };
    },
    { kcal: 0, protein: 0, carbs: 0, fat: 0 }
  );
}

function updateNutritionPreview() {
  const nutrition = draftTotals();
  elements.previewCalories.textContent = `${round(nutrition.kcal)} kcal`;
  elements.previewProtein.textContent = `${round(nutrition.protein, 1)}g`;
  elements.previewCarbs.textContent = `${round(nutrition.carbs, 1)}g`;
  elements.previewFat.textContent = `${round(nutrition.fat, 1)}g`;
}

function syncDraftDisplayNames() {
  mealDraftItems = mealDraftItems.map((item) => ({
    ...item,
    input: displayFoodName(item.food)
  }));
}

function renderMealBuilder() {
  elements.mealBuilder.innerHTML = mealDraftItems.map((item, index) => {
    const nutrition = calculateFood(item.food, Number(item.amount) || 0);
    const step = item.food.base === 1 ? 1 : 5;
    return `
      <article class="meal-item-row" data-id="${item.id}">
        <div class="meal-item-header">
          <strong>${t("mealItem")} ${index + 1}</strong>
          <button class="icon-button remove-meal-item" type="button" aria-label="${t("removeItem")}" title="${t("removeItem")}">×</button>
        </div>
        <div class="meal-item-fields">
          <label>
            <span>${t("foodLabel")}</span>
            <input class="meal-food-input" list="foodOptions" value="${escapeHtml(item.input || displayFoodName(item.food))}" placeholder="${t("foodPlaceholder")}" />
          </label>
          <label>
            <span>${t("amountLabel")}</span>
            <div class="meal-amount-box">
              <input class="meal-amount-input" type="number" min="1" step="${step}" value="${round(item.amount)}" />
              <span>${translateUnit(item.food.unit)}</span>
            </div>
          </label>
          <div class="row-total">
            <span>${t("calorieLabel")}</span>
            <strong>${round(nutrition.kcal)} kcal</strong>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function setEstimateStatus(message, mode = "") {
  elements.estimateStatus.textContent = message;
  elements.estimateStatus.className = `estimate-status ${mode}`.trim();
}

function applyTemplate(templateId, addDirectly = false) {
  const template = mealTemplates.find((item) => item.id === templateId);
  if (!template) return;

  const [templateName] = t("templates")[template.id] || [template.name];
  setMealDraftItems(templateToDraftItems(template), t("templateConfidence"));
  elements.mealType.value = template.meal;
  setEstimateStatus(formatText("templateStatus", { name: templateName }), "ready");

  if (addDirectly) {
    addFoodToLog();
  } else {
    setActiveTab("photo");
  }
}

function detectFromPhotoName(options = {}) {
  const preserveStatus = options.preserveStatus || false;
  const fileName = elements.foodPhoto.files[0]?.name?.toLowerCase() || "";
  const matchedFoods = foodDatabase.filter((food) =>
    food.keywords.some((keyword) => fileName.includes(keyword.toLowerCase()))
  );

  if (matchedFoods.length > 1) {
    const foods = matchedFoods.slice(0, 6);
    setMealDraftItems(
      foods.map((food) => makeMealDraftItem(food, portionForFood(food))),
      formatText("detectedMultiple", { count: foods.length })
    );
    if (!preserveStatus) setEstimateStatus(t("matchedMultiple"), "ready");
    return;
  }

  if (matchedFoods.length === 1) {
    const matched = matchedFoods[0];
    setMealDraftItems([makeMealDraftItem(matched, portionForFood(matched))], t("matchedSingle"));
    if (!preserveStatus) setEstimateStatus(t("matchedSingleStatus"), "ready");
    return;
  }

  setMealDraftItems(defaultMealDraftItems(), t("defaultPlateConfidence"));
  if (preserveStatus) return;

  setEstimateStatus(t("defaultPlateStatus"), "warning");
}

function detectFood() {
  detectFromPhotoName();
}

function addFoodToLog() {
  const items = mealDraftItems
    .filter((item) => item.food && Number(item.amount) > 0)
    .map((item) => {
      const amount = Number(item.amount) || 0;
      const nutrition = calculateFood(item.food, amount);
      return {
        id: createId(),
        meal: elements.mealType.value,
        name: item.input || displayFoodName(item.food),
        amount,
        unit: item.food.unit,
        kcal: nutrition.kcal,
        protein: nutrition.protein,
        carbs: nutrition.carbs,
        fat: nutrition.fat
      };
    });

  if (!items.length) return;

  state.logs[state.activeDate] = [...getDayLogs(), ...items];
  saveState();
  render();
  setActiveTab("dashboard");
}

function removeFood(id) {
  state.logs[state.activeDate] = getDayLogs().filter((item) => item.id !== id);
  saveState();
  render();
}

function clearDay() {
  state.logs[state.activeDate] = [];
  saveState();
  render();
}

function updateProfileFromForm(event) {
  const target = event.target;
  if (!target.id) return;

  const profile = state.profile;
  const numericFields = ["age", "height", "weight", "goalWeight", "activity", "pace"];
  const isBlankInput = event.type === "input" && target.value === "";

  if (target.id === "exercise") {
    if (isBlankInput) return;
    profile.exerciseByDate = {
      ...profile.exerciseByDate,
      [state.activeDate]: Number(target.value) || 0
    };
  } else if (target.id === "gender") {
    profile.gender = target.value;
  } else if (numericFields.includes(target.id)) {
    if (isBlankInput) return;
    profile[target.id] = Number(target.value) || defaultProfile[target.id];
  }

  saveState();
  render();
}

function setDate(offset) {
  const date = new Date(`${state.activeDate}T12:00:00`);
  date.setDate(date.getDate() + offset);
  state.activeDate = toDateKey(date);
  saveState();
  syncProfileForm();
  render();
}

function renderDashboard() {
  const totals = dayTotals();
  const profile = calculateProfile();
  const deficit = profile.tdee - totals.kcal;
  const remaining = profile.target - totals.kcal;
  const progress = Math.min(Math.max(totals.kcal / profile.target, 0), 1.2);
  const circumference = 452;

  elements.dayTitle.textContent = remaining >= 0
    ? formatText("canEat", { value: round(remaining) })
    : formatText("overBy", { value: round(Math.abs(remaining)) });
  elements.deficitLabel.textContent = deficit >= 0 ? t("currentDeficit") : t("currentSurplus");
  elements.deficitValue.textContent = round(Math.abs(deficit));
  elements.intakeMetric.textContent = round(totals.kcal);
  elements.targetMetric.textContent = round(profile.target);
  elements.burnMetric.textContent = round(profile.tdee);
  elements.macroTotal.textContent = `${round(totals.kcal)} kcal`;
  elements.proteinText.textContent = `${round(totals.protein, 1)}g`;
  elements.carbsText.textContent = `${round(totals.carbs, 1)}g`;
  elements.fatText.textContent = `${round(totals.fat, 1)}g`;
  elements.proteinMeter.value = Math.min(totals.protein, 180);
  elements.carbsMeter.value = Math.min(totals.carbs, 300);
  elements.fatMeter.value = Math.min(totals.fat, 100);
  elements.gaugeValue.style.strokeDashoffset = circumference - Math.min(progress, 1) * circumference;
  elements.gaugeValue.style.stroke = remaining >= 0 ? "var(--green)" : "var(--tomato)";

  if (deficit >= 300 && deficit <= 650) {
    elements.dailyNote.textContent = t("noteGood");
  } else if (deficit > 650) {
    elements.dailyNote.textContent = t("noteLarge");
  } else if (deficit > 0) {
    elements.dailyNote.textContent = t("noteSmall");
  } else {
    elements.dailyNote.textContent = t("noteNoDeficit");
  }

  const avg = averageDeficit();
  elements.avgDeficit.textContent = `${round(avg)} kcal`;
  elements.weeklyLoss.textContent = `${round((avg * 7) / 7700, 2)} kg`;
  elements.projectionPace.textContent = avg > 0 ? t("projectionEstimated") : t("projectionNeedMore");
}

function renderProfileResults() {
  const profile = calculateProfile();
  elements.bmrResult.textContent = `${round(profile.bmr)} kcal`;
  elements.tdeeResult.textContent = `${round(profile.tdee)} kcal`;
  elements.targetResult.textContent = `${round(profile.target)} kcal`;
  elements.goalGap.textContent = `${round(profile.goalGap, 1)} kg`;
}

function renderMealGroups() {
  const template = $("#foodItemTemplate");
  const meals = ["早餐", "午餐", "晚餐", "加餐"];
  const logs = getDayLogs();

  if (!logs.length) {
    elements.mealGroups.innerHTML = `<div class="empty-state">${t("emptyLog")}</div>`;
    return;
  }

  elements.mealGroups.innerHTML = "";
  meals.forEach((meal) => {
    const mealItems = logs.filter((item) => item.meal === meal);
    if (!mealItems.length) return;

    const section = document.createElement("section");
    section.className = "meal-section";
    const total = mealItems.reduce((sum, item) => sum + item.kcal, 0);
    section.innerHTML = `<div class="meal-title"><strong>${translateMeal(meal)}</strong><span>${round(total)} kcal</span></div>`;

    mealItems.forEach((item) => {
      const clone = template.content.cloneNode(true);
      clone.querySelector(".food-name").textContent = item.name;
      clone.querySelector(".food-meta").textContent = formatText("foodMeta", {
        amount: item.amount,
        unit: translateUnit(item.unit),
        protein: round(item.protein, 1),
        carbs: round(item.carbs, 1),
        fat: round(item.fat, 1)
      });
      clone.querySelector(".food-kcal").textContent = `${round(item.kcal)} kcal`;
      clone.querySelector(".remove-food").addEventListener("click", () => removeFood(item.id));
      section.appendChild(clone);
    });

    elements.mealGroups.appendChild(section);
  });
}

function renderTemplates() {
  const renderButton = (template, direct) => {
    const [name, description, tag] = t("templates")[template.id] || [template.name, template.description, template.tag];
    return `
    <button class="template-card" type="button" data-template="${template.id}" data-direct="${direct ? "true" : "false"}">
      <strong>${name}</strong>
      <span>${description}</span>
      <small>${tag}</small>
    </button>
  `;
  };

  elements.templateGrid.innerHTML = mealTemplates.map((template) => renderButton(template, false)).join("");
  elements.logTemplateGrid.innerHTML = mealTemplates.map((template) => renderButton(template, true)).join("");

  $$(".template-card").forEach((button) => {
    button.addEventListener("click", () => applyTemplate(button.dataset.template, button.dataset.direct === "true"));
  });
}

function render() {
  applyTranslations();
  populateFoodOptions();
  elements.activeDate.value = state.activeDate;
  syncMealOptions();
  syncProfileForm();
  renderMealBuilder();
  updateNutritionPreview();
  renderDashboard();
  renderProfileResults();
  renderMealGroups();
  renderTemplates();
}

function updateMealItemFromInput(row) {
  const item = mealDraftItems.find((draft) => draft.id === row.dataset.id);
  if (!item) return;

  const foodInput = row.querySelector(".meal-food-input");
  const amountInput = row.querySelector(".meal-amount-input");
  const matchedFood = findFoodByText(foodInput.value);
  const currentUnit = item.food.unit;
  const currentBase = item.food.base;

  item.input = foodInput.value.trim();
  item.amount = Number(amountInput.value) || item.amount || 1;

  if (matchedFood) {
    const shouldResetAmount = matchedFood.unit !== currentUnit || matchedFood.base !== currentBase;
    item.food = matchedFood;
    item.input = displayFoodName(matchedFood);
    if (shouldResetAmount) item.amount = portionForFood(matchedFood);
  }
}

function updateMealRowTotal(row) {
  const item = mealDraftItems.find((draft) => draft.id === row.dataset.id);
  if (!item) return;
  const nutrition = calculateFood(item.food, Number(item.amount) || 0);
  row.querySelector(".row-total strong").textContent = `${round(nutrition.kcal)} kcal`;
}

function bindEvents() {
  $$(".nav-tab").forEach((button) => {
    button.addEventListener("click", () => setActiveTab(button.dataset.tab));
  });

  $("#prevDay").addEventListener("click", () => setDate(-1));
  $("#nextDay").addEventListener("click", () => setDate(1));
  elements.activeDate.addEventListener("change", () => {
    state.activeDate = elements.activeDate.value || todayKey();
    saveState();
    render();
  });
  elements.languageSelect.addEventListener("change", () => {
    state.language = elements.languageSelect.value;
    syncDraftDisplayNames();
    saveState();
    render();
  });

  elements.foodPhoto.addEventListener("change", () => {
    const file = elements.foodPhoto.files[0];
    if (!file) return;
    elements.photoPreview.src = URL.createObjectURL(file);
    elements.photoPreview.hidden = false;
    elements.uploadPrompt.hidden = true;
    detectFood();
  });

  $("#detectButton").addEventListener("click", detectFood);
  $("#addFoodButton").addEventListener("click", addFoodToLog);
  elements.addMealItemButton.addEventListener("click", () => {
    mealDraftItems.push(makeMealDraftItem(foodDatabase[0], portionForFood(foodDatabase[0])));
    renderMealBuilder();
    updateNutritionPreview();
  });
  elements.mealBuilder.addEventListener("click", (event) => {
    const removeButton = event.target.closest(".remove-meal-item");
    if (!removeButton) return;
    const row = removeButton.closest(".meal-item-row");
    mealDraftItems = mealDraftItems.filter((item) => item.id !== row.dataset.id);
    if (!mealDraftItems.length) mealDraftItems = defaultMealDraftItems();
    renderMealBuilder();
    updateNutritionPreview();
  });
  elements.mealBuilder.addEventListener("change", (event) => {
    const row = event.target.closest(".meal-item-row");
    if (!row) return;
    updateMealItemFromInput(row);
    renderMealBuilder();
    updateNutritionPreview();
  });
  elements.mealBuilder.addEventListener("input", (event) => {
    const row = event.target.closest(".meal-item-row");
    if (!row) return;

    if (event.target.classList.contains("meal-food-input") && findExactFoodByText(event.target.value)) {
      updateMealItemFromInput(row);
      renderMealBuilder();
      updateNutritionPreview();
    }

    if (event.target.classList.contains("meal-amount-input")) {
      updateMealItemFromInput(row);
      updateMealRowTotal(row);
      updateNutritionPreview();
    }
  });

  $("#profileForm").addEventListener("input", updateProfileFromForm);
  $("#profileForm").addEventListener("change", updateProfileFromForm);
  $("#clearDayButton").addEventListener("click", clearDay);
  $$(".activity-presets button").forEach((button) => {
    button.addEventListener("click", () => {
      const exercise = Number(button.dataset.exercise) || 0;
      state.profile.exerciseByDate = {
        ...state.profile.exerciseByDate,
        [state.activeDate]: exercise
      };
      saveState();
      render();
    });
  });
}

populateFoodOptions();
setMealDraftItems(defaultMealDraftItems(), t("defaultPlateConfidence"));
bindEvents();
render();
