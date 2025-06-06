import "./App.css";
import Body from "../src/component/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/About";
import Contect from "./component/contect";
import Skills from "./component/Skills";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/contect" element={<Contect />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
