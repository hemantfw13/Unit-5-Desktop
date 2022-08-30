import { useEffect, useState } from "react";
import axios from "axios";
export const Glo = () => {
  const [text, setText] = useState("");
  const [glo, setGlo] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:3001/glo").then((res) => {
      setGlo(res.data);
    });
  };

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          fetch("http://localhost:3001/glo", {
            method: "POST",
            body: JSON.stringify({ title: text, purchased: false }),
            headers: { "content-type": "application/json" },
          }).then(() => {
            getData();
          });
        }}
      >
        Save Glo
      </button>
      {Glo.map((g) => (
        <div key={g.id}>{g.title}</div>
      ))}
    </div>
  );
};
