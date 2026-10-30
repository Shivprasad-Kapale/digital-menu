const LANGUAGE_KEY = "jadhav-dhaba-language-v2";

const translations = {
  en: {
    menuCategories: "Menu categories",
    switchLanguage: "Switch language",
    openSearch: "Open menu search",
    closeSearch: "Close menu search",
    searchLabel: "Search menu",
    searchPlaceholder: "Search dishes...",
    noSearchResults: "No dishes found. Try another name.",
    all: "All",
    closingLine: "From our counter to your cravings.",
    closingSignature: "Jadhav Dhaba · Veg & Non-Veg",
    footerTagline: "Veg & Non-Veg",
    items: "items",
    item: "item",
  },
  mr: {
    menuCategories: "मेनूचे विभाग",
    switchLanguage: "भाषा बदला",
    openSearch: "मेनूमध्ये शोध उघडा",
    closeSearch: "मेनू शोध बंद करा",
    searchLabel: "मेनूमध्ये शोधा",
    searchPlaceholder: "पदार्थ शोधा...",
    noSearchResults: "पदार्थ सापडले नाहीत. दुसरे नाव वापरून पाहा.",
    all: "सर्व",
    closingLine: "तुमच्या आवडीसाठी आमच्या काउंटरवरून.",
    closingSignature: "जाधव धाबा · व्हेज आणि नॉन व्हेज",
    footerTagline: "व्हेज आणि नॉन व्हेज",
    items: "पदार्थ",
    item: "पदार्थ",
  },
};

const categories = [
  { id: "snacks", nameEn: "Snacks Veg / Non-Veg", nameMr: "स्नैक्स व्हेज / नॉनव्हेज", emoji: "🍢" },
  { id: "non-veg", nameEn: "Non Veg", nameMr: "नॉन व्हेज", emoji: "🍗" },
  { id: "biryani", nameEn: "Biryani / Egg Special", nameMr: "बिर्याणी / अंडा स्पेशल", emoji: "🍛" },
  { id: "veg", nameEn: "Veg", nameMr: "व्हेज", emoji: "🥘" },
  { id: "roti-rice", nameEn: "Roti & Rice", nameMr: "रोटी & राईस", emoji: "🫓" },
  { id: "thali", nameEn: "Veg Non-Veg Thali", nameMr: "व्हेज नॉनव्हेज थाळी", emoji: "🍽️" },
];

