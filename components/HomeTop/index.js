import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '@/components/HomeTop/HomeTop.module.css';

const HomeTop = () => {
  useEffect(() => {
    AOS.init(); // Inicializa o AOS
  }, []);

  return (
    <section className={`${styles.content} ${styles.imgTop}`}>
    <div className={styles.maxWidth}>
      <div className={styles.topContent}>
        <div className={styles.textOne}>Temos a solução</div>
        <div className={styles.textTwo}>que a sua empresa precisa</div>
        <div className={styles.textThree}>Podemos ajudar a sua empresa!</div>
        <a href="/contato" className={styles.contactButton}>
          Entrar em Contato
        </a>
      </div>
    </div>
  </section>
  );
};

export default HomeTop;
