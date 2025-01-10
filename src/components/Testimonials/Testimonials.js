import styles from '@/components/Testimonials/Testimonials.module.css';

const Testimonials = () => {
  const testimonials = [
    {
      img: '/images/laura_1.jpg',
      quote: 'O serviço foi excelente! Minha empresa teve um grande progresso com o suporte técnico da ArFran Tech.',
      name: 'Laura Silva',
      role: 'Empresária',
    },
    {
      img: '/images/laura_2.jpg',
      quote: 'Muito profissionais e sempre disponíveis. Recomendo os serviços de desenvolvimento de sites.',
      name: 'Maria Oliveira',
      role: 'Gerente de Projetos',
    },
    {
      img: '/images/laura_3.jpg',
      quote: 'O software administrativo que desenvolveram para nossa empresa superou todas as expectativas.',
      name: 'Carlos Santos',
      role: 'Diretor de TI',
    },
  ];

  return (
    <section className={styles.testimonials}>
      <div className={styles.maxWidth}>
        <h2 className={styles.title}>Depoimentos</h2>
        <div className={styles.cardsContainer}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <img src={testimonial.img} alt={testimonial.name} className={styles.image} />
              <blockquote className={styles.quote}>{testimonial.quote}</blockquote>
              <div className={styles.clientInfo}>
                <h3 className={styles.name}>{testimonial.name}</h3>
                <p className={styles.role}>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
