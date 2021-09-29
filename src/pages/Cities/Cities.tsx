import React from 'react'
import { Link } from 'react-router-dom'
import { HOME } from 'routes'

export function Cities() {
  return (
    <>
      <h1>Cidades</h1>
      <Link to={HOME}>Navegar</Link>
    </>
  )
}