const itemNames = [
  ["snacks", "Roast Papad", "रोस्ट पापड"], ["snacks", "Fry Papad", "फ्राय पापड"], ["snacks", "Masala Papad", "मसाला पापड"], ["snacks", "Nagali Papad", "नागली पापड"],
  ["snacks", "Matki Fry", "मटकी फ्राय"], ["snacks", "Soyabin Roast", "सोयाबिन रोस्ट"], ["snacks", "Soyabin Katki", "सोयाबिन कटकी"], ["snacks", "Chicken Fry", "चिकन फ्राय"],
  ["snacks", "Mutton Fry", "मटन फ्राय"], ["snacks", "Boiled Egg 1 pc", "बॉयल अंडे १ नग"], ["snacks", "Boil Fry 1 pc", "बॉयल फ्राय १ नग"],
  ["non-veg", "Chicken Curry Plate", "चिकन करी प्लेट"], ["non-veg", "Chicken Masala Plate", "चिकन मसाला प्लेट"], ["non-veg", "Chicken Kolhapuri Plate", "चिकन कोल्हापुरी प्लेट"],
  ["non-veg", "Chicken Fry Plate", "चिकन फ्राय प्लेट"], ["non-veg", "Chicken Roast Plate", "चिकन रोस्ट प्लेट"], ["non-veg", "Chicken Half Handi", "चिकन हाफ हंडी"], ["non-veg", "Chicken Full Handi", "चिकन फुल हंडी"],
  ["non-veg", "Mutton Curry Plate", "मटन करी प्लेट"], ["non-veg", "Mutton Masala Plate", "मटन मसाला प्लेट"], ["non-veg", "Mutton Kolhapuri Plate", "मटन कोल्हापुरी प्लेट"], ["non-veg", "Mutton Fry Plate", "मटन फ्राय प्लेट"],
  ["non-veg", "Mutton Half Handi", "मटन हाफ हंडी"], ["non-veg", "Mutton Full Handi", "मटन फुल हंडी"], ["non-veg", "Egg Bhurji Plate", "अंडा भुर्जी प्लेट"], ["non-veg", "Egg Omelette", "अंडा ऑमलेट"],
  ["non-veg", "Egg Curry Plate", "अंडा करी प्लेट"], ["non-veg", "Egg Masala Plate", "अंडा मसाला प्लेट"],
  ["biryani", "Chicken Half Biryani", "चिकन हाफ बिर्याणी"], ["biryani", "Chicken Full Biryani", "चिकन फुल बिर्याणी"], ["biryani", "Mutton Half Biryani", "मटन हाफ बिर्याणी"],
  ["biryani", "Mutton Full Biryani", "मटन फुल बिर्याणी"], ["biryani", "Egg Biryani", "अंडा बिर्याणी"], ["biryani", "Veg Full Biryani", "व्हेज फुल बिर्याणी"],
  ["veg", "Jeera Dal", "जिरा दाल"], ["veg", "Dal Fry", "दाल फ्राय"], ["veg", "Dal Tadka", "दाल तडका"], ["veg", "Dal Kolhapuri", "दाल कोल्हापुरी"], ["veg", "Dal Moghlai", "दाल मोगलाई"],
  ["veg", "Methi Masala", "मेथी मसाला"], ["veg", "Lasun Methi", "लसुन मेथी"], ["veg", "Matar Methi", "मटर मेथी"], ["veg", "Kolhapuri Methi", "कोल्हापुरी मेथी"], ["veg", "Shev Bhaji", "शेवभाजी"],
  ["veg", "Shev Masala", "शेव मसाला"], ["veg", "Chana Masala", "चना मसाला"], ["veg", "Chana Fry", "चना फ्राय"], ["veg", "Chana Kolhapuri", "चना कोल्हापुरी"], ["veg", "Matki Masala", "मटकी मसाला"],
  ["veg", "Matki Fry", "मटकी फ्राय"], ["veg", "Matki Curry", "मटकी करी"], ["veg", "Baingan Masala", "बैंगन मसाला"], ["veg", "Baingan Bharta", "बैंगन भर्ता"], ["veg", "Gobi Masala", "गोबी मसाला"],
  ["veg", "Alu Gobi", "आलु गोबी"], ["veg", "Shevga Masala", "शेवगा मसाला"], ["veg", "Shevga Fry", "शेवगा फ्राय"], ["veg", "Jeera Alu", "जिरा आलु"], ["veg", "Alu Matar", "आलु मटर"],
  ["veg", "Soyabin Masala", "सोयाबीन मसाला"], ["veg", "Soyabin Manchurian", "सोयाबीन मंचुरियन"], ["veg", "Soyabin Chilli", "सोयाबीन चिल्ली"], ["veg", "Soyabin Fry", "सोयाबीन फ्राय"],
  ["roti-rice", "Tandoori Roti", "तंदुरी रोटी"], ["roti-rice", "Chapati", "चपाती"], ["roti-rice", "Bajri Bhakar", "बाजरी भाकर"], ["roti-rice", "Plain Rice", "प्लेन राईस"], ["roti-rice", "Jeera Rice", "जिरा राईस"],
  ["roti-rice", "Hej Full Pulav", "हेज फुल पुलाव"], ["roti-rice", "Masala Rice", "मसाला राईस"], ["roti-rice", "Water Bottle", "पाणी बॉटल"], ["roti-rice", "Cold Drink", "कोल्ड्रिंग"],
  ["thali", "Rice Plate", "राईस प्लेट"], ["thali", "Egg Curry Thali", "अंडा करी थाळी"], ["thali", "Chicken Thali", "चिकन थाळी"], ["thali", "Mutton Thali", "मटन थाळी"],
];

