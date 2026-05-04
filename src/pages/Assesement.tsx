import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/images/logo.png";
import logo from "../assets/images/logo.png";
import appone from "../assets/images/icon/app1.svg";
import apptwo from "../assets/images/icon/app2.svg";
import appthree from "../assets/images/icon/app3.svg";
import appfour from "../assets/images/icon/app4.svg";
import bttnarrow from "../assets/images/btton-arrow.png";
import siteone from "../assets/images/icon/site1.svg";
import sitetwo from "../assets/images/icon/site2.svg";
import sitethree from "../assets/images/icon/site3.svg";
import sunone from "../assets/images/icon/sun.svg";
import sunthree from "../assets/images/icon/sun1.svg";
import save from "../assets/images/icon/save.svg";
import mone from "../assets/images/icon/month.svg";
import mtwo from "../assets/images/icon/month1.svg";
import mthree from "../assets/images/icon/month3.svg";
import clockone from "../assets/images/icon/clock.svg";
import clocktwo from "../assets/images/icon/clock1.svg";
import clockthree from "../assets/images/icon/clock3.svg";
import buildone from "../assets/images/icon/home.svg";
import buildtwo from "../assets/images/icon/hotel.svg";
import buildthree from "../assets/images/icon/factor.svg";
import buildfour from "../assets/images/icon/build.svg";
import buildfive from "../assets/images/icon/hospital.svg";
import buildsix from "../assets/images/icon/school.svg";
import buleone from "../assets/images/icon/bule1.svg";
import buletwo from "../assets/images/icon/bule2.svg";
import bulethree from "../assets/images/icon/bule3.svg";
import bulefour from "../assets/images/icon/sun-blue.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Bold } from "lucide-react";

