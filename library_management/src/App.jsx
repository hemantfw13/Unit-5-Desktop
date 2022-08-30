import { AllRoutes } from "./Routes/Routes";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <AllRoutes /> */}
    </div>
  );
}

export default App;
