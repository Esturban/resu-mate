// import * as dotenv from "dotenv";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Features from "./components/Features";

// dotenv.config();

/* main app entry */
export default function App() {
  // console.log(process.env.REACT_APP_YOUR_API_KEY);
  // console.log(process.env.REACT_APP_STRIPE_URL);
  // console.log(process.env.REACT_APP_STRIPE_API_KEY);
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
