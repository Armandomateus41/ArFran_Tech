import styles from "@/components/Professionals/Professionals.module.css";

const Professionals = () => {
  return (
    <div className={styles.professionalsPage}>
      {/* Banner */}
      <section className={styles.banner}>
        <h1 className={styles.title}>Conheça Nossa Equipe</h1>
      </section>

      {/* Seção de Profissionais */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          {/* Exemplo de Membro da Equipe */}
          <div className={styles.card}>
          <img
              src="/images/armando_mateus10.jpeg"
              alt="Profissional 2"
              className={styles.profileImage}
            />
            <h3 className={styles.name}>Armando Mateus</h3>
            <p className={styles.position}>CEO e Fundador</p>
            <p className={styles.bio}>
              Especialista em tecnologia e inovação com mais de 10 anos de
              experiência no mercado. Líder apaixonado por transformar ideias em
              soluções.
            </p>
          </div>

          <div className={styles.card}>
            <img
              src="/images/francis_dev_12.jpeg"
              alt="Profissional 2"
              className={styles.profileImage}
            />

            <h3 className={styles.name}>Francis Bernard</h3>
            <p className={styles.position}>Desenvolvedora Full Stack</p>
            <p className={styles.bio}>
              Desenvolvedor Full Stack com paixão por criar experiências
              digitais incríveis, utilizando as tecnologias mais modernas do
              mercado.
            </p>
          </div>

          <div className={styles.card}>
            <img
              src="/images/avatarimage_2938.jpg"
              alt="Profissional 3"
              className={styles.profileImage}
            />
            <h3 className={styles.name}>Carlos Oliveira</h3>
            <p className={styles.position}>Designer UX/UI</p>
            <p className={styles.bio}>
              Designer criativo com expertise em criar interfaces intuitivas e
              agradáveis, sempre pensando na melhor experiência para o usuário.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Professionals;
