import { useLocale } from "next-intl";
import styles from "./ProductFormats.module.css";

const productData = [
  {
    title: "Алюмінієві чушки",
    text: "Стандартизовані зливки для подальшого переплаву або лиття. Надійна якість та гарантований хімічний склад.",
    titleEn: "Aluminium Ingots",
    textEn:
      "Standardized ingots for further remelting or casting. Reliable quality and guaranteed chemical composition.",
  },
  {
    title: "Алюмінієві гранули",
    text: "Дрібнофракційний алюміній для точного дозування на автоматичних лініях, що забезпечує ефективність виробничого процесу.",
    titleEn: "Aluminium Granules",
    textEn:
      "Fine-fraction aluminium for precise dosing on automated lines, ensuring production process efficiency.",
  },
  {
    title: "Сплави під технічні вимоги",
    text: "Ми працюємо з індивідуальними кресленнями та специфікаціями замовника. Кожен сплав має унікальний склад, що підтверджується лабораторною перевіркою.",
    titleEn: "Alloys for Technical Requirements",
    textEn:
      "We work with individual drawings and customer specifications. Each alloy has a unique composition, verified by laboratory testing.",
  },
];

const ProductFormats = () => {
  const locale = useLocale();
  return (
    <section className={styles.formats_section}>
      <div className={styles.formats_grid}>
        {productData?.map((item, index) => (
          <div className={styles.format_card} key={index}>
            <h3>{locale === "ua" ? item.title : item.titleEn}</h3>
            <p>{locale === "ua" ? item.text : item.textEn}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductFormats;
