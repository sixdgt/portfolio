import About from './components/About';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}
