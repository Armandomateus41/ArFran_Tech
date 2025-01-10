import styles from '@/components/Footer/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Divisor Superior */}
      <div className={styles.divider}></div>

      {/* Logo e Nome */}
      <div className={styles.logoContainer}>
        <img src="/images/logoArfr-10.png" alt="Logo ArFran Tech" className={styles.logo} />
        <span className={styles.brandName}>ArFran Tech</span>
      </div>

      {/* Divisor Inferior */}
      <div className={styles.divider}></div>

      {/* Seções Principais */}
      <div className={styles.container}>
        {/* Links Rápidos */}
        <div className={styles.column}>
          <h3 className={styles.title}>Links Rápidos</h3>
          <ul className={styles.list}>
            <li><a href="/home">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/apresentacao">Apresentação</a></li>
            <li><a href="/servicos">Serviços</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div className={styles.column}>
          <h3 className={styles.title}>Contato</h3>
          <ul className={styles.list}>
            <li><i className="fas fa-envelope"></i> contato@armandomateus.com</li>
            <li><i className="fas fa-map-marker-alt"></i> Av. Belenzinho, São Paulo - SP</li>
            <li><i className="fas fa-phone-alt"></i> +55 (11) 1234-5678</li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div className={styles.column}>
          <h3 className={styles.title}>Redes Sociais</h3>
          <ul className={styles.socials}>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Rodapé Inferior */}
      <div className={styles.copyright}>
        &copy; 2024 Armando Mateus. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
