import Layout from './components/Layout';
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
        <Route exact path="/" component={<Home />}>
          <Route index component={<Home />} />
          <Route path="blogs" component={<Blogs />} />
          <Route path="contact" component={<Contact />} />
          <Route path="about" component={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
