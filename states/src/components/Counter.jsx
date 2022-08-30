import { useState } from "react";
export function Counter() {
  const [counter, setCounter] = useState(0);
  const inc = (value) => {
    setCounter(counter + value);
  };

  //   function inc(value) {
  //     setCounter(counter + value);
  //   }

  return (
    <div>
      <h3>County:{counter}</h3>
      <button onClick={() => inc(1)}>ADD 1</button>
      <button
        onClick={() => {
          if (counter > 0) {
            inc(-1);
          }
        }}
      >
        SUB 1
      </button>
    </div>
  );
}
