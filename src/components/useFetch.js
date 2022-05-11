import { useEffect, useState } from "react";

function useFetch(url, toggle) {
  const [data, setData] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((obj) => {
        setData(obj["slip"]["advice"]);
        setId(obj["slip"]["id"]);
        console.log(`typeof of res:${typeof str}`);
      })
  }, [url, toggle]);

  return [data, id];
}

export default useFetch;
