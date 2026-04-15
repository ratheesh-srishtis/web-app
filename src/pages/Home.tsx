import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/images/logo.png";
import logo from "../assets/images/logo.png";
import bttnarrow from "../assets/images/btton-arrow.png";
import bttnarrowhite from "../assets/images/btton-arrow-white.png";
import one from "../assets/images/1.png";
import two from "../assets/images/2.png";
import three from "../assets/images/3.png";
import onee from "../assets/images/11.png";
import twoo from "../assets/images/22.png";
import threee from "../assets/images/33.png";
import blur from "../assets/images/Overlay+Border+OverlayBlur.png";
import linkone from "../assets/images/Link2.png";
import linktwo from "../assets/images/Link3.png";
import link from "../assets/images/Link1.png";
import enery from "../assets/images/energy.png";
import quik from "../assets/images/quik.png";
import see from "../assets/images/see-bannar.png";
import { useNavigate } from "react-router-dom";
import { useEffect} from "react";
function Home() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleToggle = () => {
  if (window.innerWidth < 768) {
    setOpen(!open);
  }
};


const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div>
      <section className="hero d-flex align-items-center">
        <div className="overlay"></div>

        <div className="container position-relative z-1 menu-div">
          {/* Navbar */}
          <nav className={`navbar navbar-expand-md ${scrolled ? "scrolled" : ""}`}>
            <div className="container">
              {/* Logo */}
              <Link
                to="/Home"
                onClick={() => window.scrollTo(0, 0)}
                className="navbar-brand text-white fw-bold"
              >
                <img src={logo} alt="logo" className="normal-sizee" />
              </Link>

               <Link
                to="/Home"
                onClick={() => window.scrollTo(0, 0)}
                className="navbar-brand text-white fw-bold"
              >
                <img src={logo} alt="logo" className="mbile-size"/>
              </Link>

              {/* Hamburger */}
             <button onClick={handleToggle} className="navbar-toggler">
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Menu */}
              <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
                <ul className="navbar-nav ms-auto align-items-md-center gap-3">
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      to="/how-it-works"
                      onClick={() => setOpen(false)}
                    >
                      How It Works
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      to="/assesement-result"
                      onClick={() => setOpen(false)}
                    >
                      Sample Results
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      to="/"
                      onClick={() => setOpen(false)}
                    >
                      Who It's For
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      className="custom-btn "
                      onClick={() => {
                        navigate("/start-assesement");
                      }}
                    >
                      {" "}
                      Start Assessment
                      <img src={bttnarrow} alt="arrow" />
                    </button>
                  </li>

                  
                </ul>
              </div>
            </div>
          </nav>

          <div className="row align-items-center text-divs ">
            <div className="col-lg-6 text-white mb-3 mb-lg-0">
              <h1 className="bannr-text display-5  mt-3 mb-3">
                Find The Right Solar And <br />
                Backup Power System For <br />
                Your Building
              </h1>

              <p className="bannr-text-s text-light mt-3 mb-3">
                Solarvy helps homes and businesses estimate solar size, battery
                storage, diesel reduction, savings, and payback before speaking
                to installers or committing money.
              </p>

              <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3 mt-3">
                <button className="custom-btn bann-second">
                  {" "}
                  Start Free Assessment
                  <img src={bttnarrow} alt="arrow" />
                </button>

                 <button className="custom-btn-mobile-view">
                  {" "}
                  Start Free Assessment
                  <img src={bttnarrow} alt="arrow" />
                </button>

                <a href="#" className="text-light align-self-center">
                  See Sample Result
                </a>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1">
              <div
                className="p-4 shadow rounded-4"
                style={{
                  backgroundImage: `url(${quik})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h5 className="fw-bold text-center mb-3">
                  Quick Assessment Preview
                </h5>

                <div className="row">
                  <div className="col-6">
                    <label className="quick-lable">Property Type</label>
                    <select
                      className="form-select select-text"
                      defaultValue=""
                      onChange={(e) => {
                        e.target.style.color = "#000";
                      }}
                    >
                      <option disabled>Select Property</option>
                      <option value="home">Home</option>
                      <option value="hotel">Hotel</option>
                      <option value="factory">Factory</option>
                      <option value="commercial building">
                        Commercial Building
                      </option>
                      <option value="hospital clinic">Hospital/Clinic</option>
                      <option value="school education">School/Education</option>
                    </select>
                  </div>
                  <div className="col-6">
                    <label className="quick-lable">Location</label>
                    <select
                      className="form-select select-text"
                      defaultValue=""
                      onChange={(e) => {
                        e.target.style.color = "#000";
                      }}
                    >
                      <option>Nigeria</option>
                    </select>
                  </div>
                </div>

                <label className="quick-lable">Monthly Electricity Bill</label>
                <input
                  type="text"
                  className="form-control select-text mb-2"
                  placeholder=""
                />

                <div className="row g-2 mb-3">
                  <div className="col">
                    <label className="quick-lable">Power Setup</label>
                    <select
                      className="form-select select-text"
                      defaultValue=""
                      onChange={(e) => {
                        e.target.style.color = "#000";
                      }}
                    >
                      <option disabled>Select Power Setup</option>
                      <option value="Grid Generator">Grid + Generator</option>
                      <option value="Grid Only">Grid Only</option>
                      <option value="Solar grid">Solar grid</option>
                    </select>
                  </div>
                  <div className="col">
                    <label className="quick-lable">Main Objective</label>
                    <select
                      className="form-select select-text"
                      defaultValue=""
                      onChange={(e) => {
                        e.target.style.color = "#000";
                      }}
                    >
                      <option disabled>Select Main Objective</option>
                      <option value="1">Reduce Diesel Use</option>
                      <option value="2">Reduce Electricity Bills</option>
                      <option value="3">Backup During Outages</option>
                    </select>
                  </div>
                </div>

                <button className="custom-btn other-section d-flex align-items-center justify-content-between w-100">
                  {" "}
                  Start Assessment
                  <img src={bttnarrowhite} alt="arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works py-4">
        <div className="container text-center">
          <h2 className="head-nor">How Solarvy Works</h2>
          <p className="subtitle ">
            A simple energy decision workflow built around problem-solving, not
            just calculations.
          </p>

          <div className="row g-4">
            {/* STEP 1 */}
            <div className="col-md-4">
              <div className="step text-center">
                <div className="icon-stack">
                  <img src={one} alt="step 1" className="badge-img" />
                  <img src={blur} alt="bg" className="blur-img" />
                  <img src={onee} alt="icon" className="main-icon" />
                </div>

                <h4 className="head-blue mt-3">Enter your energy data</h4>

                <p>
                  Use your electricity bill, standard appliances, or custom
                  equipment to estimate demand.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="col-md-4">
              <div className="step text-center">
                <div className="icon-stack">
                  <img src={two} alt="step 1" className="badge-img" />
                  <img src={blur} alt="bg" className="blur-img" />
                  <img src={twoo} alt="icon" className="main-icon" />
                </div>

                <h4 className="head-blue mt-3">
                  Solarvy analyses your energy profile
                </h4>

                <p>
                  Estimate solar size, battery storage, hybrid setup, and likely
                  value drivers.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="col-md-4">
              <div className="step text-center">
                <div className="icon-stack">
                  <img src={three} alt="step 1" className="badge-img" />
                  <img src={blur} alt="bg" className="blur-img" />
                  <img src={threee} alt="icon" className="main-icon" />
                </div>

                <h4 className="head-blue mt-3">Get your recommendation</h4>

                <p>
                  View system sizing, savings, payback, downloadable report, and
                  next-step options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className=" d-flex align-items-center bannar-see mt-4">
        <div className="container text-center mt-4 mb-3">
          <h1 className="title">See A Sample Energy Assessment</h1>
          <p className="subtitle">
            A simple energy decision workflow built around
            <br />
            problem-solving, not just calculations.
          </p>

          <div className="row g-4">
            <div className="col-md-6 ">
              <div className="card-box d-flex justify-content-between">
                <span>Location</span>
                <span className="text-muted text-color">Lagos, Nigeria</span>
              </div>

              <div className="card-box d-flex justify-content-between">
                <span>Property type</span>
                <span className="text-muted text-color">Hotel</span>
              </div>

              <div className="card-box d-flex justify-content-between">
                <span>Objective</span>
                <span className="text-muted text-color">Reduce diesel use</span>
              </div>

              <div className="card-box d-flex justify-content-between">
                <span>System type</span>
                <span className="text-muted text-color">
                  Hybrid solar + battery
                </span>
              </div>
            </div>

            <div className="col-md-6 ">
              <div className="row g-4">
                <div className="col-6">
                  <div className="card-boxs text-center">
                    <small>
                      {" "}
                      <img src={enery} alt="icon" className="graph-image" />
                      Solar PV
                    </small>
                    <h3>28 kWp</h3>
                    <p>Indicative size</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card-boxs text-center">
                    <small>
                      <img src={enery} alt="icon" className="graph-image" />
                      Battery
                    </small>
                    <h3>40 kWh</h3>
                    <p>Backup storage</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card-boxs text-center">
                    <small>
                      <img src={enery} alt="icon" className="graph-image" />
                      Annual savings
                    </small>
                    <h3>NGN 7.8m</h3>
                    <p>Indicative</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card-boxs text-center">
                    <small>
                      <img src={enery} alt="icon" className="graph-image" />
                      Payback
                    </small>
                    <h3>4.2 yrs</h3>
                    <p>Simple payback</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container built-cases text-center mt-4 mb-4">
        <h2 className="head-blue ">Built for real use cases</h2>
        <div className="steps mt-3">
          <div className="step-s">
            <div className="image-box">
              {" "}
              <img src={link} alt="icon" className="boxs-img" />
            </div>
            <h4 className="head-blue-left">Homes</h4>
            <p className="sub-left">
              Backup planning, appliance-based load estimation, and residential
              system sizing.
            </p>
          </div>

          <div className="step-s">
            <div className="image-box">
              {" "}
              <img src={linkone} alt="icon" className="boxs-img" />
            </div>
            <h4 className="head-blue-left">Hospitals</h4>
            <p className="sub-left">
              Critical load planning, resilience, and structured backup
              recommendations.
            </p>
          </div>

          <div className="step-s">
            <div className="image-box">
              {" "}
              <img src={linktwo} alt="icon" className="boxs-img" />
            </div>
            <h4 className="head-blue-left">Factories</h4>
            <p className="sub-left">
              Commercial and industrial energy sizing for larger, more valuable
              projects.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="hero-section">
          <div className="overlay-wrapper">
            <div className="overlay-card">
              <h1>Start With A Simple Assessment</h1>

              <p>
                Estimate the solar, battery, and hybrid system suited to your
                building, then download a structured report or request installer
                quotes.
              </p>

              <div className="d-flex justify-content-center align-items-center gap-3 mt-4 flex-wrap text-center">
                <button className="custom-btn other-section strst">
                  {" "}
                  Start Assessment
                  <img src={bttnarrowhite} alt="arrow" />
                </button>

                <a href="#" className="see-link">
                  See Sample Result
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
