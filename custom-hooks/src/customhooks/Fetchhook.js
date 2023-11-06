import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const responsedata = await response.json();
        setLoading(false);
        setData((prev) => responsedata);
        setError("");
      } catch (error) {
        setLoading(false);
        setError("Something went wrong");
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
}