const itemDescriptions = {
  "Roast Papad": ["A crisp lentil wafer, lightly roasted.", "कुरकुरीत डाळीचा पापड हलका भाजून तयार केलेला."],
  "Fry Papad": ["A golden, crunchy fried lentil wafer.", "सोनेरी आणि कुरकुरीत तळलेला डाळीचा पापड."],
  "Masala Papad": ["Crisp papad topped with a tangy spice mix.", "कुरकुरीत पापडावर चटपटीत मसाला."],
  "Nagali Papad": ["A crisp wafer made with finger millet.", "नाचणीपासून बनवलेला कुरकुरीत पापड."],
  "Matki Fry": ["Moth beans tossed with warming spices.", "मटकी परतून मसाल्यांसोबत तयार केलेली."],
  "Soyabin Roast": ["A roasted soybean snack with a savory bite.", "चवदार भाजलेला सोयाबीनचा नाश्ता."],
  "Soyabin Katki": ["A crisp, spiced soybean snack.", "कुरकुरीत आणि मसालेदार सोयाबीनचा नाश्ता."],
  "Chicken Fry": ["Spiced chicken pieces, fried until golden.", "मसालेदार चिकनचे तुकडे खरपूस तळलेले."],
  "Mutton Fry": ["Tender mutton pieces fried with spices.", "मटणाचे मऊ तुकडे मसाल्यांसोबत तळलेले."],
  "Boiled Egg 1 pc": ["One simply boiled egg.", "एक साधे उकडलेले अंडे."],
  "Boil Fry 1 pc": ["One boiled egg, finished with a quick fry.", "एक उकडलेले अंडे मसाल्यात परतून."],
  "Chicken Curry Plate": ["Chicken simmered in a classic curry gravy.", "चिकन पारंपरिक करीच्या रस्स्यात शिजवलेले."],
  "Chicken Masala Plate": ["Chicken cooked in a rich, spiced masala.", "चिकन घट्ट आणि मसालेदार ग्रेव्हीत शिजवलेले."],
  "Chicken Kolhapuri Plate": ["Chicken in a bold, chilli-forward Kolhapuri gravy.", "तिखट कोल्हापुरी रस्स्यातील चिकन."],
  "Chicken Fry Plate": ["A plate of crisp, spiced fried chicken.", "मसालेदार कुरकुरीत चिकन फ्रायची प्लेट."],
  "Chicken Roast Plate": ["Roasted chicken seasoned with Indian spices.", "भारतीय मसाल्यांत भाजलेल्या चिकनची प्लेट."],
  "Chicken Half Handi": ["Half handi of slow-cooked chicken curry.", "हंडीमध्ये मंद शिजवलेली अर्धी चिकन करी."],
  "Chicken Full Handi": ["Full handi of slow-cooked chicken curry.", "हंडीमध्ये मंद शिजवलेली पूर्ण चिकन करी."],
  "Mutton Curry Plate": ["Mutton simmered in a hearty curry gravy.", "मटण भरदार करीच्या रस्स्यात शिजवलेले."],
  "Mutton Masala Plate": ["Mutton cooked in a rich, spiced masala.", "मटण घट्ट आणि मसालेदार ग्रेव्हीत शिजवलेले."],
  "Mutton Kolhapuri Plate": ["Mutton in a bold, chilli-forward Kolhapuri gravy.", "तिखट कोल्हापुरी रस्स्यातील मटण."],
  "Mutton Fry Plate": ["A plate of spiced fried mutton pieces.", "मसालेदार मटण फ्रायची प्लेट."],
  "Mutton Half Handi": ["Half handi of slow-cooked mutton curry.", "हंडीमध्ये मंद शिजवलेली अर्धी मटण करी."],
  "Mutton Full Handi": ["Full handi of slow-cooked mutton curry.", "हंडीमध्ये मंद शिजवलेली पूर्ण मटण करी."],
  "Egg Bhurji Plate": ["Scrambled eggs cooked with onions and spices.", "कांदा आणि मसाल्यांसोबत केलेली अंडा भुर्जी."],
  "Egg Omelette": ["A soft omelette seasoned with Indian spices.", "भारतीय मसाल्यांनी चव दिलेले मऊ ऑमलेट."],
  "Egg Curry Plate": ["Boiled eggs served in a spiced curry gravy.", "मसालेदार करीच्या रस्स्यातील उकडलेली अंडी."],
  "Egg Masala Plate": ["Eggs coated in a thick, savory masala.", "घट्ट आणि चवदार मसाल्यातील अंडी."],
  "Chicken Half Biryani": ["Half portion of fragrant chicken biryani rice.", "सुगंधी चिकन बिर्याणीचा अर्धा भाग."],
  "Chicken Full Biryani": ["Full portion of fragrant chicken biryani rice.", "सुगंधी चिकन बिर्याणीचा पूर्ण भाग."],
  "Mutton Half Biryani": ["Half portion of fragrant mutton biryani rice.", "सुगंधी मटण बिर्याणीचा अर्धा भाग."],
  "Mutton Full Biryani": ["Full portion of fragrant mutton biryani rice.", "सुगंधी मटण बिर्याणीचा पूर्ण भाग."],
  "Egg Biryani": ["Fragrant spiced rice cooked with egg.", "अंड्यासोबत शिजवलेला सुगंधी मसालेदार भात."],
  "Veg Full Biryani": ["A full portion of aromatic vegetable biryani.", "सुगंधी भाज्यांच्या बिर्याणीचा पूर्ण भाग."],
  "Jeera Dal": ["Lentils gently seasoned with cumin.", "जिऱ्याची फोडणी दिलेली साधी डाळ."],
  "Dal Fry": ["Cooked lentils finished with a savory fry tempering.", "खमंग फोडणी देऊन केलेली डाळ फ्राय."],
  "Dal Tadka": ["Lentils topped with a sizzling spice tempering.", "खमंग मसाल्याची फोडणी दिलेली डाळ तडका."],
  "Dal Kolhapuri": ["A robust, spicy lentil curry, Kolhapuri style.", "तिखट आणि झणझणीत कोल्हापुरी डाळ."],
  "Dal Moghlai": ["A mellow, richly seasoned Moghlai-style lentil curry.", "मोगलाई पद्धतीची सौम्य आणि मसालेदार डाळ."],
  "Methi Masala": ["Fenugreek leaves cooked in a spiced masala.", "मेथीची पाने मसालेदार ग्रेव्हीत शिजवलेली."],
  "Lasun Methi": ["Fenugreek leaves tempered with garlic.", "लसूण फोडणीतील मेथीची भाजी."],
  "Matar Methi": ["Fenugreek leaves and peas in a savory masala.", "मेथी आणि मटार मसाल्यात शिजवलेले."],
  "Kolhapuri Methi": ["A spicy Kolhapuri-style fenugreek preparation.", "झणझणीत कोल्हापुरी पद्धतीची मेथी."],
  "Shev Bhaji": ["Savory curry made with crunchy shev.", "शेव घालून केलेली चवदार भाजी."],
  "Shev Masala": ["Shev coated in a thick, spiced gravy.", "घट्ट मसालेदार ग्रेव्हीतली शेव."],
  "Chana Masala": ["Chickpeas simmered in an aromatic masala.", "सुगंधी मसाल्यात शिजवलेले चणे."],
  "Chana Fry": ["Chickpeas tossed with spices until savory.", "मसाल्यांसोबत परतलेले चणे."],
  "Chana Kolhapuri": ["Chickpeas in a fiery Kolhapuri gravy.", "तिखट कोल्हापुरी रस्स्यातील चणे."],
  "Matki Masala": ["Moth beans cooked in a spiced masala.", "मसाल्यात शिजवलेली मटकी."],
  "Matki Curry": ["Moth beans simmered in a homestyle curry.", "घरगुती करीच्या रस्स्यात शिजवलेली मटकी."],
  "Baingan Masala": ["Eggplant cooked in a savory spiced gravy.", "वांग्याची मसालेदार ग्रेव्हीतली भाजी."],
  "Baingan Bharta": ["Smoky mashed eggplant with Indian spices.", "धुरीची चव असलेले मसालेदार वांग्याचे भरीत."],
  "Gobi Masala": ["Cauliflower florets cooked in a spiced masala.", "फुलकोबीचे तुरे मसाल्यात शिजवलेले."],
  "Alu Gobi": ["Potato and cauliflower cooked with spices.", "बटाटा आणि फुलकोबी मसाल्यांसोबत शिजवलेले."],
  "Shevga Masala": ["Drumsticks cooked in a flavorful masala.", "शेवग्याच्या शेंगा चवदार मसाल्यात शिजवलेल्या."],
  "Shevga Fry": ["Drumsticks stir-fried with Indian spices.", "शेवग्याच्या शेंगा भारतीय मसाल्यांत परतलेल्या."],
  "Jeera Alu": ["Potatoes tossed with cumin and spices.", "जिरे आणि मसाल्यांसोबत परतलेले बटाटे."],
  "Alu Matar": ["Potatoes and peas in a homestyle curry.", "बटाटा आणि मटारची घरगुती रस्सेदार भाजी."],
  "Soyabin Masala": ["Soy chunks simmered in a spiced gravy.", "सोयाबीनच्या वड्या मसालेदार ग्रेव्हीत शिजवलेल्या."],
  "Soyabin Manchurian": ["Soy bites tossed in Indo-Chinese Manchurian sauce.", "सोयाबीनचे तुकडे इंडो-चायनीज मंचुरियन सॉसमध्ये."],
  "Soyabin Chilli": ["Soy bites tossed with chilli and savory sauce.", "सोयाबीनचे तुकडे तिखट चिली सॉसमध्ये."],
  "Soyabin Fry": ["Soy chunks pan-fried with spices.", "सोयाबीनच्या वड्या मसाल्यांसोबत परतलेल्या."],
  "Tandoori Roti": ["Whole-wheat flatbread baked in a tandoor.", "तंदूरमध्ये भाजलेली गव्हाची रोटी."],
  Chapati: ["Soft, everyday whole-wheat flatbread.", "मऊ आणि रोजच्या जेवणातील गव्हाची चपाती."],
  "Bajri Bhakar": ["Rustic flatbread made from pearl millet.", "बाजरीच्या पिठाची पारंपरिक भाकरी."],
  "Plain Rice": ["Steamed rice, a simple meal-time staple.", "वाफवलेला साधा भात."],
  "Jeera Rice": ["Fragrant rice tempered with cumin.", "जिऱ्याची फोडणी दिलेला सुगंधी भात."],
  "Hej Full Pulav": ["A full serving of seasoned vegetable pulao.", "मसालेदार पुलावचा पूर्ण भाग."],
  "Masala Rice": ["Rice tossed with a savory spice blend.", "खमंग मसाल्यांसोबत परतलेला भात."],
  "Water Bottle": ["Packaged drinking water.", "बाटलीबंद पिण्याचे पाणी."],
  "Cold Drink": ["A chilled soft drink to go with your meal.", "जेवणासोबत थंड शीतपेय."],
  "Rice Plate": ["A meal plate served with rice.", "भातासोबत दिले जाणारे जेवणाचे ताट."],
  "Egg Curry Thali": ["A complete meal with egg curry and accompaniments.", "अंडा करी आणि इतर पदार्थांसह पूर्ण थाळी."],
  "Chicken Thali": ["A complete meal with chicken and accompaniments.", "चिकन आणि इतर पदार्थांसह पूर्ण थाळी."],
  "Mutton Thali": ["A complete meal with mutton and accompaniments.", "मटण आणि इतर पदार्थांसह पूर्ण थाळी."],
};

