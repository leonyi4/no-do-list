import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import View from "./pages/View";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/view" element={<View />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
