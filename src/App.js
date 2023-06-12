import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./view/home/Home";
import About from "./view/about/About";
import Contact from "./view/contact/Contact";
import Layout from "./Layout";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
