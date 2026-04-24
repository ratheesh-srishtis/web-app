import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/images/logo.png";
import logo from "../assets/images/logo.png";
import bttnarrow from "../assets/images/btton-arrow.png";
import "bootstrap/dist/css/bootstrap.min.css";

import buletwo from "../assets/images/icon/bule2.svg";

import Sun from "../assets/images/icon/sun-red.svg";
import halfSun from "../assets/images/icon/half-s.svg";
import batt from "../assets/images/icon/batt.svg";
import money from "../assets/images/icon/money-bag.svg";
import imp from "../assets/images/icon/imporent.svg";
import donw from "../assets/images/icon/d11.svg";
import save from "../assets/images/icon/saves.svg";
import qut from "../assets/images/icon/qut.svg";

import whitearrow from "../assets/images/icon/w-arror.svg";
import { useNavigate } from "react-router-dom";
import { useEffect} from "react";
import { Battery } from "lucide-react";

function HowItWorks() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();


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
      <section className="hero d-flex align-items-center ass-bannr">
        <div className="overlay"></div>
        <div className="container position-relative z-1 menu-div ass-div">
          {/* Navbar */}
          <nav className={`navbar navbar-expand-md ${scrolled ? "scrolled" : ""}`}>
            <div className="container-fluid">
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
              <button
                className="navbar-toggler"
                type="button"
                onClick={() => setOpen(!open)}
              >
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
                      className="custom-btn"
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

        <div className="row align-items-center text-divs top-space ">
            <div className="col-lg-12 text-white mb-3 mb-lg-0">
              <h1 className="bannr-text display-5  mt-3 mb-3">
                Get a tailored energy solution in minutes
              </h1>

              <p className="bannr-text-second text-light mt-3 mb-3">
                Solarvy turns your bill, appliance data, or custom equipment
                inputs into a clear energy plan. It combines technical and
                financial logic so users can understand what system they need
                and what value it is likely to deliver.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-4">
        <div className="row g-4 align-items-start">
          {/* ✅ LEFT SIDE */}
          <div className="col-lg-12">
            {/* Header */}
            <div className="first-secion mb-2">
              <div className="process-section text-center">
                <h2 className="process-title">The Process</h2>
                <p className="process-subtitle">
                  Understand the full journey at a glance — from your first
                  input
                  <br />
                  to a clear energy plan.
                </p>
              </div>
              {/* Cards */}
              <div className="row g-3 mb-4">
                <div className="container my-4">
                  <div className="row g-4">
                    {/* Card 1 */}
                    <div className="col-md-3">
                      <div className="next-card text-center text-md-start">
                        <div className="badge-box mx-auto mx-md-0 mb-1">1</div>

                        <div className="card-content ">
                          <h6 className="title">
                            <strong className="rang-heads">
                              Enter your details
                            </strong>
                          </h6>

                          <p className="desc mt-1">
                            Provide your location, electricity bill, appliances,
                            or custom equipment so Solarvy understands your
                            building and energy usage.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-3">
                     <div className="next-card text-center text-md-start">
                        <div className="badge-box mx-auto mx-md-0 mb-1">2</div>

                        <div className="card-content">
                          <h6 className="title">
                            <strong className="rang-heads">
                              Analyse the energy environment
                            </strong>
                          </h6>

                          <p className="desc">
                            Solarvy models demand, local solar potential, system
                            performance, and the likely cost implications of
                            different energy paths.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-3">
                    <div className="next-card text-center text-md-start">
                        <div className="badge-box mx-auto mx-md-0 mb-1">3</div>

                        <div className="card-content">
                          <h6 className="title">
                            <strong className="rang-heads">
                              Compare system options
                            </strong>
                          </h6>

                          <p className="desc">
                            See practical strategy paths such as solar + grid,
                            solar + battery, or hybrid setups with generator
                            support where needed.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card 4 */}
                    <div className="col-md-3">
                   <div className="next-card text-center text-md-start">
                        <div className="badge-box mx-auto mx-md-0 mb-1">1</div>

                        <div className="card-content">
                          <h6 className="title">
                            
                            <strong className="rang-heads">
                              Get your plan
                            </strong>
                          </h6>

                          <p className="desc">
                            Receive system sizing, indicative cost, savings,
                            payback, and next steps including report download or
                            installer quotes.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="second section mt-2">
              <div className="process-section text-center">
                <h2 className="process-title">
                  What happens behind the scenes
                </h2>
                <p className="process-subtitle">
                  Powerful modelling and financial logic work together to
                  deliver
                  <br />
                  actionable results.
                </p>
              </div>

              
              <div className="row d-flex">

              <div className="col-12 col-md-6">
                <div className="p-4 shadow-sm rounded-4 ass-first mt-4">
                  <div className="icon-box-maony me-3 mb-3">
                    <img src={money} alt="icon" />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2 rang-head">
                     Technical modelling Financial Summary
                    </h5>
                    <small className="text-muted">
                     Solarvy uses structured energy logic to estimate system size, expected generation, battery support, and performance under real operating conditions.
                    </small>
                  </div>
                 <div className="feature-list">
  <div className="feature-item">
    <span className="dot-blue"></span>
    <span className="dots-texts">Bill-based or appliance-based estimation</span>
  </div>

  <div className="feature-item">
    <span className="dot-blue"></span>
    <span className="dots-texts">Solar and hybrid system sizing</span>
  </div>

  <div className="feature-item">
    <span className="dot-blue"></span>
    <span className="dots-texts">Simple energy strategy comparison</span>
  </div>
