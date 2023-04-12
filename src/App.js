import Layout from './Componants/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Category from './Pages/Category';
import Contact from './Pages/Contact';
import Pagenotfound from './Pages/Pagenotfound';



function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/category" element={<Category />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Pagenotfound/>} />
     </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