const foodPhotoIds = {
  snacks: [34270742, 5992272, 39104670, 37068875, 5436119, 39524775, 12865864, 13220344, 39524783, 39872740, 39815346],
  "non-veg": [33643313, 9792458, 13823417, 10508207, 40262819, 19834447, 20408444, 12089284, 40262818, 11115801, 19834446, 9345647, 2474661, 29346015, 38464138, 19781596, 12089283],
  biryani: [9738983, 5410401, 31537385, 30307761, 8250738, 30748996],
  veg: [8148149, 8818667, 39477971, 39977160, 5775684, 8818723, 7686374, 8818732, 8818657, 32797056, 39977161, 35539324, 36125185, 36478888, 39506026, 17223838, 36885763, 39044714, 36885725, 17223837, 958547, 958546, 9738980, 2569760, 618491, 5410418, 4570082, 36854500, 10464100],
  "roti-rice": [39983836, 39493668, 6358976, 8489705, 28674713, 7593230, 7593267, 39493672, 35552985],
  thali: [29148133, 7804406, 35008222, 25440306],
};

const photoIndexes = new Map(categories.map((category) => [category.id, 0]));
const menuItems = itemNames.map(([category, nameEn, nameMr], index) => {
  const photoIndex = photoIndexes.get(category);
  const photoId = foodPhotoIds[category][photoIndex];
  photoIndexes.set(category, photoIndex + 1);
  return {
    id: `${category}-${index + 1}`,
    category,
    nameEn,
    nameMr,
    descriptionEn: itemDescriptions[nameEn][0],
    descriptionMr: itemDescriptions[nameEn][1],
    image: `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=640`,
    emoji: categories.find((entry) => entry.id === category).emoji,
  };
});

