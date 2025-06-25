import { HashRouter, Routes, Route } from 'react-router-dom';
import About from "./About";
import Benifit from "./Benifit";
import Header from "./Header";
import Nav from "./Nav";
import Projects from "./Projects";
import Services from "./Services";
import Feedback from './Feedback';
import Footer from './Footer';

function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Benifit />
            <About />
            <Services />
            <Projects />
            <Feedback />
            <Footer />
            {/* Include any other components you want to show on the home page */}
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Contact" element={<Feedback />} />
        {/* Add additional routes as needed */}
        
      </Routes>
      
    </HashRouter>
  );
}

export default App;
