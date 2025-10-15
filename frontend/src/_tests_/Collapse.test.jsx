
import { render, screen, fireEvent } from "@testing-library/react"
import Collapse from "../components/collapse/Collapse"

describe("Collapse", () => {
  test("le Collapse s’ouvre et se ferme quand on clique", () => {
    render(
      <Collapse title="Test Collapse">
        <p>Contenu visible</p>
      </Collapse>
    )

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
})
