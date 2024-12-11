import React from 'react'
import Link from '@docusaurus/Link'
import './styles.scss'

export function Card({ title, description, to }) {
  return (
    <Link to={to} className="card">
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </Link>
  )
}

export function CardGrid({ children }) {
  return (
    <div className="row">
      {children}
    </div>
  )
} 