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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />
      </Head>
      <main className="container">
        <Menu />
        <section className="hero">
          <HomeTop />
        </section>
        <section className="premium">
          <HomePrem />
        </section>
        <section className="services">
          <HomeServ />
        </section>
        <section className="testimonials">
          <Testimonials />
        </section>
        <section className="news">
          <News />
        </section>
        <section className="professionals">
          <Professionals />
        </section>
        <section className="slider">
          <ContentSlider /> {/* Slider reposicionado aqui */}
        </section>
        <Footer />
      </main>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        .hero, .premium, .services, .testimonials, .news, .professionals, .slider {
          width: 100%;
          padding: 50px 20px;
          text-align: center;
        }
        button {
          background-color: #007bff;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          transition: all 0.3s ease;
        }
        button:hover {
          background-color: #0056b3;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  );
}

export default Home;