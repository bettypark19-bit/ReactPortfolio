import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ExploreSection from '../components/ExploreSection';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

export default function App() {
  return (
    <div className="portfolio-root">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ExploreSection />
      <Footer />
    </div>
  );
}
