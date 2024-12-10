import React from 'react';
import styles from './styles.module.scss';

export default function NeonButton({ children, to, className, ...props }) {
  return (
    <a
      className={`${styles.neonButton} ${className || ''}`}
      href={to}
      {...props}
    >
      {children}
    </a>
  );
} 