import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Banner } from "./components/Banner";
import About from "./components/ui/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/skills" element={<Skills />} /> */}
          {/* <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
