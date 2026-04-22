import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/images/logo.png";
import logo from "../assets/images/logo.png";
import bttnarrow from "../assets/images/btton-arrow.png";
import "bootstrap/dist/css/bootstrap.min.css";



import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function MatchedInstallers() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
                <img src={logo} alt="logo" className="mbile-size" />
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
                      to=""
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

          <div className="row align-items-center text-divs top-space">
            <div className="col-lg-8 text-white mb-3 mb-lg-0">
              <h1 className="bannr-text display-5  mt-3 mb-3">
              Your matched installers
              </h1>

              <p className="bannr-text-s text-light mt-3 mb-3">
              These installers fit your project better based on your location in Nigeria, your expected <br />
               system size, your estimated project cost, and the savings and payback calculated in your  <br />
               results.  </p>
            </div>
          </div>
        </div>
      </section>


      
      <section className="container my-2">
        <div className="row g-4 align-items-start">
<div className="container my-4">
  <div className="row g-3">

    {/* Card 1 */}
    <div className="col-6 col-md-4 col-lg">
      <div className="info-card d-flex align-items-center gap-2">
        <i className="bi bi-briefcase info-icon"></i>
        <div>
          <p className="info-label">PROJECT TYPE</p>
          <h6 className="info-value">Small business</h6>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-6 col-md-4 col-lg">
      <div className="info-card d-flex align-items-center gap-2">
        <i className="bi bi-geo-alt info-icon"></i>
        <div>
          <p className="info-label">LOCATION</p>
          <h6 className="info-value">Lagos</h6>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-6 col-md-4 col-lg">
      <div className="info-card d-flex align-items-center gap-2">
        <i className="bi bi-lightning-charge info-icon"></i>
        <div>
          <p className="info-label">SYSTEM SIZE</p>
          <h6 className="info-value">15–25 kWp</h6>
        </div>
      </div>
    </div>

    {/* Card 4 */}
    <div className="col-6 col-md-4 col-lg">
      <div className="info-card d-flex align-items-center gap-2">
        <i className="bi bi-currency-dollar info-icon"></i>
        <div>
          <p className="info-label">ESTIMATED COST</p>
          <h6 className="info-value">₦18m–₦24m</h6>
        </div>
      </div>
    </div>

    {/* Card 5 */}
    <div className="col-6 col-md-4 col-lg">
      <div className="info-card d-flex align-items-center gap-2">
        <i className="bi bi-graph-up-arrow info-icon"></i>
        <div>
          <p className="info-label">ANNUAL SAVINGS</p>
          <h6 className="info-value">₦5.2m</h6>
        </div>
      </div>
    </div>

    {/* Card 6 */}
    <div className="col-6 col-md-4 col-lg">
      <div className="info-card d-flex align-items-center gap-2">
        <i className="bi bi-clock-history info-icon"></i>
        <div>
          <p className="info-label">PAYBACK</p>
          <h6 className="info-value">3.8–4.6 yrs</h6>
        </div>
      </div>
    </div>

  </div>

  {/* Bottom Note */}
  <div className="info-note mt-3">
    💡 These installers are matched to projects within this size and budget range,
    so the shortlist still feels connected to the financial outcome shown on your results page.
  </div>
