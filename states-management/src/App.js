import "./App.css";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <Left value={counter} />
      <Right />
    </div>
  );
}
function Left({ value }) {
  return <div>Leftvalue:{value}</div>;
}
function Right() {
  return <div>Rightvalue:</div>;
}
export default App;
