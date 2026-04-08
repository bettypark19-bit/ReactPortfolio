import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ExploreSection from '../components/ExploreSection';
import Footer from '../components/Footer';

export default function App() {
  return (
    <div className="portfolio-root">
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
