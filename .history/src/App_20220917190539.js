import Home from "./pages/home";
import Blogs from "./pages/blog";
import Contact from "./pages/contact";
import About from "./pages/about";
import Projects from "./pages/projects";
import BlogsTemplate from "./templates/blog-template";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="blogs/:slug" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
