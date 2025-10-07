
import { useState, useEffect } from "react"

export default function useLogements() {
  const [logements, setLogements] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then(res => res.json())
      .then(data => {
        setLogements(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return { logements, loading }
}
