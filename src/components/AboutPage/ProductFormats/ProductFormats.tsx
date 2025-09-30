import Container from "@/components/Container/Container";
import styles from "./ProductFormats.module.css"


const productData = [
  {
    icon: "🔩",
    title: "Алюмінієві чушки",
    text: "Стандартизовані зливки для подальшого переплаву або лиття. Надійна якість та гарантований хімічний склад.",
  },
  {
    icon: "⚙️",
    title: "Алюмінієві гранули",
    text: "Дрібнофракційний алюміній для точного дозування на автоматичних лініях, що забезпечує ефективність виробничого процесу.",
  },
  {
    icon: "🧪",
    title: "Сплави під технічні вимоги",
    text: "Ми працюємо з індивідуальними кресленнями та специфікаціями замовника. Кожен сплав має унікальний склад, що підтверджується лабораторною перевіркою.",
  },
  //   {
  //     icon: "📃",
  //     title: "Маркування за стандартами",
  //     text: "Постачання згідно стандартів: DIN, ASTM, ISO або вашої внутрішньої специфікації.",
  //   },
];


const ProductFormats = () => {
  return (
    <section className={styles.formats_section}>
        <div className={styles.formats_grid}>
          {productData?.map((item, index) => (
            <div className={styles.format_card} key={index}>
              {/* <div className={styles.format_icon}>{item.icon}</div> */}
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {/* <a href="#" className={styles.read_more}>
                          Читати далі <span className={styles.arrow}>→</span>
                  </a> */}
            </div>
          ))}
        </div>
    </section>
  );
};

export default ProductFormats;