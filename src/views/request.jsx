import React, { useState, useEffect } from "react";

function Request() {
  const [advice, setAdvice] = useState("");
  const [state, setState] = useState(true);
  const url = "https://api.adviceslip.com/advice";

  function handleClick() {
    setState(!state);
  }
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((jso) => setAdvice(jso["slip"]));
  }, [state]);

  return (
    <div>
      <p>{JSON.stringify(advice["advice"])}</p>
      <button onClick={handleClick}>Refresh</button>
    </div>
  );
}

export default Request;