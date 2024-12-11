import React from 'react'
import Link from '@docusaurus/Link'
import styles from './styles.module.scss'

export function Card({ title, description, to }) {
  return (
    <Link to={to} className={styles.card}>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </Link>
  )
}

export function CardGrid({ children }) {
  return (
    <div className={styles.row}>
      {children}
    </div>
  )
} 