import Head from "next/head";
import Menu from "@/components/Menu";
import HomeTop from "@/components/HomeTop";
import HomePrem from "@/components/HomePrem";
import HomeServ from "@/components/HomeServ";
import Professionals from "@/components/Professionals/Professionals";
import ContentSlider from "@/components/ContentSlider"; // Devolvendo o slider
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials/Testimonials";
import News from "@/components/News/News";

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
        <HomeTop />
        <HomePrem />
        <HomeServ />
        <Testimonials />
        <News />
        <Professionals />
        <ContentSlider /> {/* Slider reposicionado aqui */}
        <Footer />
      </main>
    </>
  );
}

export default Home;
