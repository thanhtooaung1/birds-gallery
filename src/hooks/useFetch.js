import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setIsPending(false);
        setError(null);
        setData(data);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error.message);
        setData(null);
      });
  }, []);

  return { data, error, isPending };
};

export default useFetch;
