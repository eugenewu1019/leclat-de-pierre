import { NavItem, DessertItem, ChefProfile, ContentText } from './types';

export const APP_NAME = "L'ÉCLAT DE PIERRE";

export const NAV_ITEMS: NavItem[] = [
  { id: 'philosophy', label: { zh: '品牌哲學', en: 'Philosophy' } },
  { id: 'collection', label: { zh: '當季展覽', en: 'Exhibition' } },
  { id: 'craft', label: { zh: '工藝與材質', en: 'Craft & Materials' } },
  { id: 'architect', label: { zh: '甜點建築師', en: 'The Architect' } },
];

export const HERO_TEXT: { title: ContentText; subtitle: ContentText } = {
  title: {
    zh: '味覺的野獸派建築',
    en: 'Brutalism on the Palate'
  },
  subtitle: {
    zh: '以水泥與結構之名，解構甜點的既定形式',
    en: 'Deconstructing pastry norms through concrete and structure'
  }
};

export const PHILOSOPHY_CONTENT: { title: ContentText; body: ContentText[] } = {
  title: { zh: '灰階美學', en: 'Aesthetics of Grey' },
  body: [
    {
      zh: 'L\'ÉCLAT DE PIERRE 不僅是一間甜點店，更是一座關於味覺的微型美術館。我們摒棄了市面上甜點過度的色素與裝飾，回到物質最原始的顏色——大地的灰、食材的褐、以及純粹的黑白。',
      en: 'L\'ÉCLAT DE PIERRE is not merely a patisserie, but a miniature museum of taste. We reject the excessive coloring and decoration found in the market, returning to the primal colors of matter—the grey of the earth, the brown of ingredients, and pure black and white.'
    },
    {
      zh: '創辦人將建築學中的「負空間」概念引入甜點設計。每一口甜點的結構都經過精密計算，如同清水模建築般，外表冷峻，內在卻蘊含著溫潤的光影與層次。在這裡，甜點是可食用的建築藝術。',
      en: 'The founder introduces the concept of "negative space" from architecture into dessert design. The structure of every bite is precisely calculated, like fair-faced concrete architecture—cold on the outside, yet holding warm light and depth within. Here, dessert is edible architectural art.'
    }
  ]
};

