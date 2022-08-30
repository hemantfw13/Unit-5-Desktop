import { useEffect, useState } from "react";

export const Todo = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [res, setData] = useState([]);
  console.log("Before");
  useEffect(() => {
    fetch("").then((res) => {
      setData(res);
    });
  }, []);
  useEffect(() => {
    console.log("Inside2");
  }, [counter2]);
  console.log("Outside");
  return (
    <div>
      TODOS:
      <button
        onClick={() => {
          setCounter1(counter1 + 1);
        }}
      >
        ADD 1
      </button>
      <button
        onClick={() => {
          setCounter2(counter2 + 1);
        }}
      >
        ADD 2
      </button>
    </div>
  );
};
