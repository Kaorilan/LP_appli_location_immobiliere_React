
import { render, screen, fireEvent } from "@testing-library/react"
import Collapse from "../components/collapse/Collapse"

describe("Collapse", () => {
  test("initialement le contenu est caché", () => {
    render(<Collapse title="Titre">Contenu visible</Collapse>)
    expect(screen.queryByText("Contenu visible")).toBeNull()

    // Clic pour ouvrir
    fireEvent.click(screen.getByText("Titre"))
    expect(screen.getByText("Contenu visible")).toBeInTheDocument()

    // Clic pour refermer
    fireEvent.click(screen.getByText("Titre"))
    expect(screen.queryByText("Contenu visible")).toBeNull()
  })

  test("affiche children complexe (liste) correctement", () => {
    render(
      <Collapse title="Equipements">
        <ul>
          <li>Wifi</li>
          <li>Cuisine</li>
        </ul>
      </Collapse>
    )
    fireEvent.click(screen.getByText("Equipements"))
    expect(screen.getByText("Wifi")).toBeInTheDocument()
    expect(screen.getByText("Cuisine")).toBeInTheDocument()
  })

  test("la classe de la flèche change quand ouvert", () => {
  render(<Collapse title="Titre">Contenu</Collapse>)
  const header = screen.getByText("Titre")
  const arrow = screen.getByText("⌃") 
  expect(arrow).not.toHaveClass("open")
  
  fireEvent.click(header)
  expect(arrow).toHaveClass("open")
})

})
