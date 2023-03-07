import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="500" height="200"/>
      <h1 className={styles.title}>title</h1>
          <span className={styles.price}>$19 </span>
        <p className={styles.desc}>
          Lorem   
        </p>
    </div>
  ) 
}

export default PizzaCard