const categoryTabs = document.querySelector(".category-tabs");
const menuGroups = document.querySelector("#menu-groups");
const languageToggle = document.querySelector("#language-toggle");
const searchToggle = document.querySelector("#search-toggle");
const menuSearch = document.querySelector(".menu-search");
const searchInput = document.querySelector("#menu-search");
const searchEmptyState = document.querySelector("#search-empty-state");

function getInitialLanguage() {
  try {
    return localStorage.getItem(LANGUAGE_KEY) === "en" ? "en" : "mr";
  } catch {
    return "en";
  }
}

let language = getInitialLanguage();
let selectedCategory = "all";
let searchQuery = "";

function selectCategory(category) {
  selectedCategory = category;
  document.querySelectorAll(".category-tab").forEach((tab) => {
    const isSelected = tab.dataset.category === category;
    tab.classList.toggle("is-active", isSelected);
    tab.setAttribute("aria-selected", String(isSelected));
  });
  applyMenuFilters();
}

function normalizeSearchText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

function applyMenuFilters() {
  let visibleItems = 0;
  document.querySelectorAll(".menu-group").forEach((group) => {
    const categoryMatches = selectedCategory === "all" || group.dataset.group === selectedCategory;
    let visibleGroupItems = 0;
    group.querySelectorAll(".menu-card").forEach((card) => {
      const matchesSearch = !searchQuery || card.dataset.searchText.includes(searchQuery);
      card.classList.toggle("is-hidden", !matchesSearch);
      if (matchesSearch) visibleGroupItems += 1;
    });
    group.classList.toggle("is-hidden", !categoryMatches || visibleGroupItems === 0);
    if (categoryMatches) visibleItems += visibleGroupItems;
  });
  searchEmptyState.hidden = !searchQuery || visibleItems > 0;
}

