import Home from './pages/home';
import Blogs from './pages/blog';
import Contact from './pages/contact';
import About from './pages/about';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="blogs" element={<div>Blogs</div>} />
        <Route exact path="/" element={<div>Home Page</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
