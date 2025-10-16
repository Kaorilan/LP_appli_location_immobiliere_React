

import { render, screen, fireEvent } from "@testing-library/react"
import Collapse from "../components/collapse/Collapse"

describe("Collapse", () => {
  test("initialement le contenu est caché", () => {
    render(<Collapse title="Titre">Contenu</Collapse>)
    expect(screen.queryByText("Contenu")).toBeNull()
  })

    // Contenu non affiché au départ
    expect(screen.queryByText("Contenu visible")).toBeNull()

    // Clic sur le header
    fireEvent.click(screen.getByText("Test Collapse"))

    // Contenu devient visible
    expect(screen.getByText("Contenu visible")).toBeInTheDocument()

    // Re-clic sur le header
    fireEvent.click(screen.getByText("Test Collapse"))

    // Contenu re-devient caché
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
    // on suppose que la flèche est dans le header ; adapt si nécessaire
    fireEvent.click(header)
    expect(document.querySelector(".collapse-arrow.open")).toBeTruthy()
  })

