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
          <Link href="/" legacyBehavior>
            <a>ArFran Tech</a>
          </Link>
        </div>

        {/* Menu */}
        <ul className={`${styles.menuSite} ${menuActive ? styles.active : ''}`}>
          <li onClick={closeMenu}>
            <Link href="/" legacyBehavior>
              <a className={styles.menuBtn}>Home</a>
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="/sobre-empresa" legacyBehavior>
              <a className={styles.menuBtn}>Sobre Empresa</a>
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="/arfrantech/src/pages/contact.js" legacyBehavior>
              <a className={styles.menuBtn}>Contato</a>
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="/profissionais" legacyBehavior>
              <a className={styles.menuBtn}>Profissionais</a>
            </Link>
          </li>
        </ul>

        {/* Redes Sociais e Botão */}
        <div className={styles.socialIcons}>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.icon}>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.icon}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className={styles.icon}>
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://spotify.com" target="_blank" rel="noreferrer" className={styles.icon}>
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
