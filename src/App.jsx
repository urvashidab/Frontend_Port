import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
