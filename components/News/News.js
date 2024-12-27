import styles from '@/components/News/News.module.css';

const News = () => {
  const articles = [
    {
      img: '/images/novas_1.jpg',
      title: 'As novas tendências em tecnologia em 2025',
      description: 'Descubra como as tecnologias emergentes estão moldando o futuro.',
      link: '/artigo/tendencias-tecnologia-2025',
    },
    {
      img: '/images/novas_1.jpg',
      title: 'Dicas para otimizar a produtividade no trabalho remoto',
      description: 'Aproveite ao máximo o trabalho remoto com essas dicas práticas.',
      link: '/artigo/produtividade-trabalho-remoto',
    },
    {
      img: '/images/novas_1.jpg',
      title: 'Impactos da reforma tributária no setor tecnológico',
      description: 'Saiba como a reforma tributária afeta empresas de tecnologia.',
      link: '/artigo/reforma-tributaria-tecnologia',
    },
  ];

  return (
    <section className={styles.news}>
      <div className={styles.maxWidth}>
        <h2 className={styles.title}>Notícias</h2>
        <div className={styles.cardsContainer}>
          {articles.map((article, index) => (
            <div key={index} className={styles.card}>
              <img src={article.img} alt={article.title} className={styles.image} />
              <h3 className={styles.cardTitle}>{article.title}</h3>
              <p className={styles.description}>{article.description}</p>
              <a href={article.link} className={styles.readMore}>
                Leia mais
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