function createFoodCard(item) {
  const card = document.createElement("article");
  card.className = "menu-card";
  const category = categories.find((entry) => entry.id === item.category);
  card.dataset.searchText = normalizeSearchText([
    item.nameEn,
    item.nameMr,
    item.descriptionEn,
    item.descriptionMr,
    category.nameEn,
    category.nameMr,
  ].join(" "));

  const visual = document.createElement("div");
  visual.className = "food-visual";
  const image = document.createElement("img");
  image.className = "food-image";
  image.src = item.image;
  image.alt = language === "mr" ? item.nameMr : item.nameEn;
  image.loading = "lazy";
  image.addEventListener("error", () => {
    const emoji = document.createElement("span");
    emoji.className = "food-emoji";
    emoji.setAttribute("aria-hidden", "true");
    emoji.textContent = item.emoji;
    image.replaceWith(emoji);
  }, { once: true });
  visual.append(image);

  const copy = document.createElement("div");
  copy.className = "card-copy";
  const titleRow = document.createElement("div");
  titleRow.className = "card-title-row";
  const title = document.createElement("h4");
  title.textContent = language === "mr" ? item.nameMr : item.nameEn;
  titleRow.append(title);
  if (item.category === "veg" || item.category === "roti-rice") {
    const vegetarian = document.createElement("span");
    vegetarian.className = "veg-dot";
    vegetarian.setAttribute("aria-label", language === "mr" ? "शाकाहारी" : "Vegetarian");
    vegetarian.title = vegetarian.getAttribute("aria-label");
    titleRow.append(vegetarian);
  }
  const description = document.createElement("p");
  description.className = "item-description";
  description.textContent = language === "mr" ? item.descriptionMr : item.descriptionEn;
  copy.append(titleRow, description);
  card.append(visual, copy);
  return card;
}

