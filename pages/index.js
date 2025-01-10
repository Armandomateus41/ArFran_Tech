import Head from "next/head";
import Menu from "@/components/Menu";
import HomeTop from "@/components/HomeTop";
import HomePrem from "@/components/HomePrem";
import HomeServ from "@/components/HomeServ";
import Professionals from "@/components/Professionals/Professionals";
import ContentSlider from "@/components/ContentSlider";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials/Testimonials";
import News from "@/components/News/News";
import axios from "axios";
import { useEffect } from "react";


function Home() {
  const getHome = async () => {
    await axios.get("http://localhost:8080/home") // substituir com a URL da API
    .then((response) => { // Acessa o then quando a API retornou com sucesso
       // Tratar os dados da resposta
       console.log(response.data);
 
    }).catch((error) =>{ // Acessa o catch quando a API retornou com erro
      if(error.response) {
        console.log(error.response.data.message);
      }else{
        console.log("Error  Tente mais tarde. Tente novamente. ");
      }
 
    });
  }
  // useEffect e usado para lidar com efeitos colaterais e um componente. por exemplo, para carregar dados de um API
  // do componenten, fazer chamadas a API e manipular os dados.

  useEffect(() => {
   // Chamar a função com requisição à API
   getHome();
  }, []);
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
      <ContentSlider />
      <Footer />
      </main>
    </>
  );
}

export default Home;
