import "./styles/main.scss";
import Header from "./components/layout/Header/Header";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";
import Hero from "./sections/Hero/Hero";
import Education from "./sections/Education/Education";
import Projects from "./components/Projects";
import Skills from "./sections/Skills/Skills";
import FlipCards from "./components/FlipCards";
import Footer from "./components/layout/Footer/Footer";
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
