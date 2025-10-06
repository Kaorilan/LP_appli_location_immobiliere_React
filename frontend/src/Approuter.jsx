import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import NotFound from "./pages/notfound/NotFound"

export default function AppRouter() {
  return (
    <Layout>
      <Routes>
        {["/", "/home"].map((path) => (
        <Route key={path} path={path} element={<Home />} />
        ))}
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
