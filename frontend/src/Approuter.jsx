import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Logement from "./pages/logement/Logement"
import NotFound from "./pages/notfound/NotFound"


export default function AppRouter() {
  return (
    <Layout>
      <Routes>
        {["/", "/home"].map((path) => (
        <Route key={path} path={path} element={<Home />} />
        ))}
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
