import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/images/logo.png";
import logo from "../assets/images/logo.png";
import bttnarrow from "../assets/images/btton-arrow.png";
import "bootstrap/dist/css/bootstrap.min.css";
import donw from "../assets/images/icon/d11.svg";


import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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


              <nav className={`navbar navbar-expand-md ${scrolled ? "scrolled" : ""}`}>
                <div className="container-fluid px-lg-4 px-3">

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


                  <button onClick={handleToggle} className="navbar-toggler">
                    <span className="navbar-toggler-icon"></span>
                  </button>


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
              <div className="nav-bottom-section row align-items-center">
                <div className="col-12 col-lg-12 text-white ">
                  <h1 className="bannr-text display-5 ass-page ">
                    Your matched installers
                  </h1>

                  <p className="bannr-text-s text-light mt-2 mb-5 ass-page-two">
                    These installers match your project using your location, system size, project cost, and the savings and payback calculated from your results.
                  </p>


                </div>


              </div>
            </div>
          </div>
        </section>



        <section className="container py-4">
          <div className="row g-4 align-items-start">
            <div className="container my-4">
              <div className="row g-3">


                <div className="col-6 col-md-4 col-lg">
                  <div className="info-card d-flex align-items-center gap-2">
                    <i className="bi bi-briefcase info-icon"></i>
                    <div>
                      <p className="info-label">PROJECT TYPE</p>
                      <h6 className="info-value">Small business</h6>
                    </div>
                  </div>
                </div>


                <div className="col-6 col-md-4 col-lg">
                  <div className="info-card d-flex align-items-center gap-2">
                    <i className="bi bi-geo-alt info-icon"></i>
                    <div>
                      <p className="info-label">LOCATION</p>
                      <h6 className="info-value">Lagos</h6>
                    </div>
                  </div>
                </div>


                <div className="col-6 col-md-4 col-lg">
                  <div className="info-card d-flex align-items-center gap-2">
                    <i className="bi bi-lightning-charge info-icon"></i>
                    <div>
                      <p className="info-label">SYSTEM SIZE</p>
                      <h6 className="info-value">15–25 kWp</h6>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg">
                  <div className="info-card d-flex align-items-center gap-2">
                    <i className="bi bi-currency-dollar info-icon"></i>
                    <div>
                      <p className="info-label">ESTIMATED COST</p>
                      <h6 className="info-value">₦18m–₦24m</h6>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg">
                  <div className="info-card d-flex align-items-center gap-2">
                    <i className="bi bi-graph-up-arrow info-icon"></i>
                    <div>
                      <p className="info-label">ANNUAL SAVINGS</p>
                      <h6 className="info-value">₦5.2m</h6>
                    </div>
                  </div>
                </div>


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


              <div className="info-note mt-3">
                💡 These installers are matched to projects within this size and budget range,
                so the shortlist still feels connected to the financial outcome shown on your results page.
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="row g-4 align-items-start">


            <div className="col-lg-8 ">

              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">


                <div>
                  <h5 className="title-main mb-1">Installer shortlist</h5>
                  <p className="sub-text mb-0 mobile-view-match">
                    Matched to your size, cost, timing, and energy setup
                  </p>
                </div>


                <div className="result-badge">
                  Top 5 results
                </div>

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
                          <i className="bi bi-check-circle me-1"></i> Matches most (70%)
                        </span>
                        <span className="badge-custom-blue">Solar battery</span>
                        <span className="badge-custom-blue">Fits your range</span>
                        <span className="badge-custom">Typical budget ₦18m–₦28m</span>
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

                    <div className="score-box-match green-bg">76</div>

                    <div className="content-area">
                      <h6 className="company-name mb-1">GreenGrid Power</h6>

                      <p className="location-text mb-2">
                        South West Nigeria • Rooftop business systems • 10–120 kWp
                      </p>

                      <div className="badge-row mb-3">
                        <span className="badge-custom green"><i className="bi bi-check-circle"></i> Matches most (80%)</span>
                        <span className="badge-custom-blue">Commercial install</span>
                        <span className="badge-custom-blue">Cost effective</span>
                        <span className="badge-custom">Typical budget ₦14m–₦24m</span>
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
                        <span className="badge-custom green"><i className="bi bi-check-circle"></i> Matches most (70%)</span>
                        <span className="badge-custom-blue">Solar + battery</span>
                        <span className="badge-custom-blue">Storage capable</span>
                        <span className="badge-custom">Typical budget ₦18m–₦28m</span>
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
                        <span className="badge-custom green"><i className="bi bi-check-circle"></i> Matches most (70%)</span>
                        <span className="badge-custom-blue">Solar + battery</span>
                        <span className="badge-custom-blue">Storage capable</span>
                        <span className="badge-custom">Typical budget ₦18m–₦28m</span>
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
                        <span className="badge-custom green"><i className="bi bi-check-circle"></i> Matches most (70%)</span>
                        <span className="badge-custom">Solar + battery</span>
                        <span className="badge-custom">Storage capable</span>
                        <span className="badge-custom">Typical budget ₦18m–₦28m</span>
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

              <div className="side-card">
                <div className="d-flex align-items-center gap-2 mb-2">

                  <div className="score-box-match-right ">81</div>
                  <div className="match-box text-center">
                    <p className="sub-text-match mb-1">Top fit example</p>

                    <h6 className="company-name-m mb-0">Strong match</h6>
                  </div>
                </div>
                <p className="sub-text">Scored by project fit, delivery ability, and budget alignment.</p>


                <div className="tag-row">
                  <span className="badge-custom">Lagos coverage</span>
                  <span className="badge-custom">Fits budget</span>
                  <span className="badge-custom">Battery capable</span>
                  <span className="badge-custom">SME projects</span>
                </div>

              </div>

              <div className="side-card need-help">
                <h6 className="company-name-m"><i className="bi bi-shield"></i> Need help choosing?</h6>

                <div className="review-card">


                  <p className="review-text">
                    Independent Installer Review <br />
                    We check the quoted cost, the system size, the battery option,
                    and the savings claim against your results.
                  </p>

                  <h2 className="review-price">₦250k+</h2>
                </div>

                <button className="btn-orange w-100 mt-3">Get expert review</button>
              </div>

              <div className="quote-card-match mb-4">


                <div className="quote-header">
                  <span className="upload-icon">
                    <img src={donw} alt="logo" />
                  </span>
                  <h6>Already have a quote?</h6>
                </div>

                <p className="quote-subtext">
                  Upload the quote you already received so SolarVy can compare it to the cost and payback estimate from your results.
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


                <button className="upload-btn">
                  Upload file
                </button>

              </div>





            </div>



          </div>
        </section>







      </div>

    </div>
  );
}

export default MatchedInstallers;
