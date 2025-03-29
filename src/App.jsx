import "./styles/main.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";
import Education from "./sections/Education/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import FlipCards from "./components/FlipCards";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import About from "./sections/About/About";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <MusicPlayer />
      <ScrollToTopButton />
      <About />
      <Education />
      <Projects />
      <Skills />
      <FlipCards />

      <Footer />
    </>
  );
}

export default App;
