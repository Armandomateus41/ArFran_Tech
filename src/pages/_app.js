import "@/styles/globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'aos/dist/aos.css'; // Estilos do AOS
import AOS from 'aos'; // Biblioteca AOS
import { useEffect } from 'react';

function App({ Component, pageProps }) {
  // Inicialização do AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação (em ms)
      once: true, // Anima apenas uma vez ao rolar
    });
  }, []);

  return <Component {...pageProps} />;
}

export default App;
