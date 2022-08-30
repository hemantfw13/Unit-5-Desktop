import logo from "./logo.svg";
import "./App.css";

function App() {
  const a = 21;
  const b = "lokesh";
  const c = ["google", "apple", "microsoft"];
  return (
    <div className="App">
      <h1>hello hemant and {b}</h1>
      <div>You can drive {a > 18 ? "SAFELY" : "WAIT FOR PROPER AGE"} </div>
      <div>
        My fav industries are
        {c.map((e) => (
          <li>{e}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
