import { useEffect, useState } from "react";

export default function useJsonFetch(url, _opts) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url)
        if(!response.ok) {
          throw new Error('Very sorry.... but an Error occurred :(');
        } 
        const data = await response.json();
        setData(data);
        setError(null);
      } catch (e) {
        setError(e.message);
      }
      finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url])

  return [data, loading, error]
}