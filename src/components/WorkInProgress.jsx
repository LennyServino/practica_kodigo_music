// WorkInProgress.jsx
import React from 'react';
import styles from '../styles/WorkInProgress.module.css';

const WorkInProgress = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Work in Progress</h1>
      <p className={styles.message}>Estamos trabajando en esta sección. ¡Vuelve pronto!</p>
      <div className={styles.icon}>
        {/* Puedes agregar un ícono o imagen aquí */}
        🚧
      </div>
    </div>
  );
};

export default WorkInProgress;