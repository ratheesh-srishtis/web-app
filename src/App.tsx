import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/App.css";
import "../src/css/ass.css";
import "../src/css/ass-result.css";
import "../src/css/howitwork.css";
import "../src/css/sample.css";
import "../src/css/WhoItsFor.css";
import "../src/css/MatchedInstallers.css";
import "../src/css/responsive.css";

import Footer from "./components/Footer.tsx";
import Home from "./pages/Home.tsx";
import Assesement from "./pages/Assesement.tsx";
import AssesementResult from "./pages/AssessmentResult.tsx";
import HowItWorks from "./pages/HowItWorks.tsx";
import SampleResults from "./pages/SampleResults.tsx";
import WhoItsFor from "./pages/WhoItsFor.tsx";
import MatchedInstallers from "./pages/MatchedInstallers.tsx";

function App() {
  //testgit 08.04.2026
  return (
    <Router basename="/web-app">
      {/* MIDDLE CONTENT */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start-assesement" element={<Assesement />} />
        <Route path="/assesement-result" element={<AssesementResult />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/sample-results" element={<SampleResults />} />
        <Route path="/who-its-for" element={<WhoItsFor />} />
        <Route path="/matched-installers" element={<MatchedInstallers />} />
      </Routes>

      {/* FOOTER */}
      <Footer />
    </Router>
  );
}

export default App;