export const DESSERTS: DessertItem[] = [
  {
    id: 'd1',
    name: { zh: '作品 No.1：清水模', en: 'Opus No.1: Béton Brut' },
    description: { zh: '黑芝麻慕斯 / 台灣北港花生醬 / 水泥灰竹炭淋面', en: 'Black Sesame Mousse / Beigang Peanut Butter / Concrete Grey Bamboo Charcoal Glaze' },
    ingredients: { zh: '主體：日本九鬼黑芝麻 / 法國依思尼鮮奶油', en: 'Core: Kuki Black Sesame (Japan) / Isigny Ste Mère Cream' },
    imageUrl: '/assets/images/collection-beton.png',
    year: '2023',
    price: 320,
    structure: {
      layers: [
        { name: { zh: '水泥灰竹炭淋面', en: 'Concrete Glaze' }, thickness: '2mm', texture: { zh: '光澤 / 鏡面', en: 'Glossy / Reflective' }, temperature: '4°C' },
        { name: { zh: '黑芝麻慕斯', en: 'Black Sesame Mousse' }, thickness: '45mm', texture: { zh: '綿密 / 空氣感', en: 'Velvety / Airy' }, temperature: '4°C' },
        { name: { zh: '流心花生醬', en: 'Liquid Peanut Core' }, thickness: '15mm', texture: { zh: '液態 / 濃郁', en: 'Liquid / Rich' }, temperature: '18°C' },
        { name: { zh: '黑炭布列塔尼酥餅', en: 'Charcoal Sablé' }, thickness: '8mm', texture: { zh: '酥脆 / 顆粒感', en: 'Crumbly / Sandy' }, temperature: '22°C' },
      ],
      flavor: { sweetness: 40, acidity: 10, bitterness: 60, texture: 85 },
      construction: [
        { step: '01', action: { zh: '基底建構', en: 'Foundation' }, time: '2h', details: { zh: '烘烤竹炭酥餅至完全脫水，確保結構支撐力。', en: 'Baking charcoal sablé until dehydrated for structural integrity.' } },
        { step: '02', action: { zh: '核心灌漿', en: 'Core Casting' }, time: '4h', details: { zh: '注入花生流心並急速冷凍定型，形成內部負空間。', en: 'Injecting peanut core and flash freezing to create negative space.' } },
        { step: '03', action: { zh: '表面粉飾', en: 'Finishing' }, time: '12h', details: { zh: '淋上灰階鏡面淋醬，模擬清水混凝土質感。', en: 'Applying grey mirror glaze to simulate fair-faced concrete.' } },
      ],
      mechanics: { zh: '利用不同密度的慕斯與流心，創造出「懸臂樑」般的味覺結構，在入口瞬間崩塌釋放風味。', en: 'Utilizing density differences between mousse and core to create a "cantilever" flavor structure that collapses upon tasting.' }
    }
  },
  {
    id: 'd2',
    name: { zh: '作品 No.5：年輪', en: 'Opus No.5: Growth Ring' },
    description: { zh: '煙燻威士忌巧克力 / 焦糖榛果 / 木質調香草', en: 'Smoked Whiskey Chocolate / Caramelized Hazelnut / Woody Vanilla' },
    ingredients: { zh: '主體：法芙娜 70% 瓜納拉巧克力 / 麥卡倫 12年', en: 'Core: Valrhona Guanaja 70% / The Macallan 12 Years' },
    imageUrl: '/assets/images/collection-ring.png',
    year: '2024',
    price: 360,
    structure: {
      layers: [
        { name: { zh: '煙燻巧克力外殼', en: 'Smoked Chocolate Shell' }, thickness: '1mm', texture: { zh: '硬脆', en: 'Snappy' }, temperature: '16°C' },
        { name: { zh: '威士忌甘納許', en: 'Whiskey Ganache' }, thickness: '30mm', texture: { zh: '絲滑 / 微醺', en: 'Silky / Boozy' }, temperature: '14°C' },
        { name: { zh: '焦糖榛果層', en: 'Hazelnut Praline' }, thickness: '10mm', texture: { zh: '粗糙 / 顆粒', en: 'Crunchy / Textural' }, temperature: '14°C' },
        { name: { zh: '達克瓦茲底座', en: 'Dacquoise Base' }, thickness: '12mm', texture: { zh: '軟糯 / 杏仁香', en: 'Soft / Nutty' }, temperature: '18°C' },
      ],
      flavor: { sweetness: 60, acidity: 20, bitterness: 75, texture: 90 },
      construction: [
        { step: '01', action: { zh: '年輪成型', en: 'Ring Formatting' }, time: '24h', details: { zh: '使用旋轉模具製作出的巧克力薄殼，模擬樹木年輪。', en: 'Using rotary molds to create thin chocolate shells mimicking tree rings.' } },
        { step: '02', action: { zh: '煙燻注入', en: 'Smoke Infusion' }, time: '30m', details: { zh: '將橡木屑煙燻香氣注入液態甘納許中。', en: 'Infusing liquid ganache with oak wood smoke aroma.' } },
      ],
      mechanics: { zh: '模擬樹木生長的同心圓結構，外硬內軟，呈現出時間積累的層次感。', en: 'Mimicking the concentric growth of trees, hard outside and soft inside, representing layers of time.' }
    }
  },
  {
    id: 'd3',
    name: { zh: '作品 No.8：光之教堂', en: 'Opus No.8: Church of Light' },
    description: { zh: '白蘭地漬洋梨 / 茉莉花茶慕斯 / 幾何蛋白霜', en: 'Brandy Poached Pear / Jasmine Tea Mousse / Geometric Meringue' },
    ingredients: { zh: '主體：台灣高山茉莉 / 義大利蛋白霜', en: 'Core: Taiwan High Mountain Jasmine / Italian Meringue' },
    imageUrl: '/assets/images/collection-church.png',
    year: '2024',
    price: 340,
    structure: {
      layers: [
        { name: { zh: '幾何蛋白霜片', en: 'Geometric Meringue' }, thickness: '3mm', texture: { zh: '輕脆 / 易碎', en: 'Crisp / Fragile' }, temperature: '20°C' },
        { name: { zh: '茉莉花茶慕斯', en: 'Jasmine Mousse' }, thickness: '50mm', texture: { zh: '輕盈 / 花香', en: 'Light / Floral' }, temperature: '4°C' },
        { name: { zh: '白蘭地漬洋梨', en: 'Poached Pear' }, thickness: '20mm', texture: { zh: '多汁 / 纖維感', en: 'Juicy / Fibrous' }, temperature: '4°C' },
        { name: { zh: '白巧克力底座', en: 'White Choc Plinth' }, thickness: '5mm', texture: { zh: '紮實', en: 'Solid' }, temperature: '18°C' },
      ],
      flavor: { sweetness: 50, acidity: 30, bitterness: 10, texture: 60 },
      construction: [
        { step: '01', action: { zh: '光影切割', en: 'Light Cutting' }, time: '1h', details: { zh: '蛋白霜片以雷射切割模具製作十字開口。', en: 'Meringue sheets shaped with laser-cut molds for the cross opening.' } },
        { step: '02', action: { zh: '茶湯萃取', en: 'Tea Extraction' }, time: '12h', details: { zh: '冷萃茉莉花茶24小時，僅取頭段茶湯製作慕斯。', en: 'Cold brew jasmine tea for 24h, using only the first extraction.' } },
      ],
      mechanics: { zh: '致敬安藤忠雄的光之教堂，利用蛋白霜的十字開口引入光線，使甜點在視覺上產生神聖感。', en: 'Homage to Tadao Ando\'s Church of Light, using the cross opening to let light in, creating a sense of sanctity.' }
    }
  },
  {
    id: 'd4',
    name: { zh: '作品 No.0：地基', en: 'Opus No.0: Foundation' },
    description: { zh: '法式千層酥 / 鹽之花焦糖 / 建築結構力學', en: 'Mille-Feuille / Fleur de Sel Caramel / Structural Mechanics' },
    ingredients: { zh: '主體：法國 AOP 蒙泰古奶油 / 日本昭和麵粉', en: 'Core: AOP Montaigu Butter / Showa Flour' },
    imageUrl: '/assets/images/collection-foundation.png',
    year: 'Classic',
    price: 280,
    structure: {
      layers: [
        { name: { zh: '反折千層酥皮', en: 'Inverted Puff Pastry' }, thickness: '2mm x 3', texture: { zh: '極脆 / 分層', en: 'Shattering / Layered' }, temperature: '20°C' },
        { name: { zh: '香草穆斯林奶油', en: 'Vanilla Mousseline' }, thickness: '20mm x 2', texture: { zh: '滑順 / 支撐力', en: 'Smooth / Structural' }, temperature: '8°C' },
        { name: { zh: '鹽之花焦糖醬', en: 'Salted Caramel' }, thickness: 'Variable', texture: { zh: '黏稠 / 流動', en: 'Sticky / Flowing' }, temperature: '22°C' },
      ],
      flavor: { sweetness: 70, acidity: 5, bitterness: 30, texture: 95 },
      construction: [
        { step: '01', action: { zh: '物理摺疊', en: 'Physical Folding' }, time: '72h', details: { zh: '歷經 72 小時的 6 次 4 折，創造 4096 層酥皮結構。', en: '6 single turns over 72 hours creating 4096 layers of structure.' } },
        { step: '02', action: { zh: '重力壓制', en: 'Gravity Press' }, time: '1h', details: { zh: '烘烤時上方壓制重物，確保千層膨脹高度一致。', en: 'Baking under weights to ensure consistent puff height.' } },
      ],
      mechanics: { zh: '最純粹的建築力學展示，以酥皮為樓板，奶油為支柱，展現完美的垂直承重。', en: 'Pure display of architectural mechanics, using pastry as slabs and cream as columns for vertical loads.' }
    }
  }
];

