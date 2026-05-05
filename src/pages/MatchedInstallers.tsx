import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/images/logo.png";
import logo from "../assets/images/logo.png";
import bttnarrow from "../assets/images/btton-arrow.png";
import "bootstrap/dist/css/bootstrap.min.css";
import donw from "../assets/images/icon/d11.svg";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const MATCHED_PROJECT_SUMMARY = [
  { label: "Project type", value: "Small business" },
  { label: "Location", value: "Lagos" },
  { label: "System size", value: "15–25 kWp" },
  { label: "Est. system total", value: "₦18m–₦24m" },
  { label: "Annual savings", value: "₦5.2m" },
  { label: "Payback", value: "3.8–4.6 yrs" },
] as const;

function MatchedInstallers() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const handleToggle = () => {
    if (window.innerWidth < 768) {
      setOpen(!open);
    }
  };
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
      <div className="full-body-color">
        <section className="hero d-flex align-items-center ass-bannr py-4">
          <div className="overlay"></div>

          <div className="container-fluid px-lg-4 px-3 position-relative z-1 menu-div ass-div">
            <div className="row align-items-start text-divs gx-3 gx-lg-4">
              <div className="solar-top-navbar">
                <nav
                  className={`navbar navbar-expand-lg  ${scrolled ? "scrolled" : ""}`}
                >
                  <Link className="navbar-brand" to="/">
                    <img src={logo} alt="logo" className="solar-logo-img" />
                  </Link>

                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleToggle}
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div
                    className={`collapse navbar-collapse ${open ? "show" : ""}`}
                  >
                    <ul className="navbar-nav ms-auto align-items-lg-center solar-nav-links">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="/how-it-works"
                          onClick={() => setOpen(false)}
                        >
                          How It Works
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="/sample-results">
                          Sample Results
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="/who-its-for">
                          Who It's For
                        </Link>
                      </li>

                      <li className="nav-item">
                        <button
                          className="solar-nav-btn"
                          onClick={() => navigate("/start-assesement")}
                        >
                          Start Assessment
                          <img src={bttnarrow} alt="arrow" />
                        </button>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="nav-bottom-section row align-items-center">
                <div className="col-12 col-lg-12 text-white ">
                  <h1 className="bannr-text display-5 ass-page ">
                    Your matched installers
                  </h1>

                  <p className="bannr-text-s text-light mt-2 mb-5 ass-page-two">
                    These installers match your project using your location,
                    system size, project cost, and the savings and payback
                    calculated from your results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid px-lg-4 px-3 py-3">
          <div className="row g-4 align-items-start">
            <div className="col-lg-8 ">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                <div>
                  <h5 className="title-main mb-1">Installer shortlist</h5>
                  <p className="sub-text mb-0 mobile-view-match">
                    Matched to your size, cost, timing, and energy setup
                  </p>
                </div>

                <div className="result-badge">Top 5 results</div>
              </div>

              <div className="installer-card p-3">
                <div className="d-flex justify-content-between align-items-start flex-wrap">
                  <div className="d-flex gap-3 flex-grow-1">
                    <div className="score-box-match">76</div>

                    <div className="content-area">
                      <h6 className="company-name mb-1">PrimeVolt Energy</h6>

                      <p className="location-text mb-2">
                        Lagos • Normal • SME’s 15–40 kWp projects
                      </p>

                      <div className="badge-row mb-3">
                        <span className="badge-custom green">
                          <i className="bi bi-check-circle me-1"></i> Matches
                          most (70%)
                        </span>
                        <span className="badge-custom-blue">Solar battery</span>
                        <span className="badge-custom-blue">
                          Fits your range
                        </span>
                        <span className="badge-custom">
                          Typical budget ₦18m–₦28m
                        </span>
                      </div>

                      <button className="btn-primary-custom-match d-block d-md-none mb-2">
                        Request intro
                      </button>

                      <a href="#" className="link-view d-block">
                        Get Review First
                      </a>
                    </div>
                  </div>

                  <div className="d-none d-md-block">
                    <button className="btn-primary-custom-match">
                      Request intro
                    </button>
                  </div>
                </div>
              </div>

              <div className="installer-card p-3">
                <div className="d-flex justify-content-between align-items-start flex-wrap">
                  <div className="d-flex gap-3 flex-grow-1">
                    <div className="score-box-match green-bg">76</div>

                    <div className="content-area">
                      <h6 className="company-name mb-1">GreenGrid Power</h6>

                      <p className="location-text mb-2">
                        South West Nigeria • Rooftop business systems • 10–120
                        kWp
                      </p>

                      <div className="badge-row mb-3">
                        <span className="badge-custom green">
                          <i className="bi bi-check-circle"></i> Matches most
                          (80%)
                        </span>
                        <span className="badge-custom-blue">
                          Commercial install
                        </span>
                        <span className="badge-custom-blue">
                          Cost effective
                        </span>
                        <span className="badge-custom">
                          Typical budget ₦14m–₦24m
                        </span>
                      </div>

                      <button className="btn-primary-custom-match d-block d-md-none mb-2">
                        Request intro
                      </button>

                      <a href="#" className="link-view d-block">
                        Get Review/Edit
                      </a>
                    </div>
                  </div>

                  <div className="d-none d-md-block">
                    <button className="btn-primary-custom-match">
                      Request intro
                    </button>
                  </div>
                </div>
              </div>

              <div className="installer-card p-3">
                <div className="d-flex justify-content-between align-items-start flex-wrap">
                  <div className="d-flex gap-3 flex-grow-1">
                    <div className="score-box-match orange-bg">76</div>

                    <div className="content-area">
                      <h6 className="company-name mb-1">NovaSun Systems</h6>

                      <p className="location-text mb-2">
                        Lagos & Abuja • SMEs & hospitality • 8–60 kWp
                      </p>

                      <div className="badge-row mb-3">
                        <span className="badge-custom green">
                          <i className="bi bi-check-circle"></i> Matches most
                          (70%)
                        </span>
                        <span className="badge-custom-blue">
                          Solar + battery
                        </span>
                        <span className="badge-custom-blue">
                          Storage capable
                        </span>
                        <span className="badge-custom">
                          Typical budget ₦18m–₦28m
                        </span>
                      </div>

                      <button className="btn-primary-custom-match d-block d-md-none mb-2">
                        Request intro
                      </button>

                      <a href="#" className="link-view d-block">
                        Get Review/Edit
                      </a>
                    </div>
                  </div>

                  <div className="d-none d-md-block">
                    <button className="btn-primary-custom-match">
                      Request intro
                    </button>
                  </div>
                </div>
              </div>

              <div className="installer-card p-3">
                <div className="d-flex justify-content-between align-items-start flex-wrap">
                  <div className="d-flex gap-3 flex-grow-1">
                    <div className="score-box-match orange-bg">76</div>

                    <div className="content-area">
                      <h6 className="company-name mb-1">NovaSun Systems</h6>

                      <p className="location-text mb-2">
                        Lagos & Abuja • SMEs & hospitality • 8–60 kWp
                      </p>

                      <div className="badge-row mb-3">
                        <span className="badge-custom green">
                          <i className="bi bi-check-circle"></i> Matches most
                          (70%)
                        </span>
                        <span className="badge-custom-blue">
                          Solar + battery
                        </span>
                        <span className="badge-custom-blue">
                          Storage capable
                        </span>
                        <span className="badge-custom">
                          Typical budget ₦18m–₦28m
                        </span>
                      </div>

                      <button className="btn-primary-custom-match d-block d-md-none mb-2">
                        Request intro
                      </button>

                      <a href="#" className="link-view d-block">
                        Get Review/Edit
                      </a>
                    </div>
                  </div>

                  <div className="d-none d-md-block">
                    <button className="btn-primary-custom-match">
                      Request intro
                    </button>
                  </div>
                </div>
              </div>

              <div className="installer-card p-3">
                <div className="d-flex justify-content-between align-items-start flex-wrap">
                  <div className="d-flex gap-3 flex-grow-1">
                    <div className="score-box-match orange-bg">76</div>

                    <div className="content-area">
                      <h6 className="company-name mb-1">NovaSun Systems</h6>

                      <p className="location-text mb-2">
                        Lagos & Abuja • SMEs & hospitality • 8–60 kWp
                      </p>

                      <div className="badge-row mb-3">
                        <span className="badge-custom green">
                          <i className="bi bi-check-circle"></i> Matches most
                          (70%)
                        </span>
                        <span className="badge-custom">Solar + battery</span>
                        <span className="badge-custom">Storage capable</span>
                        <span className="badge-custom">
                          Typical budget ₦18m–₦28m
                        </span>
                      </div>

                      <button className="btn-primary-custom-match d-block d-md-none mb-2">
                        Request intro
                      </button>

                      <a href="#" className="link-view d-block">
                        Get Review/Edit
                      </a>
                    </div>
                  </div>

                  <div className="d-none d-md-block">
                    <button className="btn-primary-custom-match">
                      Request intro
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="match-snapshot mb-4"
                role="region"
                aria-labelledby="match-snapshot-heading"
              >
                <div className="match-snapshot__header">
                  <h2
                    id="match-snapshot-heading"
                    className="match-snapshot__title"
                  >
                    Your project snapshot
                  </h2>
                  <p className="match-snapshot__hint">
                    These details come from your assessment and shape how we rank
                    installers.
                  </p>
                </div>
                <ul className="match-snapshot__list">
                  {MATCHED_PROJECT_SUMMARY.map((item) => (
                    <li key={item.label} className="match-snapshot__row">
                      <span className="match-snapshot__label">{item.label}</span>
                      <span className="match-snapshot__value">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="side-card">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="score-box-match-right ">81</div>
                  <div className="match-box text-center">
                    <h6 className="company-name-m mb-0">Strong match</h6>
                  </div>
                </div>
                <p className="sub-text">
                  Scored by project fit, delivery ability, and budget alignment.
                </p>

                <div className="tag-row">
                  <span className="badge-custom">Lagos coverage</span>
                  <span className="badge-custom">Fits budget</span>
                  <span className="badge-custom">Battery capable</span>
                  <span className="badge-custom">SME projects</span>
                </div>
              </div>

              <div className="side-card need-help">
                <h6 className="company-name-m">
                  <i className="bi bi-shield"></i> Need help choosing?
                </h6>

                <div className="review-card">
                  <p className="review-text">
                    Independent Installer Review <br />
                    We check the quoted cost, the system size, the battery
                    option, and the savings claim against your results.
                  </p>

                  <h2 className="review-price">₦250k+</h2>
                </div>

                <button className="btn-orange w-100 mt-3">
                  Get expert review
                </button>
              </div>

              <div className="quote-card-match mb-4">
                <div className="quote-header">
                  <span className="upload-icon">
                    <img src={donw} alt="logo" />
                  </span>
                  <h6>Already have a quote?</h6>
                </div>

                <p className="quote-subtext">
                  Upload the quote you already received so SolarVy can compare
                  it to the cost and payback estimate from your results.
                </p>

                <div className="upload-box">
                  <div className="upload-inner">
                    <span className="upload-icon">
                      <img src={donw} alt="logo" />
                    </span>
                    <p className="upload-title">Upload quote</p>
                    <p className="upload-desc">PDF, image, or summary</p>
                  </div>
                </div>

                <button className="upload-btn">Upload file</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MatchedInstallers;
