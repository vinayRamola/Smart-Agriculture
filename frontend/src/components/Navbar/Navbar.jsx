import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../images/logo.jpeg'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/"><img src={logo} alt="logo"></img></a>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}></div>
        <div style={{ opacity: isOpen ? 0 : 1 }}></div>
        <div style={{ transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)' }}></div>
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#marketplace">Marketplace</a></li>
        <li><a href="#resources">Resources</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><button className={styles.navButton}>Sign In</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
