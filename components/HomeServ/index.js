import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "@/components/HomeServ/HomeServ.module.css";

const HomeServ = () => {
  // Inicializa o AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação em ms
      easing: "ease-in-out", // Estilo de animação
      once: true, // Executa a animação apenas uma vez
    });
  }, []);

  return (
    <>
      {/* Seção de Serviços */}
      <section className={styles.services}>
      <div className={styles.maxWidth}>
        <h2 className={styles.title} data-aos="fade-up">
          Serviços
        </h2>
        <div className={styles.servContent}>
          <div className={styles.card} data-aos="fade-right">
            <div className={styles.box}>
              <i className="fas fa-wifi"></i>
              <div className={styles.text}>Wifi veloz</div>
              <p className={styles.description}>
                Conexões rápidas e estáveis para manter sua empresa sempre online.
              </p>
            </div>
          </div>
          <div className={styles.card} data-aos="fade-up">
            <div className={styles.box}>
              <i className="fas fa-laptop-code"></i>
              <div className={styles.text}>Desenvolvimento de Sites</div>
              <p className={styles.description}>
                Sites modernos, responsivos e otimizados para atender suas necessidades.
              </p>
            </div>
          </div>
          <div className={styles.card} data-aos="fade-left">
            <div className={styles.box}>
              <i className="fas fa-headset"></i>
              <div className={styles.text}>Suporte técnico</div>
              <p className={styles.description}>
                Assistência especializada para resolver problemas rapidamente.
              </p>
            </div>
          </div>
          <div className={styles.card} data-aos="zoom-in">
            <div className={styles.box}>
              <i className="fas fa-database"></i>
              <div className={styles.text}>Criação de Software Administrativo</div>
              <p className={styles.description}>
                Sistemas personalizados para gerenciar suas operações com eficiência e segurança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HomeServ;
