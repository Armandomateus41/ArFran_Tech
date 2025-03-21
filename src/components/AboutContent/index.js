import { useEffect, useState } from "react";
import styles from "./AboutContent.module.css";

const AboutContent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/about-companies")
      .then((res) => res.json())
      .then((response) => setData(response.aboutsCompanies))
      .catch((error) => console.error("Erro ao carregar dados:", error));
  }, []);

  if (!data.length) return <p>Carregando informações...</p>;

  return (
    <section className={styles.about}>
      <div className={styles.maxWidth}>
        <h2 className={styles.title}>Sobre a Empresa</h2>
        {data.map((item) => (
          <div key={item.id} className={styles.aboutContent}>
            <div className={styles.columnLeft}>
              <img src={item.image} alt={item.title} />
            </div>
            <div className={styles.columnRight}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutContent;
