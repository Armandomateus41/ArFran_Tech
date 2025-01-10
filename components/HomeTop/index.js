import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '@/components/HomeTop/HomeTop.module.css';

const HomeTop = () => {
  const [homeTop, setHomeTop] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/hometop')
      .then((response) => setHomeTop(response.data.homeTop[0]))
      .catch((error) => console.error('Erro ao carregar HomeTop:', error));
  }, []);

  if (!homeTop) return <p>Carregando...</p>;

  return (
    <section className={`${styles.content} ${styles.imgTop}`}>
      <div className={styles.maxWidth}>
        <div className={styles.topContent}>
          <h1>{homeTop.titleOneTop}</h1>
          <p>{homeTop.titleTwoTop}</p>
          <img src={homeTop.imageTop} alt="Imagem Home Top" />
          <a href={homeTop.linkBtnTop} className={styles.contactButton}>
            {homeTop.textBtnTop}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeTop;
