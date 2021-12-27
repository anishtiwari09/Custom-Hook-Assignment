import { useEffect, useState } from "react";

export default function useFetch({ url = null }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = (url) => {
    setLoading(true);
    return fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  };
  useEffect(() => {
    url && fetchData(url);
  }, [url]);
  return {
    data,
    loading,
    error
  };
}
