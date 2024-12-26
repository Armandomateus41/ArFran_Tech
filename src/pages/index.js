import Head from "next/head";
import Menu from "@/components/index";
import styles from "@/components/Menu/Menu.module.css";
function Home() {
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
        <h1>Seja bem vindo Ar FranTech!</h1>
      </main>
    </>
  );
}
export default Home;