</div>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="p-4 shadow-sm rounded-4 ass-first mt-4">
                  <div className="icon-box-maony me-3 mb-3">
                    <img src={money} alt="icon" />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2 rang-head">
                      Financial outputs
                    </h5>
                    <small className="text-muted">
                     The platform translates technical results into decision-friendly outputs so users can understand whether a solution is <br />
                     commercially attractive.
                    </small>
                  </div>
                 <div className="feature-list-orange">
  <div className="feature-item">
    <span className="dot-orange"></span>
    <span className="dots-texts">Indicative system cost</span>
  </div>

  <div className="feature-item">
    <span className="dot-orange"></span>
    <span className="dots-texts">Estimated savings</span>
  </div>

  <div className="feature-item">
    <span className="dot-orange"></span>
    <span className="dots-texts">Simple payback and value indicators</span>
  </div>
</div>
                </div>
              </div>
              </div>
            </div>



               <div className="third section mt-4">
              <div className="process-section text-center">
                <h2 className="process-title">
                 Built for real-world energy conditions
                </h2>
                <p className="process-subtitle">
              Solarvy is not just another basic solar calculator — it's 
               <br />
               designed for the realities of West African energy.

                </p>
              </div>

               <div className="row d-flex">

              <div className="col-4">
                <div className="p-4 shadow-sm rounded-4 ass-first mt-4">
                  <div className="icon-box-sun mb-3">
                        <img src={Sun} alt="icon" />
                      </div>
                  <div>
                    <h5 className="fw-bold mb-2 rang-head">
                    Grid + generator + solar logic
                    </h5>
                    <small className="text-muted">
                    Designed for environments where power is not always stable and hybrid systems are a practical necessity. </small>
                  </div>
        
                </div>
              </div>

              <div className="col-4">
                <div className="p-4 shadow-sm rounded-4 ass-first mt-4">
                 <div className="icon-box-battery mb-3">
                        <img src={batt} alt="icon" />
                      </div>
                  <div>
                    <h5 className="fw-bold mb-2 rang-head">
                     Homes and businesses
                    </h5>
                    <small className="text-muted">
                    Useful for residential users, SMEs, and facilities with more demanding energy and reliability needs.
                    </small>
                  </div>
           
                </div>
              </div>

              <div className="col-4">
                <div className="p-4 shadow-sm rounded-4 ass-first mt-4">
                    <div className="icon-box-act mb-3">
                        <img src={halfSun} alt="icon" />
                      </div>
                  <div>
                    <h5 className="fw-bold mb-2 rang-head">
                      Clear decision support
                    </h5>
                    <small className="text-muted">
                   Moves beyond simple panel-counting to show practical options, cost implications, and next steps.
                    </small>
                  </div>
           
                </div>
              </div>
              </div>
              </div>

          
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowItWorks;
