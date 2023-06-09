import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./view/home/Home";
import About from "./view/about/About";
import Contact from "./view/contact/Contact";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