</div>
        </div>
      </section>

      <section className="container my-2">
        <div className="row g-4 align-items-start">
         
    {/* LEFT SIDE */}
    <div className="col-lg-8">

      <h5 className="title-main">Installer shortlist</h5>
      <p className="sub-text">Matched to your size, cost, timing, and energy setup</p>

      {/* CARD 1 */}
      <div className="installer-card">
        <div className="d-flex justify-content-between">

          <div className="d-flex gap-3">
            <div className="score-box">76</div>

            <div>
              <h6 className="company-name">PrimeVolt Energy</h6>
              <p className="location-text">Lagos • Normal • SME’s 15–40 kWp projects</p>

              <div className="badge-row">
                <span className="badge-custom green"><i className="bi bi-check-circle"></i> Matches most (70%)</span>
                <span className="badge-custom">Solar battery</span>
                <span className="badge-custom">Fits your range</span>
                <span className="badge-custom">Typical budget ₦18m–₦28m</span>
              </div>

              <a href="#" className="link-view">Get Review/Edit</a>
            </div>
          </div>

          <button className="btn-primary-custom-match">Request intro</button>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="installer-card">
        <div className="d-flex justify-content-between">

          <div className="d-flex gap-3">
            <div className="score-box green-bg">76</div>

            <div>
              <h6 className="company-name">GreenGrid Power</h6>
              <p className="location-text">South West Nigeria • Rooftop business systems • 10–120 kWp</p>

              <div className="badge-row">
                <span className="badge-custom green"><i className="bi bi-check-circle"></i> Matches most (80%)</span>
                <span className="badge-custom">Commercial install</span>
                <span className="badge-custom">Cost effective</span>
                <span className="badge-custom">Typical budget ₦14m–₦24m</span>
              </div>

              <a href="#" className="link-view">See Previous Options</a>
            </div>
          </div>

          <button className="btn-primary-custom-match">Request intro</button>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="installer-card">
        <div className="d-flex justify-content-between">

          <div className="d-flex gap-3">
            <div className="score-box orange-bg">78</div>

            <div>
              <h6 className="company-name">NovaSun Systems</h6>
              <p className="location-text">Lagos & Abuja • SMEs & hospitality • 8–60 kWp</p>

              <div className="badge-row">
                <span className="badge-custom green"><i className="bi bi-check-circle"></i> Matches most (70%)</span>
                <span className="badge-custom">Solar + battery</span>
                <span className="badge-custom">Storage capable</span>
                <span className="badge-custom">Typical budget ₦18m–₦28m</span>
              </div>

              <a href="#" className="link-view">See Previous Options</a>
            </div>
          </div>

          <button className="btn-primary-custom-match">Request intro</button>
        </div>
      </div>

    </div>



       {/* RIGHT SIDE */}
    <div className="col-lg-4">

      <div className="side-card">
        <div className="d-flex align-items-center gap-2 mb-2">
          <div className="icon-circle green"><i className="bi bi-currency-dollar"></i></div>
          <h6 className="side-title">Strong match</h6>
        </div>
        <p className="side-text">Scored by project fit, delivery ability, and budget alignment.</p>

        <div className="tag-row">
          <span className="tag">Lagos coverage</span>
          <span className="tag">Fits budget</span>
          <span className="tag">Battery capable</span>
        </div>

        <a href="#" className="link-view">See projects</a>
      </div>

      <div className="side-card">
        <h6 className="side-title">Need help choosing?</h6>
        <p className="side-text">Review options clearly and compare.</p>
        <h5 className="price">₦250k+</h5>
        <button className="btn-orange w-100">Get independent review</button>
      </div>

      <div className="side-card">
        <h6 className="side-title">Already have a quote?</h6>
        <div className="upload-box">
          <i className="bi bi-upload"></i>
          <p>Upload quote</p>
        </div>
        <button className="btn-outline w-100">Upload file</button>
      </div>



      <div className="mt-2 mb-3">
        <div className="flow-card">
  <h5 className="flow-title">Why this flow feels connected</h5>

  <div className="flow-item">
    <div className="check-icon">✔</div>
    <div className="flow-text">
      <h6>Cost is carried forward</h6>
      <p>Users still see estimated installation cost, savings, and payback.</p>
    </div>
  </div>

  <div className="flow-item">
    <div className="check-icon">✔</div>
    <div className="flow-text">
      <h6>Installers relate to that budget</h6>
      <p>Each shortlist card shows typical project budget or cost fit.</p>
    </div>
  </div>

  <div className="flow-item">
    <div className="check-icon">✔</div>
    <div className="flow-text">
      <h6>Review compares quote to results</h6>
      <p>So the paid step feels logical, not random.</p>
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

export default MatchedInstallers;
