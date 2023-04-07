import Layout from './components/Layout';
import Home from './pages/home';
import Blogs from './pages/blog';
import Contact from './pages/contact';
import About from './pages/about';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Home />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />}>
    //       <Route index element={<Home />} />
    //       <Route path="blogs" element={<Home />} />
    //       <Route path="contact" element={<Home />} />
    //       <Route path="about" element={<Home />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
