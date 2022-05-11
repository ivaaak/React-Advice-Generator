import useFetch from "../components/useFetch";
import { useState } from "react";

import icon from "../resources/images/icon.svg";
import divider from "../resources/images/divider1.svg";
import "./home.css";

function Home() {
  const [toggle, setToggle] = useState(false);

  const [data, id] = useFetch(
    "https://api.adviceslip.com/advice",
    toggle
  );

  return (
    <div className="parent">
      <div className="container">
        <p>ADVICE #{JSON.stringify(id)}</p>
        <p>{JSON.stringify(data)}</p>
        <img src={divider} style={{ width: "90%", margin: "1em" }} alt="" />
        <div id="toggle">
          <img src={icon} alt="" onClick={() => setToggle(!toggle)} />
        </div>
      </div>
    </div>
  );
}

export default Home;