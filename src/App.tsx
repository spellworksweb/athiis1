import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ServiceDetail from "./pages/ServiceDetail";
import Services from './pages/Services';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/services" element={<Services />} />
        <Route path="/servicedetail/:id" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
