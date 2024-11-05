import React from 'react';
import styles from './Hero.module.css';
import HeroImage from '../../images/hero-agriculture.jpeg'

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Empowering Smart Agriculture</h1>
        <p className={styles.heroSubtitle}>
          Connect with the best tools, resources, and innovations in agriculture to maximize your yield and sustainability.
        </p>
        <button className={styles.heroButton}>Explore Marketplace</button>
      </div>
      <div className={styles.heroImage}>
        <img src={HeroImage} alt="Smart Agriculture" />
      </div>
    </section>
  );
};

export default Hero;
