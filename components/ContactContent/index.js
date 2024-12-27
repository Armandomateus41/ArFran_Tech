import styles from '@/components/ContactContent/ContactContent.module.css';

const ContactContent = () => {
  return (
    <div className={styles.container}>
      {/* Informações da Empresa */}
      <div className={`${styles.column} ${styles.left}`}>
        <p>
          Sed laoreet cursus commodo. Quisque pharetra nisl vitae diam egestas lacinia. Integer at arcu ac turpis blandit ullamcorper at vitae diam. Donec quam est, aliquam non nisl non, feugiat suscipit eros. Pellentesque condimentum est quam, auctor faucibus velit euismod eget.
        </p>
        <div className={styles.icons}>
          <div className={styles.row}>
            <i className="fas fa-user"></i>
            <div className={styles.info}>
              <div className={styles.head}>Empresa</div>
              <div className={styles.subTitle}>Armando</div>
            </div>
          </div>
          <div className={styles.row}>
            <i className="fas fa-map-marked-alt"></i>
            <div className={styles.info}>
              <div className={styles.head}>Endereço</div>
              <div className={styles.subTitle}>Avenida Belenzinho</div>
            </div>
          </div>
          <div className={styles.row}>
            <i className="fas fa-envelope"></i>
            <div className={styles.info}>
              <div className={styles.head}>Email</div>
              <div className={styles.subTitle}>contato@armandomateus.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* Formulário de Contato */}
      <div className={`${styles.column} ${styles.right}`}>
        <div className={styles.text}>Mensagem de Contato</div>
        <form className={styles.form}>
          <div className={styles.fields}>
            <div className={styles.field}>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="name" placeholder="Digite seu nome" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Digite seu email" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="subject">Assunto</label>
              <input type="text" id="subject" name="subject" placeholder="Escreva o assunto" required />
            </div>
            <div className={`${styles.field} ${styles.textarea}`}>
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" name="message" rows="5" placeholder="Escreva sua mensagem" required></textarea>
            </div>
          </div>
          <div className={styles.button}>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactContent;
