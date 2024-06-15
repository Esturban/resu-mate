import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Features from "./components/Features";

/* main app entry */
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Process />
      <Pricing />
      <Footer />
    </>
  );
}
