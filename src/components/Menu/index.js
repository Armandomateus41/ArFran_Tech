import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Menu.module.css';

function Menu() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.maxWidth}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            ArFran Tech
          </Link>
        </div>

        {/* Menu */}
        <ul className={`${styles.menuSite} ${menuActive ? styles.active : ''}`}>
          <li onClick={closeMenu}>
            <Link href="/" className={styles.menuBtn}>Home</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="http://localhost:3000/" className={styles.menuBtn}>Sobre Empresa</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="/contact" className={styles.menuBtn}>Contato</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="/profissionais" className={styles.menuBtn}>Profissionais</Link>
          </li>
        </ul>

        {/* Redes Sociais e Botão */}
        <div className={styles.socialIcons}>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <i className="fab fa-spotify"></i>
          </a>
          <button className={styles.accessButton}>Acessar Conta</button>
        </div>

        {/* Botão Hambúrguer */}
        <div className={styles.menuToggle} onClick={toggleMenu}>
          &#9776; {/* Ícone hambúrguer */}
        </div>
      </div>
    </nav>
  );
}

export default Menu;
