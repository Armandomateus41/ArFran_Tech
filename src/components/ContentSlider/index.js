import React from 'react';
import Slider from 'react-slick';
import styles from '@/components/ContentSlider/ContentSlider.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ContentSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 24,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 68,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 80,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const contentItems = [
    {
      img: '/images/servicios_ar27.jpg',
      title: 'As Regras',
    },
    {
      img: '/images/servicios_ar25.jpg',
      title: 'O que esperar do Brasil e do Tributário em 2025?',
    },
    {
      img: '/images/servicios_ar24.jpg',
      title: 'STJ garante vitória dos contribuintes com exclusão do Difal-ICMS',
    },
    {
      img: '/images/servicios_ar22.jpg',
      title: 'A Reforma Tributária começa aqui',
    },
  ];

  return (
    <section className={styles.contentSection}>
      <h2 className={styles.title}>Conteúdo</h2>
      <Slider {...sliderSettings} className={styles.slider}>
        {contentItems.map((item, index) => (
          <div key={index} className={styles.slideItem}>
            <img src={item.img} alt={item.title} className={styles.image} />
            <h3 className={styles.itemTitle}>{item.title}</h3>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ContentSlider;
