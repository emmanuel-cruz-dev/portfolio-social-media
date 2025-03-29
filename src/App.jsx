import "./styles/main.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import FlipCards from "./components/FlipCards";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";

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
