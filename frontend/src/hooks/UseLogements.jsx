import { useState, useEffect } from "react"

export default function useLogements() {
  const [logements, setLogements] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => {
        if (!res.ok) throw new Error("Erreur de chargement des données")
        return res.json()
      })
      .then((data) => {
        setLogements(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { logements, loading, error };
};
