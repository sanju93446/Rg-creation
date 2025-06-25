import { HashRouter, Routes, Route } from 'react-router-dom';
import About from "./About.jsx";
import Benifit from "./Benifit.jsx";
import Header from "./Header.jsx";
import Nav from "./Nav.jsx";
import Projects from "./Projects.jsx";
import Services from "./Services.jsx";
import Feedback from './Feedback.jsx';
import Footer from './Footer.jsx';

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
