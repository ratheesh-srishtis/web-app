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
                      <div className="next-card">
                        <div className="badge-box">1</div>

                        <div className="card-content">
                          <h6 className="title">
                            <strong className="rang-heads">
                              Enter your details
                            </strong>
                          </h6>

                          <p className="desc">
                            Provide your location, electricity bill, appliances,
                            or custom equipment so Solarvy understands your
                            building and energy usage.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-3">
                      <div className="next-card">
                        <div className="badge-box">2</div>

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
                      <div className="next-card">
                        <div className="badge-box">3</div>

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
                      <div className="next-card">
                        <div className="badge-box">4</div>

                        <div className="card-content">
                          <h6 className="title">
                            <i className="bi bi-grid me-2"></i>
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

              <div className="d-flex align-items-center mb-4">
                <div className="p-4 shadow-sm rounded-4 ass-first mt-4">
                  <div className="icon-box-maony me-3">
                    <img src={money} alt="icon" />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1 rang-head">
                      Financial Summary
                    </h5>
                    <small className="text-muted">
                      Understand the commercial side quickly, without technical
                      jargon.
                    </small>
                  </div>
                  <div className="row">
                    {/* LEFT SIDE */}
                    <div className="col-md-6 border-end">
                      <div className="summary-row d-flex justify-content-between">
                        <span className="rang-name">Estimated system cost</span>
                        <strong className="rang-head">N7.8m</strong>
                      </div>

                      <div className="summary-row d-flex justify-content-between">
                        <span className="rang-name">Gross annual savings</span>
                        <strong className="rang-head">N2.0m</strong>
                      </div>

                      <div className="summary-row d-flex justify-content-between">
                        <span className="rang-name">Annual O&M allowance</span>
                        <strong className="rang-head">N0.2m</strong>
                      </div>

                      <div className="summary-row d-flex justify-content-between">
                        <span className="rang-name">Net annual savings</span>
                        <strong className="rang-head">N1.8m</strong>
                      </div>

                      <div className="summary-row d-flex justify-content-between border-0">
                        <span className="rang-name">Simple payback</span>
                        <strong className="rang-head">4.3 years</strong>
                      </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-md-6 ps-md-4 mt-4 mt-md-0">
                      <h6 className="left-rang fw-bold mb-3">
                        % Energy Impact
                      </h6>

                      {/* Solar */}
                      <div className="mb-3">
                        <div className="d-flex justify-content-between">
                          <span className="rang-name">Solar share</span>
                          <strong className="per-rang">68%</strong>
                        </div>
                        <div className="progress custom-progress">
                          <div
                            className="progress-bar bg-danger"
                            style={{ width: "68%" }}
                          ></div>
                        </div>
                      </div>

                      {/* Grid */}
                      <div className="mb-3">
                        <div className="d-flex justify-content-between">
                          <span className="rang-name">Grid offset</span>
                          <strong className="per-rang">42%</strong>
                        </div>
                        <div className="progress custom-progress">
                          <div
                            className="progress-bar bg-primary"
                            style={{ width: "42%" }}
                          ></div>
                        </div>
                      </div>

                      {/* Diesel */}
                      <div>
                        <div className="d-flex justify-content-between">
                          <span className="rang-name">Diesel reduction</span>
                          <strong className="per-rang">57%</strong>
                        </div>
                        <div className="progress custom-progress">
                          <div
                            className="progress-bar bg-success"
                            style={{ width: "57%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="p-4 shadow-sm rounded-4 ass-first mt-4">
                  <div className="icon-box-maony me-3">
                    <img src={money} alt="icon" />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1 rang-head">
                      Financial Summary
                    </h5>
                    <small className="text-muted">
                      Understand the commercial side quickly, without technical
                      jargon.
                    </small>
                  </div>
                  <div className="row">
                    {/* LEFT SIDE */}
                    <div className="col-md-6 border-end">
                      <div className="summary-row d-flex justify-content-between">
                        <span className="rang-name">Estimated system cost</span>
                        <strong className="rang-head">N7.8m</strong>
                      </div>

                      <div className="summary-row d-flex justify-content-between">
                        <span className="rang-name">Gross annual savings</span>
                        <strong className="rang-head">N2.0m</strong>
                      </div>

                      <div className="summary-row d-flex justify-content-between">
                        <span className="rang-name">Annual O&M allowance</span>
                        <strong className="rang-head">N0.2m</strong>
                      </div>

                      <div className="summary-row d-flex justify-content-between">
                        <span className="rang-name">Net annual savings</span>
                        <strong className="rang-head">N1.8m</strong>
                      </div>

                      <div className="summary-row d-flex justify-content-between border-0">
                        <span className="rang-name">Simple payback</span>
                        <strong className="rang-head">4.3 years</strong>
                      </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-md-6 ps-md-4 mt-4 mt-md-0">
                      <h6 className="left-rang fw-bold mb-3">
                        % Energy Impact
                      </h6>

                      {/* Solar */}
                      <div className="mb-3">
                        <div className="d-flex justify-content-between">
                          <span className="rang-name">Solar share</span>
                          <strong className="per-rang">68%</strong>
                        </div>
                        <div className="progress custom-progress">
                          <div
                            className="progress-bar bg-danger"
                            style={{ width: "68%" }}
                          ></div>
                        </div>
                      </div>

                      {/* Grid */}
                      <div className="mb-3">
                        <div className="d-flex justify-content-between">
                          <span className="rang-name">Grid offset</span>
                          <strong className="per-rang">42%</strong>
                        </div>
                        <div className="progress custom-progress">
                          <div
                            className="progress-bar bg-primary"
                            style={{ width: "42%" }}
                          ></div>
                        </div>
                      </div>

                      {/* Diesel */}
                      <div>
                        <div className="d-flex justify-content-between">
                          <span className="rang-name">Diesel reduction</span>
                          <strong className="per-rang">57%</strong>
                        </div>
                        <div className="progress custom-progress">
                          <div
                            className="progress-bar bg-success"
                            style={{ width: "57%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="d-flex gap-3 flex-wrap mt-3">
              {/* Primary Button */}
              <button className="btn-primary-custom">
                <span className="icon-sun">
                  <img src={donw} alt="logo" />
                </span>
                <span>Download Report</span>
                <span className="arrows">
                  <img src={save} alt="icon" />
                </span>
              </button>

              {/* Outline Button */}
              <button className="btn-outline-custom2">
                <span className="icon-sun">
                  <img src={save} alt="icon" />
                </span>
                <span>Request Installer Quotes</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowItWorks;
