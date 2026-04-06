import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Features from "./sections/Features";
import Stats from "./sections/Stats";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Contact from "./sections/Contact";
import MapSection from "./sections/MapSection";
import Footer from "./sections/Footer";
import useScrollReveal from "./script/useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Stats />
      <Pricing />
      <Testimonials />
      <CTA />
      <Contact />
      <MapSection />
      <Footer />
    </>
  );
}

export default App;
