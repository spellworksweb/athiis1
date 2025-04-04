import About from './components/About';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Home />
      <About />
      <Clients />
      <Services />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;