
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
  const arrow = screen.getByTestId("collapse-icon") 
   
  expect(arrow).not.toHaveClass("open")
  
  fireEvent.click(header)
  expect(arrow).toHaveClass("open")
})

 //CAS LIMITES ***
  test("gère un titre vide", () => {
    render(<Collapse title="">Contenu</Collapse>)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.queryByText("Contenu")).toBeNull()
  })

  test("gère un contenu null ou undefined", () => {
    render(<Collapse title="Titre">{null}</Collapse>)
    fireEvent.click(screen.getByText("Titre"))
    expect(screen.queryByText(/.*/)).toBeNull()
  })

  test("gère les props manquantes sans erreur", () => {
    render(<Collapse>Contenu</Collapse>)
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  test("gère les clics multiples sans bug", () => {
    render(<Collapse title="Titre">Contenu</Collapse>)
    const button = screen.getByText("Titre")
    
    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)
    
    expect(screen.getByText("Contenu")).toBeInTheDocument()
  })


  //ACCESSIBILITÉ ***
  test("peut être ouvert avec la touche Enter", () => {
    render(<Collapse title="Titre">Contenu</Collapse>)
    const button = screen.getByRole("button", { name: /titre/i })
    fireEvent.keyDown(button, { key: "Enter", code: "Enter" })
    expect(screen.getByText("Contenu")).toBeInTheDocument()
  })

  test("peut être ouvert avec la touche Space", () => {
    render(<Collapse title="Titre">Contenu</Collapse>)
    const button = screen.getByRole("button", { name: /titre/i })
    fireEvent.keyDown(button, { key: " ", code: "Space" })
    expect(screen.getByText("Contenu")).toBeInTheDocument()
  })

  test("met à jour aria-expanded correctement", () => {
    render(<Collapse title="Titre">Contenu</Collapse>)
    const button = screen.getByRole("button", { name: /titre/i })
    
    expect(button).toHaveAttribute("aria-expanded", "false")
    fireEvent.click(button)
    expect(button).toHaveAttribute("aria-expanded", "true")
    fireEvent.click(button)
    expect(button).toHaveAttribute("aria-expanded", "false")
  })

  test("a un rôle button accessible et focusable", () => {
    render(<Collapse title="Titre">Contenu</Collapse>)
    const button = screen.getByRole("button", { name: /titre/i })
    expect(button).toBeInTheDocument()
    expect(button).toBeVisible()
  })
})
