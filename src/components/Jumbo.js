import React from "react"
import { StyledJumbo } from "../styles/components"
import { Image } from "./"

export default function Jumbo() {
  return (
    <StyledJumbo>
      <div>
        <h1>Compras seguras </h1>
      </div>
      <Image name="icon.png" />
    </StyledJumbo>
  )
}
