import Head from "next/head";
import Menu from "@/components/Menu/index"; // Certifique-se de que o caminho está correto
import AboutContent from '@/components/AboutContent';

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
        <AboutContent />
      </main>
     
    </>
  );
}

export default Contact;
