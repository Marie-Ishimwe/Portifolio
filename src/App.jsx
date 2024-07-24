import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Banner } from "./components/Banner";
import About from "./about/About";
import Capabilities from "./skills/Capabilities";
import Projects from "./projects/projects";
import Contact from "./contact/Contact";
import Blog from "./blog/Blog";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Capabilities />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-writings" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
