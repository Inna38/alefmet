import img1 from "../products/photo_2025-08-13_20-32-11.jpg";
import img2 from "../products/photo_2025-08-13_20-32-13.jpg";

import ADC12 from "../products/ADC12.png";
import AK12 from "../products/AK12.png";
import ENAB47100DIN231 from "../products/ENAB-47100DIN231.png";
import ENAB46000DIN226 from "../products/ENAB46000DIN226.png";
import АК12М2 from "../products/АК12М2.png";
import АК5М from "../products/АК5М.png";
import АК7 from "../products/АК7.png";
import АК7п from "../products/АК7п.png";
import АК8М3 from "../products/АК8М3.png";
import АК9 from "../products/АК9.png";
import АК9ч from "../products/АК9ч.png";

export const products = [
  {
    img: [img1, img2],
    titleUa: "Алюмінієві гранули",
    titleEn: "Aluminium Granules",
    descriptionEn:
      "Fine-fraction aluminium for precise and efficient dosing. Manufactured from secondary aluminium alloys that meet international quality standards. Perfectly suited for adjusting the chemical composition of melts and producing complex cast components.",
    slug: "aluminum-granules",
    descriptionUa:
      "Дрібнофракційний алюміній для точного та ефективного дозування. Виготовляється із вторинних алюмінієвих сплавів, що відповідають міжнародним стандартам якості. Ідеально підходить для корекції хімічного складу розплавів та виробництва складних ливарних деталей.",

    // Технічні характеристики (Specs)
    specsUa: {
      Щільність: "2.68 - 2.72 г/см³",
      "Температура плавлення": "570 - 660 °C",
      "Міцність на розрив": "230-290 МПа",
      Твердість: "70-95 HB",
    },
    specsEn: {
      Density: "2.68 - 2.72 g/cm³",
      "Melting Point": "570 - 660 °C",
      "Tensile Strength": "230-290 MPa",
      Hardness: "70-95 HB",
    },

    // Основні характеристики (Features)
    featuresUa: {
      Тип: "Вторинний алюмінієвий сплав",
      "Позначення (JIS)": "ADC12, AK12 та інші",
      "Основні легуючі елементи": ["Si (Кремній)", "Cu (Мідь)", "Mg (Магній)"],
      "Метод обробки": "Лиття або грануляція",
      "Питома вага": "2.68 г/см³",
    },
    featuresEn: {
      Type: "Secondary Aluminium Alloy",
      "Designation (JIS)": "ADC12, AK12, etc.",
      "Main Alloying Elements": [
        "Si (Silicon)",
        "Cu (Copper)",
        "Mg (Magnesium)",
      ],
      "Processing Method": "Casting or Granulation",
      "Specific Gravity": "2.68 g/cm³",
    },

    // Переваги (Advantages)
    advantagesUa: [
      "Точне дозування елементів у розплав",
      "Висока швидкість розчинення у ванні",
      "Мінімальний відсоток окислення завдяки формі гранул",
      "Оптимальна упаковка та логістика для зручності використання",
      "Гарантія стабільного хімічного складу (сертифікація EN, ISO, ASTM)",
    ],
    advantagesEn: [
      "Precise dosing of elements into the melt",
      "High dissolution speed in the bath",
      "Minimal oxidation due to granule shape",
      "Optimal packaging and logistics for ease of use",
      "Guaranteed stable chemical composition (EN, ISO, ASTM certified)",
    ],

    // Застосування (Applications)
    applicationsUa: [
      "Виробництво литих компонентів (точне лиття)",
      "Корекція хімічного складу сплавів",
      "Виробництво провідникових матеріалів",
      "Виробництво деталей для високотемпературних вузлів",
    ],
    applicationsEn: [
      "Production of cast components (precision casting)",
      "Adjustment of alloy chemical composition",
      "Production of conductive materials",
      "Manufacture of parts for high-temperature assemblies",
    ],
  },

  {
    img: [ADC12],
    titleUa: "ADC12",
    titleEn: "ADC12",
    descriptionUa:
      "ADC12 — популярний алюмінієвий сплав з високим вмістом кремнію і цинку, широко використовується в литі під тиском завдяки чудовій текучості та стабільним механічним властивостям.",
    descriptionEn:
      "ADC12 is a popular aluminium alloy with high silicon and zinc content, widely used in die casting due to excellent fluidity and stable mechanical properties.",
    slug: "adc12",
    specsUa: {
      Щільність: "2.74 г/см³",
      "Температура плавлення": "570–580 °C",
      "Міцність на розрив": "320 МПа",
      Твердість: "HB 80",
    },
    specsEn: {
      Density: "2.74 g/cm³",
      "Melting Point": "570–580 °C",
      "Tensile Strength": "320 MPa",
      Hardness: "HB 80",
    },
    featuresUa: {
      Тип: "Алюмінієвий ливарний сплав",
      "Позначення (JIS)": "ADC12",
      "Основні легуючі елементи": [
        "Кремній (Si) ~ 10%",
        "Цинк (Zn), Мідь (Cu), Залізо (Fe)",
      ],
      "Метод обробки": "Лиття під тиском",
      "Питома вага": "2.74 г/см³",
    },
    featuresEn: {
      Type: "Aluminium Casting Alloy",
      "Designation (JIS)": "ADC12",
      "Main Alloying Elements": [
        "Silicon (Si) ~ 10%",
        "Zinc (Zn), Copper (Cu), Iron (Fe)",
      ],
      "Processing Method": "Die Casting",
      "Specific Gravity": "2.74 g/cm³",
    },
    advantagesUa: [
      "Хороша текучість",
      "Низька усадка при литті",
      "Добрі механічні властивості",
      "Економічна ефективність",
    ],
    advantagesEn: [
      "Good fluidity",
      "Low shrinkage during casting",
      "Good mechanical properties",
      "Cost-effective",
    ],
    applicationsUa: [
      "Корпуси двигунів",
      "Автомобільні деталі",
      "Побутова техніка",
      "Деталі зі складною геометрією",
    ],
    applicationsEn: [
      "Engine housings",
      "Automotive parts",
      "Household appliances",
      "Complex-shaped components",
    ],
  },

  {
    img: [AK12],
    titleUa: "АК12",
    titleEn: "AK12",
    descriptionUa:
      "АК12 — силумін з високим вмістом кремнію, що характеризується хорошою ливарною здатністю, стійкістю до корозії і високою міцністю після термообробки.",
    descriptionEn:
      "AK12 is a silumin alloy with high silicon content, characterized by good castability, corrosion resistance, and high strength after heat treatment.",
    slug: "ak12",
    specsUa: {
      Щільність: "2.68 г/см³",
      "Температура плавлення": "580 °C",
      "Міцність на розрив": "200 МПа",
      Твердість: "HB 60",
    },
    specsEn: {
      Density: "2.68 g/cm³",
      "Melting Point": "580 °C",
      "Tensile Strength": "200 MPa",
      Hardness: "HB 60",
    },
    featuresUa: {
      Тип: "Силумін, ливарний алюмінієвий сплав",
      "Позначення за ГОСТ": "АК12",
      "Основні легуючі елементи": ["Кремній (Si) ~ 12%", "Залишок — алюміній"],
      "Метод обробки": "Лиття в кокіль або під тиском",
      "Питома вага": "2.68 г/см³",
    },
    featuresEn: {
      Type: "Silumin, Aluminium Casting Alloy",
      "Designation (GOST)": "AK12",
      "Main Alloying Elements": ["Silicon (Si) ~ 12%", "Remainder — Aluminium"],
      "Processing Method": "Mold casting or die casting",
      "Specific Gravity": "2.68 g/cm³",
    },
    advantagesUa: [
      "Хороша оброблюваність",
      "Висока корозійна стійкість",
      "Можливість модифікації складу",
      "Прийнятна ціна",
    ],
    advantagesEn: [
      "Good machinability",
      "High corrosion resistance",
      "Composition modification possible",
      "Reasonable cost",
    ],
    applicationsUa: [
      "Литі частини корпусів",
      "Промислові компоненти",
      "Механічні вузли",
      "Побутові прилади",
    ],
    applicationsEn: [
      "Cast housing parts",
      "Industrial components",
      "Mechanical assemblies",
      "Household appliances",
    ],
  },

  {
    img: [ENAB47100DIN231],
    titleUa: "EN AB-47100 / DIN 231",
    titleEn: "EN AB-47100 / DIN 231",
    descriptionUa:
      "EN AB-47100 — це європейський алюмінієвий сплав для лиття під тиском, аналог ADC12. Характеризується відмінними литтєвими властивостями та застосовується у великосерійному виробництві.",
    descriptionEn:
      "EN AB-47100 is a European aluminium alloy for die casting, analogous to ADC12. It features excellent casting properties and is used in high-volume production.",
    slug: "enab-47100",
    specsUa: {
      Щільність: "2.74 г/см³",
      "Температура плавлення": "565–575 °C",
      "Міцність на розрив": "280–310 МПа",
      Твердість: "HB 80",
    },
    specsEn: {
      Density: "2.74 g/cm³",
      "Melting Point": "565–575 °C",
      "Tensile Strength": "280–310 MPa",
      Hardness: "HB 80",
    },
    featuresUa: {
      Тип: "Ливарний алюмінієвий сплав",
      Позначення: "EN AB-47100 / DIN 231",
      "Метод обробки": "Лиття під тиском",
      Сумісність: "Повний аналог ADC12",
    },
    featuresEn: {
      Type: "Aluminium Casting Alloy",
      Designation: "EN AB-47100 / DIN 231",
      "Processing Method": "Die Casting",
      Compatibility: "Full ADC12 Equivalent",
    },
    advantagesUa: [
      "Стабільні характеристики при литті",
      "Хороша корозійна стійкість",
      "Висока точність лиття",
    ],
    advantagesEn: [
      "Stable casting characteristics",
      "Good corrosion resistance",
      "High casting accuracy",
    ],
    applicationsUa: [
      "Автокомпоненти",
      "Моторні корпуси",
      "Теплообмінники",
      "Компоненти електроніки",
    ],
    applicationsEn: [
      "Automotive components",
      "Engine housings",
      "Heat exchangers",
      "Electronics components",
    ],
  },

  {
    img: [ENAB46000DIN226],
    titleUa: "EN AB-46000 / DIN 226",
    titleEn: "EN AB-46000 / DIN 226",
    descriptionUa:
      "EN AB-46000 — алюмінієвий сплав з високим вмістом кремнію та цинку, ідеальний для точного лиття та деталей зі складною геометрією. Застосовується у високотехнологічних галузях.",
    descriptionEn:
      "EN AB-46000 is an aluminium alloy with high silicon and zinc content, ideal for precision casting and complex-shaped components. Used in high-tech industries.",
    slug: "enab-46000",
    specsUa: {
      Щільність: "2.72 г/см³",
      "Температура плавлення": "570–590 °C",
      "Міцність на розрив": "290 МПа",
      Твердість: "HB 85",
    },
    specsEn: {
      Density: "2.72 g/cm³",
      "Melting Point": "570–590 °C",
      "Tensile Strength": "290 MPa",
      Hardness: "HB 85",
    },
    featuresUa: {
      Тип: "Ливарний алюмінієвий сплав",
      Позначення: "EN AB-46000 / DIN 226",
      "Метод обробки": "Лиття під тиском",
      "Легуючі елементи": ["Si ~ 8.5–10%", "Zn, Cu, Fe"],
    },
    featuresEn: {
      Type: "Aluminium Casting Alloy",
      Designation: "EN AB-46000 / DIN 226",
      "Processing Method": "Die Casting",
      "Alloying Elements": ["Si ~ 8.5–10%", "Zn, Cu, Fe"],
    },
    advantagesUa: [
      "Хороша ливарність",
      "Добра зварюваність",
      "Міцність і довговічність",
    ],
    advantagesEn: [
      "Good castability",
      "Good weldability",
      "Strength and durability",
    ],
    applicationsUa: [
      "Машинобудування",
      "Будівництво",
      "Деталі з високим навантаженням",
    ],
    applicationsEn: [
      "Mechanical engineering",
      "Construction",
      "High-load components",
    ],
  },
  {
    img: [АК12М2],
    titleUa: "АК12М2",
    titleEn: "AK12M2",
    descriptionUa:
      "АК12М2 — це силумін (алюмінієвий ливарний сплав), що належить до категорії евтектичних алюмінієво-кремнієвих сплавів з додаванням магнію. Завдяки хорошим ливарним властивостям, механічній міцності та корозійній стійкості, АК12М2 широко застосовується у виробництві складних литих деталей, особливо в автомобілебудуванні та машинобудуванні.",
    descriptionEn:
      "AK12M2 is a silumin (aluminium casting alloy) belonging to the category of eutectic aluminium-silicon alloys with added magnesium. Due to its excellent casting properties, mechanical strength, and corrosion resistance, AK12M2 is widely used for complex cast components, especially in automotive and mechanical engineering.",
    slug: "ak12m2",
    specsUa: {
      Щільність: "2.7 г/см³",
      "Температура плавлення": "580 °C",
      "Міцність на розрив": "180 МПа",
      Твердість: "HV 60",
    },
    specsEn: {
      Density: "2.7 g/cm³",
      "Melting Point": "580 °C",
      "Tensile Strength": "180 MPa",
      Hardness: "HV 60",
    },
    featuresUa: {
      Тип: "Ливарний алюмінієвий сплав (силумін)",
      "Позначення за ГОСТ": "АК12М2 (також АК12М2Мг, AMgSi12)",
      "Основні легуючі елементи": [
        "Кремній (Si) ~ 12%",
        "Магній (Mg) ~ 1.5–2.0%",
        "Залишок — алюміній (Al)",
      ],
      "Метод обробки": "Лиття під тиском або в кокіль",
      "Температура плавлення": "580–640 °C",
      "Питома вага": "2.68 г/см³",
    },
    featuresEn: {
      Type: "Aluminium Casting Alloy (Silumin)",
      "Designation (GOST)": "AK12M2 (also AK12M2Mg, AMgSi12)",
      "Main Alloying Elements": [
        "Silicon (Si) ~ 12%",
        "Magnesium (Mg) ~ 1.5–2.0%",
        "Remainder — Aluminium (Al)",
      ],
      "Processing Method": "Die casting or mold casting",
      "Melting Temperature": "580–640 °C",
      "Specific Gravity": "2.68 g/cm³",
    },
    advantagesUa: [
      "Висока текучість при литті",
      "Стійкість до корозії в повітряному середовищі",
      "Добре піддається термічній обробці",
      "Прийнятний рівень міцності та твердості",
      "Відносно невисока вартість",
    ],
    advantagesEn: [
      "High fluidity during casting",
      "Corrosion resistance in air",
      "Good heat-treatable properties",
      "Acceptable strength and hardness",
      "Relatively low cost",
    ],
    applicationsUa: [
      "Корпуси механізмів",
      "Частини трансмісій і двигунів",
      "Побутові литі вироби",
      "Деталі машин, що не потребують високої ударної міцності",
    ],
    applicationsEn: [
      "Mechanism housings",
      "Transmission and engine parts",
      "Household cast products",
      "Machine components not requiring high impact strength",
    ],
  },
  {
    img: [АК5М],
    titleUa: "АК5М",
    titleEn: "AK5M",
    descriptionUa:
      "АК5М — це алюмінієвий ливарний сплав з додаванням міді, відомий своєю високою міцністю та зносостійкістю. Використовується для виготовлення відповідних деталей методом лиття.",
    descriptionEn:
      "AK5M is an aluminium casting alloy with added copper, known for its high strength and wear resistance. It is used for manufacturing appropriate components via casting.",
    slug: "ak5m",
    specsUa: {
      Щільність: "2.78 г/см³",
      "Температура плавлення": "540–580 °C",
      "Міцність на розрив": "170–220 МПа",
      Твердість: "HB 70–85",
    },
    specsEn: {
      Density: "2.78 g/cm³",
      "Melting Point": "540–580 °C",
      "Tensile Strength": "170–220 MPa",
      Hardness: "HB 70–85",
    },
    featuresUa: {
      Тип: "Алюмінієвий сплав з міддю",
      "Позначення за ГОСТ": "АК5М",
      "Основні легуючі елементи": ["Мідь (Cu) ~ 5%", "Магній, цинк, залізо"],
      "Метод обробки": "Лиття в кокіль або пісочні форми",
    },
    featuresEn: {
      Type: "Aluminium Alloy with Copper",
      "Designation (GOST)": "AK5M",
      "Main Alloying Elements": ["Copper (Cu) ~ 5%", "Magnesium, Zinc, Iron"],
      "Processing Method": "Mold casting or sand casting",
    },
    advantagesUa: [
      "Висока зносостійкість",
      "Добрі механічні властивості",
      "Відмінна оброблюваність",
    ],
    advantagesEn: [
      "High wear resistance",
      "Good mechanical properties",
      "Excellent machinability",
    ],
    applicationsUa: ["Шестерні", "Підшипники ковзання", "Корпуси редукторів"],
    applicationsEn: ["Gears", "Sliding bearings", "Gearbox housings"],
  },
  {
    img: [АК7],
    titleUa: "АК7",
    titleEn: "AK7",
    descriptionUa:
      "АК7 — силуміновий сплав з підвищеним вмістом кремнію, що забезпечує відмінну ливарну здатність і добру корозійну стійкість. Часто використовується у виробництві середньонавантажених деталей.",
    descriptionEn:
      "AK7 is a silumin alloy with increased silicon content, providing excellent castability and good corrosion resistance. Commonly used in medium-load components.",
    slug: "ak7",
    specsUa: {
      Щільність: "2.7 г/см³",
      "Температура плавлення": "570–600 °C",
      "Міцність на розрив": "150–180 МПа",
      Твердість: "HB 60",
    },
    specsEn: {
      Density: "2.7 g/cm³",
      "Melting Point": "570–600 °C",
      "Tensile Strength": "150–180 MPa",
      Hardness: "HB 60",
    },
    featuresUa: {
      Тип: "Ливарний алюмінієвий сплав (силумін)",
      "Позначення за ГОСТ": "АК7",
      "Основні легуючі елементи": [
        "Кремній (Si) ~ 10–12%",
        "Магній (Mg) ~ 0.3–0.5%",
      ],
      "Метод обробки": "Лиття в кокіль або під тиском",
    },
    featuresEn: {
      Type: "Aluminium Casting Alloy (Silumin)",
      "Designation (GOST)": "AK7",
      "Main Alloying Elements": [
        "Silicon (Si) ~ 10–12%",
        "Magnesium (Mg) ~ 0.3–0.5%",
      ],
      "Processing Method": "Mold casting or die casting",
    },
    advantagesUa: [
      "Простота лиття",
      "Стійкість до окислення",
      "Невисока вартість",
    ],
    advantagesEn: ["Easy casting", "Oxidation resistance", "Low cost"],
    applicationsUa: [
      "Побутові прилади",
      "Деталі машин середньої складності",
      "Електротехнічні корпуси",
    ],
    applicationsEn: [
      "Household appliances",
      "Medium-complexity machine parts",
      "Electrical housings",
    ],
  },
  {
    img: [АК7п],
    titleUa: "АК7п",
    titleEn: "AK7p",
    descriptionUa:
      "АК7п — модифікований варіант силуміну АК7 з покращеними ливарними характеристиками. Підходить для виготовлення деталей з високими вимогами до точності.",
    descriptionEn:
      "AK7p is a modified version of the silumin AK7 with improved casting characteristics. Suitable for manufacturing components with high precision requirements.",
    slug: "ak7p",
    specsUa: {
      Щільність: "2.7 г/см³",
      "Температура плавлення": "570 °C",
      "Міцність на розрив": "160 МПа",
      Твердість: "HB 60–65",
    },
    specsEn: {
      Density: "2.7 g/cm³",
      "Melting Point": "570 °C",
      "Tensile Strength": "160 MPa",
      Hardness: "HB 60–65",
    },
    featuresUa: {
      Тип: "Модифікований силумін",
      Позначення: "АК7п",
      "Метод обробки": "Лиття під тиском",
      Особливості: "Покращена структура та зниження пористості",
    },
    featuresEn: {
      Type: "Modified Silumin",
      Designation: "AK7p",
      "Processing Method": "Die casting",
      Features: "Improved structure and reduced porosity",
    },
    advantagesUa: [
      "Поліпшена формоздатність",
      "Зменшення внутрішніх дефектів",
      "Більш стабільна геометрія",
    ],
    advantagesEn: [
      "Improved castability",
      "Reduced internal defects",
      "More stable geometry",
    ],
    applicationsUa: [
      "Литі корпуси",
      "Механізми з високою точністю",
      "Промислові вузли",
    ],
    applicationsEn: [
      "Cast housings",
      "High-precision mechanisms",
      "Industrial assemblies",
    ],
  },
  {
    img: [АК8М3],
    titleUa: "АК8М3",
    titleEn: "AK8M3",
    descriptionUa:
      "АК8М3 — це алюмінієвий сплав з підвищеним вмістом магнію і міді. Характеризується високою механічною міцністю та зносостійкістю, застосовується для лиття деталей з великим навантаженням.",
    descriptionEn:
      "AK8M3 is an aluminium alloy with increased magnesium and copper content. It features high mechanical strength and wear resistance, used for casting high-load components.",
    slug: "ak8m3",
    specsUa: {
      Щільність: "2.77 г/см³",
      "Температура плавлення": "550–580 °C",
      "Міцність на розрив": "240 МПа",
      Твердість: "HB 80",
    },
    specsEn: {
      Density: "2.77 g/cm³",
      "Melting Point": "550–580 °C",
      "Tensile Strength": "240 MPa",
      Hardness: "HB 80",
    },
    featuresUa: {
      Тип: "Алюмінієвий сплав з магнієм і міддю",
      "Позначення за ГОСТ": "АК8М3",
      "Метод обробки": "Лиття в кокіль",
      "Легуючі елементи": ["Mg ~ 3%", "Cu ~ 2.5–3%"],
    },
    featuresEn: {
      Type: "Aluminium Alloy with Magnesium and Copper",
      "Designation (GOST)": "AK8M3",
      "Processing Method": "Mold casting",
      "Alloying Elements": ["Mg ~ 3%", "Cu ~ 2.5–3%"],
    },
    advantagesUa: [
      "Підвищена міцність",
      "Зносостійкість",
      "Стійкість до дії агресивних середовищ",
    ],
    advantagesEn: [
      "Enhanced strength",
      "Wear resistance",
      "Resistance to aggressive environments",
    ],
    applicationsUa: [
      "Корпуса механізмів",
      "Силові елементи",
      "Будівельні конструкції",
    ],
    applicationsEn: [
      "Mechanism housings",
      "Load-bearing elements",
      "Construction structures",
    ],
  },
  {
    img: [АК9],
    titleUa: "АК9",
    titleEn: "AK9",
    descriptionUa:
      "АК9 — силуміновий сплав середнього класу з хорошими ливарними властивостями. Оптимальний для лиття деталей, які не потребують високої міцності.",
    descriptionEn:
      "AK9 is a mid-grade silumin alloy with good casting properties. Suitable for casting components that do not require high strength.",
    slug: "ak9",
    specsUa: {
      Щільність: "2.68 г/см³",
      "Температура плавлення": "570 °C",
      "Міцність на розрив": "150 МПа",
      Твердість: "HB 55",
    },
    specsEn: {
      Density: "2.68 g/cm³",
      "Melting Point": "570 °C",
      "Tensile Strength": "150 MPa",
      Hardness: "HB 55",
    },
    featuresUa: {
      Тип: "Силумін",
      Позначення: "АК9",
      "Метод обробки": "Лиття в кокіль або пісочну форму",
    },
    featuresEn: {
      Type: "Silumin",
      Designation: "AK9",
      "Processing Method": "Mold casting or sand casting",
    },
    advantagesUa: ["Простота лиття", "Низька вартість", "Гарна оброблюваність"],
    advantagesEn: ["Easy casting", "Low cost", "Good machinability"],
    applicationsUa: ["Кришки та корпуси", "Панелі", "Декоративні елементи"],
    applicationsEn: ["Covers and housings", "Panels", "Decorative elements"],
  },
  {
    img: [АК9ч],
    titleUa: "АК9ч",
    titleEn: "AK9ch",
    descriptionUa:
      "АК9ч — модифікована версія АК9 з підвищеною щільністю структури та зменшеним вмістом домішок. Часто використовується у відповідальних ливарних деталях.",
    descriptionEn:
      "AK9ch is a modified version of AK9 with increased structural density and reduced impurity content. Often used in critical casting components.",
    slug: "ak9ch",
    specsUa: {
      Щільність: "2.70 г/см³",
      "Температура плавлення": "570–580 °C",
      "Міцність на розрив": "160 МПа",
      Твердість: "HB 60",
    },
    specsEn: {
      Density: "2.70 g/cm³",
      "Melting Point": "570–580 °C",
      "Tensile Strength": "160 MPa",
      Hardness: "HB 60",
    },
    featuresUa: {
      Тип: "Модифікований силумін",
      Позначення: "АК9ч",
      "Метод обробки": "Точне лиття",
      Особливості: "Покращена мікроструктура",
    },
    featuresEn: {
      Type: "Modified Silumin",
      Designation: "AK9ch",
      "Processing Method": "Precision casting",
      Features: "Improved microstructure",
    },
    advantagesUa: [
      "Підвищена однорідність",
      "Менша пористість",
      "Краща точність лиття",
    ],
    advantagesEn: [
      "Enhanced homogeneity",
      "Reduced porosity",
      "Better casting accuracy",
    ],
    applicationsUa: [
      "Деталі відповідального призначення",
      "Корпусні елементи",
      "Компоненти зі складною геометрією",
    ],
    applicationsEn: [
      "Critical components",
      "Housing elements",
      "Complex-shaped components",
    ],
  },
];
