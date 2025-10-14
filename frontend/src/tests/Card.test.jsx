// src/__tests__/Card.test.jsx
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Card from "../components/card/Card"

describe("Card", () => {
  test("la Card affiche le titre et l’image correctement", () => {
    render(
      <MemoryRouter>
        <Card title="Mon logement" cover="image-test.jpg" />
      </MemoryRouter>
    )

    const image = screen.getByAltText("Mon logement")

    // Vérifie que le titre s'affiche
    expect(screen.getByText("Mon logement")).toBeInTheDocument()

    // Vérifie que l'image a bien la source
    expect(image).toHaveAttribute("src", "image-test.jpg")
  })
})
