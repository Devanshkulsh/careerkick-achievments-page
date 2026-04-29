import "./App.css";
import About from "./components/About";
import Achievements from "./components/Achievements";
import ContactCTA from "./components/ContactCTA";
import Events from "./components/Events";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import ScrollToTop from "./components/ScrollToTop";
import Testimonials from "./components/Testimonials";
import Updates from "./components/Updates";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Impact />
      <Testimonials />
      <Achievements />
      <Events />
      <Updates />
      <ContactCTA />
      <ScrollToTop />
    </>
  );
}

export default App;
