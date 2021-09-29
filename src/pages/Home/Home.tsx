import React from 'react'
import { Link } from 'react-router-dom'
import { CITIES } from 'routes'

export function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to={CITIES}>Navegar</Link>
    </>
  )
}
