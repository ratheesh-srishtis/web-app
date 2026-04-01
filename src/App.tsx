import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/App.css"
import "../src/css/ass.css"
import Footer from "./components/Footer.tsx";

import Home from "./pages/Home.tsx";
import Assesement from "./pages/Assesement.tsx"


function App() {
  //testgit
  return (
    <Router>



      {/* MIDDLE CONTENT */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assesement" element={<Assesement />} />
        {/*  <Route path="/sample-results" element={<SampleResults />} />
        <Route path="/who-its-for" element={<WhoItsFor />} />*/}
      </Routes>

      {/* FOOTER */}
      <Footer />

    </Router>
  );
}

export default App;