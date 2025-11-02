import { render, screen, fireEvent } from "@testing-library/react"
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

  test("gère un titre vide", () => {
    render(
      <MemoryRouter>
        <Card id="abc123" title="" cover="image-test.jpg" />
      </MemoryRouter>
    )

    const img = screen.getByAltText("")
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute("src", "image-test.jpg")

    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("href", "/logement/abc123")
  })

  test("gère un id manquant", () => {
    render(
      <MemoryRouter>
        <Card title="Mon logement" cover="image-test.jpg" />
      </MemoryRouter>
    )

    const title = screen.getByText("Mon logement")
    expect(title).toBeInTheDocument()

    const link = title.closest("a")
    expect(link).toHaveAttribute("href", "/logement/undefined")
  })

  test("peut être navigué avec la touche Enter", () => {
    render(
      <MemoryRouter>
        <Card id="abc123" title="Mon logement" cover="image-test.jpg" />
      </MemoryRouter>
    )

    const link = screen.getByRole("link")
    fireEvent.keyDown(link, { key: "Enter", code: "Enter" })
    expect(link).toHaveAttribute("href", "/logement/abc123")
  })

  test("rend la class card correctement", () => {
    render(
      <MemoryRouter>
        <Card id="abc123" title="Mon logement" cover="image-test.jpg" />
      </MemoryRouter>
    )

    const link = screen.getByRole("link")
    expect(link).toHaveClass("card")
  })
})