export const CHEF_PROFILE: ChefProfile = {
  name: { zh: '林 予石 (Pierre Lin)', en: 'Pierre Lin' },
  title: { zh: '建築系甜點師 / 品牌主理人', en: 'Architectural Pâtissier / Founder' },
  bio: [
    {
      zh: '畢業於倫敦 AA 建築聯盟學院 (Architectural Association)，曾任職於東京隈研吾建築都市設計事務所。2020 年於巴黎斐杭迪 (Ferrandi) 高等廚藝學校修習甜點藝術，試圖尋找建築結構與食材質地之間的連結。',
      en: 'Graduated from the AA School of Architecture in London and formerly worked at Kengo Kuma & Associates in Tokyo. In 2020, he studied pastry arts at Ferrandi Paris, seeking the connection between architectural structure and ingredient texture.'
    },
    {
      zh: '他擅長以解構主義手法重新詮釋經典法式甜點，將建築的力學平衡應用於慕斯與塔殼的堆疊。對他而言，甜點盤就是基地，食材就是建材。',
      en: 'He specializes in reinterpreting classic French pastries through deconstructivism, applying architectural mechanics to the layering of mousses and tart shells. For him, the plate is the site, and ingredients are the building materials.'
    }
  ],
  philosophy: { zh: 'Structural Integrity in Flavor.', en: 'Structural Integrity in Flavor.' }
};

export const CRAFT_STEPS = [
  {
    step: '01',
    title: { zh: '選材 | Selection', en: 'Material Selection' },
    desc: { zh: '嚴選全球單一產區可可 (Single Origin) 與法國 AOP 認證產區發酵奶油。', en: 'Sourcing strict Single Origin cocoa and French AOP certified cultured butter.' }
  },
  {
    step: '02',
    title: { zh: '結構 | Structure', en: 'Structural Design' },
    desc: { zh: '以建築繪圖軟體先行模擬甜點剖面，計算味覺層次的承重與平衡。', en: 'Simulating dessert cross-sections with CAD software to calculate the load and balance of flavor layers.' }
  },
  {
    step: '03',
    title: { zh: '成型 | Construction', en: 'Construction' },
    desc: { zh: '在攝氏 18 度的溫控實驗室中，進行精密的組裝工程。', en: 'Precise assembly engineering conducted in a temperature-controlled laboratory at 18°C.' }
  },
  {
    step: '04',
    title: { zh: '留白 | Void', en: 'The Void' },
    desc: { zh: '最後的裝飾是「無」。留白，是為了讓味蕾有呼吸的空間。', en: 'The final decoration is "Nothingness". The void exists to allow the palate to breathe.' }
  }
];