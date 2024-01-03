import NavbarProject from "./NavbarProject";
import Home from "./Home";
import Projects from "./Projects";
import Contacts from "./Contacts";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavbarProject />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