function renderMenu() {
  const allTab = document.createElement("button");
  allTab.className = "category-tab is-active";
  allTab.type = "button";
  allTab.setAttribute("role", "tab");
  allTab.setAttribute("aria-selected", "true");
  allTab.dataset.category = "all";
  allTab.innerHTML = `<span>${translations[language].all}</span><span class="category-count">${String(menuItems.length).padStart(2, "0")}</span>`;
  categoryTabs.replaceChildren(allTab);

  const groups = categories.map((category) => {
    const items = menuItems.filter((item) => item.category === category.id);
    const tab = document.createElement("button");
    tab.className = "category-tab";
    tab.type = "button";
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-selected", "false");
    tab.dataset.category = category.id;
    tab.innerHTML = `<span>${language === "mr" ? category.nameMr : category.nameEn}</span><span class="category-count">${String(items.length).padStart(2, "0")}</span>`;
    categoryTabs.append(tab);
    tab.addEventListener("click", () => selectCategory(category.id));

    const section = document.createElement("section");
    section.className = "menu-group";
    section.dataset.group = category.id;
    const heading = document.createElement("div");
    heading.className = "group-heading";
    const titleBlock = document.createElement("div");
    const title = document.createElement("h3");
    const englishName = document.createElement("span");
    englishName.textContent = category.nameEn;
    const marathiName = document.createElement("span");
    marathiName.className = "group-name-mr";
    marathiName.textContent = category.nameMr;
    title.append(englishName, marathiName);
    titleBlock.append(title);
    const count = document.createElement("span");
    count.className = "group-count";
    count.textContent = `${String(items.length).padStart(2, "0")} ${items.length === 1 ? translations[language].item : translations[language].items}`;
    heading.append(titleBlock, count);
    const grid = document.createElement("div");
    grid.className = "menu-grid";
    grid.append(...items.map(createFoodCard));
    section.append(heading, grid);
    return section;
  });

  allTab.addEventListener("click", () => selectCategory("all"));
  menuGroups.replaceChildren(...groups);
}

function translatePage() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll("[data-language-label]").forEach((label) => {
    label.classList.toggle("is-current", label.dataset.languageLabel === language);
  });
  languageToggle.setAttribute("aria-label", translations[language].switchLanguage);
  searchToggle.setAttribute("aria-label", menuSearch.hidden
    ? translations[language].openSearch
    : translations[language].closeSearch);
  searchInput.setAttribute("aria-label", translations[language].searchLabel);
  searchInput.placeholder = translations[language].searchPlaceholder;
  searchEmptyState.textContent = translations[language].noSearchResults;
  document.querySelector('[role="tablist"]').setAttribute("aria-label", translations[language].menuCategories);
  renderMenu();
  selectCategory("all");
}

searchInput.addEventListener("input", () => {
  searchQuery = normalizeSearchText(searchInput.value);
  applyMenuFilters();
});

function closeSearch() {
  menuSearch.hidden = true;
  searchToggle.setAttribute("aria-expanded", "false");
  searchToggle.setAttribute("aria-label", translations[language].openSearch);
  searchInput.value = "";
  searchQuery = "";
  applyMenuFilters();
}

searchToggle.addEventListener("click", () => {
  if (!menuSearch.hidden) {
    closeSearch();
    return;
  }
  menuSearch.hidden = false;
  searchToggle.setAttribute("aria-expanded", "true");
  searchToggle.setAttribute("aria-label", translations[language].closeSearch);
  searchInput.focus();
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeSearch();
    searchToggle.focus();
  }
});

languageToggle.addEventListener("click", () => {
  language = language === "en" ? "mr" : "en";
  try {
    localStorage.setItem(LANGUAGE_KEY, language);
  } catch {
    // Language selection still works for the current page if storage is unavailable.
  }
  translatePage();
});

translatePage();