function Assesement() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(1);
  const [selectedProperty, setSelectedProperty] = useState(1);
  const [selectedPower, setSelectedPower] = useState(1);
  const [inputMethod, setInputMethod] = useState<
    "bill" | "appliance" | "custom"
  >("bill");
  const [selectedObjectiveId, setSelectedObjectiveId] = useState("bill");
  const handleToggle = () => {
    if (window.innerWidth < 768) {
      setOpen(!open);
    }
  };
  const navigate = useNavigate();
  const options = [
    {
      id: "bill",
      title: "Monthly Bill",
      desc: "Enter kWh directly from your bill.",
      icon: mone,
    },
    {
      id: "appliance",
      title: "Appliance Calculator",
      desc: "Select appliances and hours/day.",
      icon: mtwo,
    },
    {
      id: "custom",
      title: "Custom Equipment",
      desc: "For factories, hospitals, specialist loads.",
      icon: mthree,
    },
  ];

  const Objectiveoptions = [
    {
      id: "bill",
      title: "Reduce Diesel Use",
      desc: "Cut diesel consumption and runtime.",
      icon: siteone,
    },
    {
      id: "appliance",
      title: "Reduce Electricity Bills",
      desc: "Lower monthly energy costs.",
      icon: sitetwo,
    },
    {
      id: "custom",
      title: "Backup During Outages",
      desc: "Maintain power when grid fails.",
      icon: sitethree,
    },
  ];

  const propertyOptions = [
    {
      id: 1,
      title: "Home",
      desc: "Backup and lower energy bills",
      icon: buildone,
    },
    {
      id: 2,
      title: "Hotel",
      desc: "Optimise generator and hybrid power",
      icon: buildtwo,
    },
    {
      id: 3,
      title: "Factory",
      desc: "Support larger equipment loads",
      icon: buildthree,
    },
    {
      id: 4,
      title: "Commercial Building",
      desc: "Reduce business electricity cost",
      icon: buildfour,
    },
    {
      id: 5,
      title: "Hospital / Clinic",
      desc: "Reliable power for critical systems",
      icon: buildfive,
    },
    {
      id: 6,
      title: "School / Education",
      desc: "Maximise daytime solar savings",
      icon: buildsix,
    },
  ];

  const powerOptions = [
    {
      id: 1,
      title: "Grid + Generator",
      desc: "Grid supply with backup generator",
      icon: clockone,
    },
    {
      id: 2,
      title: "Grid Only",
      desc: "Utility electricity supply only",
      icon: clocktwo,
    },
    {
      id: 3,
      title: "Solar + Grid",
      desc: "Solar connected with utility supply",
      icon: clockthree,
    },
  ];

  const [formData, setFormData] = useState({
    country: "",
    city: "",
  });

  const [fileName, setFileName] = useState("No file chosen");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const categories = [
    "Hospitals",
    "Factories",
    "Hotels",
    "Clinics",
    "Farms",
    "Workshops",
  ];

  const [activeTab, setActiveTab] = useState("Businesses");

  const applianceOptions = [
    { name: "LED Bulb", power: 10, icon: appone },
    { name: "Fan", power: 75, icon: apptwo },
    { name: "TV", power: 120, icon: appthree },
    { name: "AC", power: 1500, icon: appfour },
  ];

  const applianceOptionssecond = [
    { name: "Ultrasound", qty: 10, hours: 6, power: 10, icon: appone },
    { name: "Ultrasound", qty: 1, hours: 5, power: 120, icon: apptwo },
    { name: "Ultrasound", qty: 2, hours: 8, power: 70, icon: appthree },
    { name: "Ultrasound", qty: 1, hours: 6, power: 1500, icon: appfour },
  ];

  const initialData = [
    { name: "LED Bulb", qty: 10, hours: 6, power: 10, icon: appone },
    { name: "LED Bulb", qty: 1, hours: 5, power: 120, icon: apptwo },
    { name: "LED Bulb", qty: 2, hours: 8, power: 70, icon: appthree },
    { name: "LED Bulb", qty: 1, hours: 6, power: 1500, icon: appfour },
  ];

  const calculateKwh = (qty: any, hours: any, power: any) => {
    const q = Number(qty) || 0;
    const h = Number(hours) || 0;
    const p = Number(power) || 0;

    return ((q * h * p) / 1000).toFixed(2);
  };

  const [rows, setRows] = useState(initialData);

  const handleRowChange = (index: any, field: any, value: any) => {
    setRows((prevRows) => {
      const updatedRows: any = [...prevRows];

      // ✅ Safety check
      if (!updatedRows[index]) return prevRows;

      // ✅ Convert numbers properly
      if (field === "qty" || field === "hours" || field === "power") {
        updatedRows[index][field] = Number(value) || 0;
      } else {
        updatedRows[index][field] = value;
      }

      // ✅ Auto update power when appliance changes
      if (field === "name") {
        const selected = applianceOptions.find((opt) => opt.name === value);
        if (selected) {
          updatedRows[index].power = selected.power;
        }
      }

      return updatedRows;
    });
  };

  const handleFileChange = (e: any) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No file chosen");
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


  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 992) {
      setOpen(false); // reset menu on desktop
    }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
  const summaryAssessmentPathTitle =
    inputMethod === "bill"
      ? "Bill"
      : inputMethod === "appliance"
        ? "Appliance"
        : "Custom";

  const summaryFirstMetricLabel =
    inputMethod === "bill" ? "MONTHLY USAGE" : "Daily Energy";
  const summaryFirstMetricUnit =
    inputMethod === "bill" ? "kWh/month" : "kWh/day";

  const summarySecondMetricLabel =
    inputMethod === "bill" ? "ESTIMATED ANNUAL LOAD" : "Monthly Energy";
  const summarySecondMetricValue = inputMethod === "bill" ? "N200,000" : "1.9";

  return (
    <div>
      <div className="full-body-color">
        <section className="hero d-flex align-items-center ass-bannr py-4">
          <div className="overlay"></div>

          <div className="container-fluid px-lg-4 px-3 position-relative z-1 menu-div ass-div">
            <div className="row align-items-start text-divs gx-3 gx-lg-4">
               <div className="solar-top-navbar">

            <nav className={`navbar navbar-expand-lg  ${scrolled ? "scrolled" : ""}`}>

              <Link className="navbar-brand" to="/">
                <img
                  src={logo}
                  alt="logo"
                  className="solar-logo-img"
                />
              </Link>

 <button
  className="navbar-toggler"
  type="button"
  onClick={handleToggle}
>
  <span className="navbar-toggler-icon"></span>
</button>

         <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>

                <ul className="navbar-nav ms-auto align-items-lg-center solar-nav-links">

                  <li className="nav-item">
              <Link className="nav-link" to="/how-it-works" onClick={() => setOpen(false)}>
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

                      <img
                        src={bttnarrow}
                        alt="arrow"
                      />

                    </button>

                  </li>

                </ul>

              </div>

            </nav>

          </div>
              <div className="nav-bottom-section row align-items-center">
                <div className="col-12 col-lg-12 text-white ">
                  <h1 className="bannr-text display-5 ass-page ">
                    Energy Assessment
                  </h1>

                  <p className="bannr-text-s text-light mt-2 mb-5 ass-page-two">
                    Plan the right solar, battery, and hybrid system for your
                    building. Enter your details and get an instant estimate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid px-lg-4 py-4">
          <div className="row g-4 align-items-start">
            <div className="col-lg-8">
              <div className="p-4 shadow-sm rounded-4 ass-first">
                <div className="d-flex align-items-center mb-3">
                  <div className="step-box me-3">1</div>
                  <div>
                    <h5 className="fw-bold mb-1 heading-ass">
                      Building Information
                    </h5>
                    <p className="text-muted small mb-0 para-ass">
                      Tell us about your property so we can tailor the
                      assessment.
                    </p>
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  {propertyOptions.map((item) => (
                    <div className="col-6 col-md-6 col-lg-4" key={item.id}>
                      <div
                        className={`property-card ${selectedProperty === item.id ? "active" : ""}`}
                        onClick={() => setSelectedProperty(item.id)}
                      >
                        <div className="d-flex align-items-start gap-3">
                          <div className="icon-box-tops">
                            <img
                              src={item.icon}
                              alt="icon"
                              className="mobile-iconssss"
                            />
                          </div>

                          <div>
                            <h6 className="mb-1 fw-semibold ass-semi">
                              {item.title}
                            </h6>
                            <p className="small mb-0 text-muted ass-muted">
                              {item.desc}
                            </p>
                          </div>

                          {selectedProperty === item.id && (
                            <div className="check-icon-homss">✔</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="row g-3 ">
                  <div className="col-md-6">
                    <label className="form-label small fw-bold ass-bold">
                      COUNTRY
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="form-select rounded-3 ass-intput"
                    >
                      <option value="">Select country</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small fw-bold ass-bold"></label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="form-control rounded-3 ass-intput"
                      placeholder="Lagos"
                    />
                  </div>
                </div>
              </div>

              <div className="p-4 shadow-sm rounded-4 ass-first mt-3">
                <div className="d-flex align-items-center mb-3">
                  <div className="step-box me-3">2</div>
                  <div>
                    <h5 className="fw-bold mb-1 heading-ass">
                      Current Power Setup
                    </h5>
                    <p className="text-muted small mb-0 para-ass">
                      This helps us understand your current energy
                      infrastructure.
                    </p>
                  </div>
                </div>

                {powerOptions.map((item) => (
                  <div className="parent-container onlt-this">
                    <div
                      key={item.id}
                      className={`property-card  ${selectedPower === item.id ? "active" : ""}`}
                      onClick={() => setSelectedPower(item.id)}
                    >
                      <div className="d-flex align-items-center justify-content-between w-100">
                        <div className="d-flex align-items-center gap-3">
                          <div className="icon-boxs">
                            <img src={item.icon} alt="icon" />
                          </div>

                          <div>
                            <h6 className="mb-1 fw-semibold curr-ass">
                              {item.title}
                            </h6>
                            <p className="mb-0 small text-muted curr-ass-semi-hide">
                              {item.desc}
                            </p>
                          </div>
                        </div>

                        <div className="radio-circle ms-auto">
                          {selectedPower === item.id && (
                            <div className="radio-dot"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 shadow-sm rounded-4 ass-first mt-3">
                <div className="d-flex align-items-center">
                  <div className="step-box me-3">3</div>
                  <div>
                    <h5 className="fw-bold mb-1 heading-ass">
                      Choose Input Method
                    </h5>
                    <p className="text-muted small mb-0 para-ass">
                      Pick the easiest path - no need to know technical values.
                    </p>
                  </div>
                </div>

                <div className="container mt-2 p-1">
                  <div className=" row">
                    {options.map((item) => (
                      <div className="col-md-4" key={item.id}>
                        <div
                          className={`option-card  ${
                            inputMethod === item.id ? "active" : ""
                          }`}
                          onClick={() =>
                            setInputMethod(
                              item.id as "bill" | "appliance" | "custom",
                            )
                          }
                        >
                          <div className="d-flex align-items-start">
                            <div className="icon-box-topss me-2">
                              <img src={item.icon} />
                            </div>

                            <div className="flex-grow-1">
                              <h6 className="mb-1 fw-semibold ass-semiss">
                                {item.title}
                              </h6>
                              <p className="small mb-0 text-muted ass-mutedss">
                                {item.desc}
                              </p>
                            </div>

                            {inputMethod === item.id && (
                              <div className="check-icon">✔</div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {inputMethod === "bill" && (
                <div className="monthbill-section-tab-1">
                  <div className="row mt-2 g-3">
                    <div className="col-md-6">
                      <label className="mb-2 fw-semibold ass-hedss">
                        Upload Bill (optional)
                      </label>
                      <div className="upload-box-ass text-center">
                        <div className="file-upload">
                          <label className="file-label">
                            <span className="file-btn">Choose file</span>
                            <span className="file-name">{fileName}</span>
                            <input type="file" onChange={handleFileChange} />
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label className="mb-2 fw-semibold ass-hedss">
                        Notes
                      </label>
                      <textarea
                        className="form-control notes-box ass-text-area"
                        placeholder="Any additional notes about the site, bill pattern, or load profile..."
                      />
                    </div>
                  </div>

                  <div className="p-4 shadow-sm rounded-4 ass-first mt-3">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="step-box me-3"
                        style={{ position: "relative", top: "0px" }}
                      >
                        4
                      </div>
                      <div>
                        <h5 className="fw-bold mb-1 heading-ass">
                          Bill information
                        </h5>
                      </div>
                    </div>

                    <div className="container mt-4">
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label">
                            MONTHLY ELECTRICITY USAGE
                          </label>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="200"
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">UNIT</label>
                          <select className="form-control custom-input">
                            <option>Select</option>
                            <option>kWh</option>
                            <option>Units</option>
                          </select>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">
                            AVERAGE MONTHLY ELECTRICITY SPEND
                          </label>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="#320,000"
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">
                            GRID TARIFF PER KWH
                          </label>
                          <input
                            type="text"
                            className="form-control custom-input"
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">ROOF AREA</label>
                          <div className="input-wrapper">
                            <input
                              type="number"
                              className="form-control custom-input"
                              placeholder="200"
                            />
                            <span className="unit">m²</span>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">
                            AVERAGE OUTAGE HOURS / DAY
                          </label>
                          <input
                            type="text"
                            className="form-control custom-input"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {inputMethod === "appliance" && (
                <div className="Appliance Calculator-section-tab-2">
                  <div className="p-4 shadow-sm rounded-4 ass-first mt-3">
                    <div className="d-flex align-items-center mb-3">
                      <div className="step-box me-3">4</div>
                      <div>
                        <h5 className="fw-bold mb-1 heading-ass">
                          Appliance Calculator
                        </h5>
                        <p className="text-muted small mb-0 para-ass">
                          Add your typical appliances to estimate your daily
                          energy use. This is the easiest way if you don't know
                          your kWh.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="table-container">
                        <table className="appliance-table">
                          <thead>
                            <tr>
                              <th>APPLIANCE</th>
                              <th>QTY</th>
                              <th>HRS/DAY</th>
                              <th>POWER (W)</th>
                              <th>DAILY KWH</th>
                            </tr>
                          </thead>
                          <tbody>
                            {rows.map((item, index) => (
                              <tr key={index}>
                                <td className="appliance-cell py-2">
                                  <div className="tables-icon-box-custom">
                                    <img src={item.icon} alt="icon" />
                                  </div>

                                  <select
                                    className="form-select border-0 first-table"
                                    value={item.name}
                                    onChange={(e) =>
                                      handleRowChange(
                                        index,
                                        "name",
                                        e.target.value,
                                      )
                                    }
                                  >
                                    {applianceOptions.map((opt, i) => (
                                      <option key={i} value={opt.name}>
                                        {opt.name}
                                      </option>
                                    ))}
                                  </select>
                                </td>

                                <td>
                                  <input
                                    className="rows-borders"
                                    type="number"
                                    value={item.qty}
                                    onChange={(e) =>
                                      handleRowChange(
                                        index,
                                        "qty",
                                        Number(e.target.value),
                                      )
                                    }
                                  />
                                </td>

                                <td>
                                  <input
                                    className="rows-borders"
                                    type="number"
                                    value={item.hours}
                                    onChange={(e) =>
                                      handleRowChange(
                                        index,
                                        "hours",
                                        Number(e.target.value),
                                      )
                                    }
                                  />
                                </td>

                                <td>
                                  <div className="inputs-text-bluess">
                                    <input
                                      type="number"
                                      value={item.power}
                                      onChange={(e) =>
                                        handleRowChange(
                                          index,
                                          "power",
                                          Number(e.target.value),
                                        )
                                      }
                                    />
                                  </div>
                                </td>

                                <td className="col-md-2 text-center">
                                  <div className="inputs-text-bluess">
                                    {calculateKwh(
                                      item.qty,
                                      item.hours,
                                      item.power,
                                    )}
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {inputMethod === "custom" && (
                <div className="p-4 shadow-sm rounded-4 ass-first mt-3">
                  <div className="d-flex align-items-center mb-3">
                    <div className="step-box me-3">4</div>
                    <div>
                      <h5 className="fw-bold mb-1 heading-ass">
                        Custom Equipment
                      </h5>
                      <p className="text-muted small mb-0 para-ass">
                        Upload information to match custom equipment.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="table-container">
                      <table className="appliance-table">
                        <thead>
                          <tr>
                            <th>EQUIPMENT</th>
                            <th>RATED POWER (W)</th>
                            <th>QTY</th>
                            <th>Hrs/Day</th>
                            <th>LOAD FACTOR</th>
                            <th>DAILY KWH</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map((item, index) => (
                            <tr key={index}>
                              <td
                                className="appliance-cell py-2"
                                style={{ minWidth: "180px" }}
                              >
                                <div className="tables-icon-box-custom">
                                  <img src={item.icon} alt="icon" />
                                </div>

                                <select
                                  className="form-select border-0 first-table"
                                  value={item.name}
                                  onChange={(e) =>
                                    handleRowChange(
                                      index,
                                      "name",
                                      e.target.value,
                                    )
                                  }
                                >
                                  {applianceOptionssecond.map((opt, i) => (
                                    <option key={i} value={opt.name}>
                                      {opt.name}
                                    </option>
                                  ))}
                                </select>
                              </td>

                              <td>
                                <input
                                  className="rows-borders"
                                  type="number"
                                  value={item.qty}
                                  onChange={(e) =>
                                    handleRowChange(
                                      index,
                                      "qty",
                                      Number(e.target.value),
                                    )
                                  }
                                />
                              </td>

                              <td>
                                <input
                                  className="rows-borders"
                                  type="number"
                                  value={item.hours}
                                  onChange={(e) =>
                                    handleRowChange(
                                      index,
                                      "hours",
                                      Number(e.target.value),
                                    )
                                  }
                                />
                              </td>

                              <td>
                                <input
                                  className="rows-borders"
                                  type="number"
                                  value={item.hours}
                                  onChange={(e) =>
                                    handleRowChange(
                                      index,
                                      "hours",
                                      Number(e.target.value),
                                    )
                                  }
                                />
                              </td>

                              <td>
                                <div className="inputs-text-bluess">
                                  <input
                                    type="number"
                                    value={item.power}
                                    onChange={(e) =>
                                      handleRowChange(
                                        index,
                                        "power",
                                        Number(e.target.value),
                                      )
                                    }
                                  />
                                </div>
                              </td>

                              <td className="col-md-2 text-center">
                                <div className="inputs-text-bluess">
                                  {calculateKwh(
                                    item.qty,
                                    item.hours,
                                    item.power,
                                  )}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="buttons-actions bottom-bttns d-flex flex-wrap gap-3 mt-3">
                      <button className="dashed-btn">
                        <span className="plus">+</span> Add Equipment
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="p-4 shadow-sm rounded-4 ass-first mt-3">
                <div className="d-flex align-items-center mb-3">
                  <div className="step-box me-3">5</div>
                  <div>
                    <h5 className="fw-bold mb-1 heading-ass">
                      Site and Goal Inputs
                    </h5>
                    <p className="text-muted small mb-0 para-ass">
                      These details improve the recommendation without
                      overwhelming you
                    </p>
                  </div>
                </div>

                <div className="container mt-4">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">ROOF AREA</label>
                      <div className="input-wrapper">
                        <input
                          type="number"
                          className="form-control custom-input"
                          placeholder="200"
                        />
                        <span className="unit">m²</span>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">
                        Backup Duration Required
                      </label>
                      <select
                        name="country"
                        className="form-select rounded-3 ass-intput"
                      >
                        <option value="">Select Duration Required</option>
                        <option value="Nigeria">1</option>
                        <option value="India">2</option>
                        <option value="USA">3</option>
                      </select>
                    </div>
                    <p className="text-muted small mb-0 para-ass">
                      Main Objective
                    </p>

                    {Objectiveoptions.map((item) => (
                      <div className="col-md-4" key={item.id}>
                        <div
                          className={`option-card  ${
                            selectedObjectiveId === item.id ? "active" : ""
                          }`}
                          onClick={() => setSelectedObjectiveId(item.id)}
                        >
                          <div className="d-flex align-items-start">
                            <div className="icon-box-topsss me-2 ">
                              <img src={item.icon} alt="icon" />
                            </div>

                            <div className="flex-grow-1">
                              <h6 className="mb-1 fw-semibold ass-semi clears">
                                {item.title}
                              </h6>
                              <p className="small mb-0 text-muted ass-muted">
                                {item.desc}
                              </p>
                            </div>

                            {selectedObjectiveId === item.id && (
                              <div className="check-icon">✔</div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="d-flex gap-3 flex-wrap mt-3 mb-4">
                <button className="btn-primary-custom calu">
                  <span className="icon-sun">
                    <img src={sunone} alt="icon" />
                  </span>
                  <span>Calculate My Energy System</span>
                  <span className="arrows">
                    <img src={sunthree} alt="icon" />
                  </span>
                </button>

                <button className="btn-outline-custom2 calu-2">
                  <span className="icon-sun">
                    <img src={save} alt="icon" />
                  </span>
                  <span>Save Draft</span>
                </button>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="p-4 rounded-4 shadow-sm right-panel assts-right">
                <div className="botton-line mb-4">
                  <div className="step-item active">
                    <span className="step-circle">✔</span>
                    <span>Building & energy context</span>
                  </div>

                  <div className="step-item active">
                    <span className="step-circle">2</span>
                    <span>Load estimate from bill or appliances</span>
                  </div>

                  <div className="step-item disabled">
                    <span className="step-circle">3</span>
                    <span>System size & savings recommendation</span>
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-6">
                    <div className="stat-card text-center">
                      <div className="icon-box-build-right mb-2">
                        <img src={buleone} alt="icon" />
                      </div>
                      <h5 className="asst-h">11.3</h5>
                      <div className="usage-wrapper">
                        <small>{summaryFirstMetricUnit}</small>
                        <small>
                          <b>{summaryFirstMetricLabel}</b>
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="stat-card text-center">
                      <div className="icon-box-build-right  mb-2">
                        <img src={buletwo} alt="icon" />
                      </div>
                      <h5 className="asst-h">{summarySecondMetricValue}</h5>
                      <div className="usage-wrapper">
                        {inputMethod !== "bill" && <small>kWh/month</small>}
                        <small>
                          <b>{summarySecondMetricLabel}</b>
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="stat-card text-center">
                      <div className="icon-box-build-right mb-2">
                        <img src={bulefour} alt="icon" />
                      </div>
                      <h5 className="asst-h">340</h5>
                      <div className="usage-wrapper">
                        <small>
                          <b>MONTHLY SPEND</b>
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="stat-card text-center">
                      <div className="icon-box-build-right mb-2">
                        <img src={bulethree} alt="icon" />
                      </div>
                      <h5 className="asst-h">{summaryAssessmentPathTitle}</h5>
                      <small>
                        <b>ASSESSMENT PATH</b>
                      </small>
                    </div>
                  </div>
                </div>

                <div className="summary-box">
                  <div className="live-header">
                    <span className="dot"></span>
                    <span className="live-text">Live summary panel</span>
                  </div>

                  <p className="summary-desc">
                    Solarvy updates your estimated energy and system size in
                    real time as you enter information. These values form the
                    basis for your solar, battery, and hybrid recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Assesement;
