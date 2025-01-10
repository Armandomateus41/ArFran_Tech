import styles from './AboutContent.module.css';

const AboutContent = () => {
  const content = [
    {
      text: "Desenvolvido para você atingir seus melhores índices de produtividade, criatividade e bem-estar.",
      image: "/images/laptop.jpg",
    },
    {
      text: "Sed laoreet cursus commodo. Quisque pharetra nisl vitae diam egestas lacinia.",
      image: "/images/laptop.jpg",
    },
    {
      text: "Integer at arcu ac turpis blandit ullamcorper at vitae diam. Donec quam est, aliquam non nisl non, feugiat suscipit eros.",
      image: "/images/laptop.jpg",
    },
  ];

  return (
    <section className={styles.about}>
      <div className={styles.maxWidth}>
        <h2 className={styles.title}>Sobre Empresa</h2>
        {content.map((item, index) => (
          <div key={index} className={styles.aboutContent}>
            <div className={styles.columnLeft}>
              <img src={item.image} alt="Sobre Empresa" />
            </div>
            <div className={styles.columnRight}>
              <div className={styles.text}>{item.text}</div>
              <p>
                Sed laoreet cursus commodo. Quisque pharetra nisl vitae diam
                egestas lacinia. Integer at arcu ac turpis blandit ullamcorper
                at vitae diam. Donec quam est, aliquam non nisl non, feugiat
                suscipit eros. Pellentesque condimentum est quam, auctor
                faucibus velit euismod eget. Nam a diam sed metus molestie
                tincidunt. Quisque et aliquet risus. Sed et sem quis massa
                sagittis feugiat at sed risus. Sed semper tortor elit.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutContent;
