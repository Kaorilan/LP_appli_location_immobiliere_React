import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Card from "../components/card/Card"

describe("Card", () => {
  test("rend titre et image et link correct", () => {
    render(
      <MemoryRouter>
        <Card id="abc123" title="Mon logement" cover="image-test.jpg" />
      </MemoryRouter>
    )

    const title = screen.getByText("Mon logement")
    expect(title).toBeInTheDocument()

    const img = screen.getByAltText("Mon logement")
    expect(img).toHaveAttribute("src", "image-test.jpg")

    // vérifie que le Link pointe vers /logement/abc123
    const link = title.closest("a")
    expect(link).toHaveAttribute("href", "/logement/abc123")
  })

  test("rend fallback si pas d'image", () => {
  render(
    <MemoryRouter>
      <Card id="noimg" title="Sans image" />
    </MemoryRouter>
  )

  const img = screen.getByAltText("Sans image")
  expect(img).toHaveAttribute("src", expect.stringContaining("LOGO_Kasa"))
})

})
