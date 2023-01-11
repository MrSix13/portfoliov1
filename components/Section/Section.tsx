import Image from 'next/image';
import React from 'react'
import styles from '../../styles/Section.module.css';

const Section = () => {
  return (
    <div className={styles.section_container}>
        <div className={styles.section_left}>
        </div>
        <div className={styles.section_rigth}>
        </div>
        <div className={styles.section_hero}>
            <p>Mi Nombre es Bastian</p>
        </div>
    </div>
  )
}

export default Section