import { useEffect } from "react";
import { info } from "./data/info";
import "./App.css";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App: React.FC = () => {
  useEffect(() => {
    document.title = info.title;
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container selection:bg-fuchsia-500/30 min-h-screen relative">
        {/* content */}
        <section className="relative max-w-4xl mx-auto min-h-[80vh] py-32 px-6 content-center" id="hero">
          {/* glow */}
          <div className="pointer-events-none absolute -top-40 right-0 w-150 h-150 bg-purple-600/30 rounded-full blur-[160px]" />
          <div className="pointer-events-none absolute top-1/2 -left-40 w-125 h-125 bg-blue-600/20 rounded-full blur-[160px]" />
          <Hero />
        </section>
        <section
          className="max-w-6xl mx-auto py-5 px-6 relative z-10"
          id="projects"
        >
          <Projects />
        </section>
        <section className="max-w-5xl mx-auto py-10 px-6" id="skills">
          <Skills />
        </section>
        <section
          className="max-w-6xl mx-auto py-20 px-6 relative z-10 md:py-32 overflow-hidden"
          id="about"
        >
          <About />
        </section>
        <section
          className="max-w-4xl mx-auto py-18 px-6 relative z-10 text-center md:py-32"
          id="contact"
        >
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default App;
