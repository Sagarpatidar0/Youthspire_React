import "../App.css";
import "../index.css"
function Heading() {
  return (
    <header id="header">
      <div className="header-main">
        <img src="images/image-bg.png" alt="" />
      </div>
      <div className="header-main-1" data-aos="fade-up">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-md-2 col-sm-6 col-6">
              <div className="logo">
                <a href="#">
                  <img src="images/logo.1.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-9 col-md-10 col-sm-6 col-6">
              <nav
                className="navbar navbar-expand-lg navbar-dark"
                aria-label="Ninth navbar example"
              >
                <button
                  className="navbar-toggler ravn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarsExample07XL"
                  aria-controls="navbarsExample07XL"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarsExample07XL"
                >
                  <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" href="#header">
                        HOME
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        style={{ transition: "1.5s" }}
                        href="#page4"
                      >
                        ABOUT US
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        style={{ transition: "3.5s" }}
                        href="#page8"
                      >
                        CONTACT US
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#page7">
                        RANK
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="dropdown07XL"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        COMMUNITY
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdown07XL"
                      >
                        <li>
                          <a className="dropdown-item" href="#header">
                            COMMUNITY
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            BRANDS
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            CONTACT US
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <button className="right">CONTACT US</button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Heading;
