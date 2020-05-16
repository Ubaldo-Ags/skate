import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function gracias() {
  return (
    <div>
      <SEO title="Compra Exitosa!!" />
      <Purchase>
        <h1>Compra exitosa!!</h1>
      </Purchase>
      <Link to="/">
        <Button>Volver</Button>
      </Link>
    </div>
  )
}
