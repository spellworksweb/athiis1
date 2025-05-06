import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ServiceDetail from "./pages/ServiceDetail";
import Services from './pages/Services';

function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Clients" element={<Clients />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Servicedetail/:id" element={<ServiceDetail />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
