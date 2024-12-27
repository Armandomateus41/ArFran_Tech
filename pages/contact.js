import Head from 'next/head';
import styles from '@/styles/Contact.module.css';
import Menu from '@/components/Menu';
import ContactContent from '@/components/ContactContent';

function Contact() {
  return (
    <>
      <Head>
        <title>Home - ArFran Tech</title>
        <meta
          name="description"
          content="Ar FranTech - A empresa líder em tecnologia e inovação."
        />
        <meta property="og:title" content="Home - Ar FranTech" />
      </Head>
      <main>
        <Menu />
        <section className={`${styles.content} ${styles.contact}`}>
          <div className={styles.maxWidth}>
            <h2 className={styles.title}>Contato</h2>
            <div className={styles.contactContent}>
              <ContactContent />
            </div>
          </div>
        </section>
      </main>
     
    </>
  );
}

export default Contact;
