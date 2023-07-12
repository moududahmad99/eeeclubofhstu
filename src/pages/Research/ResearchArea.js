import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button } from "@mui/material";

const ClassRoutine = () => {
  return (
    <div>
      <div className="about about-after position-relative">
        <div className="container">
          <div className="row about-text text-center text-white">
            <h3 className="text-uppercase">
              Research Area section EEE Club of HSTU
            </h3>
          </div>
        </div>
      </div>

      {/* <!-- Research Section Start --> */}
      <div className="research mt-5">
        <div className="container">
          <div className="research-title">
            <h3>Research Area</h3>
          </div>
          <div className="row">
            <div className="research-main justify-content-center d-flex">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="research-card">
                  <img src="images/research-1.jpg" alt="research" />
                  <h3>Power Electronics</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="research-card">
                  <img src="images/research-2.jpg" alt="research" />
                  <h3>Non-Electrical Device</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="research-card">
                  <img src="images/research-3.jpg" alt="research" />
                  <h3>VSCI System</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="research-card">
                  <img src="images/research-4.jpg" alt="research" />
                  <h3>Optoelectronics</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="research-button">
            {/* <a href="#" type="button" className="btn btn-danger">see More
						<i className="fa-solid fa-arrow-right"></i>
					</a> */}
            <Button variant="contained">See More</Button>
          </div>
        </div>
      </div>
      {/* <!-- Research Section End --> */}

      {/* <!-- Footer Section Start --> */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="footer-main mt-5">
              <div className="col-lg-4 col-12">
                <div className="footer-head1">
                  <div className="footer-one">
                    <a href="#">
                      <img src="images/footer-logo.jpg" alt="logo" />
                    </a>
                    <p>
                      {" "}
                      <a href="#">
                        <i className="fa-solid fa-location-dot"></i>
                      </a>{" "}
                      EEE Club, Hajee Mohammad Danesh Science & Technology
                      University, Dinajpur
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="footer-head2">
                  <div className="footer-two">
                    <h3>Contact Us</h3>
                    <div className="contact-icon">
                      {/* <a href="#"><i className="fa-solid fa-phone"></i></a> */}
                      <div className="contact-icon-inner">
                        <a href="#">
                          <PhoneIcon></PhoneIcon>
                        </a>
                        <p>
                          +334 1234 5987 <br />
                          +334 9876 2354
                        </p>
                      </div>
                      <div className="contact-icon-inner">
                        <a href="#">
                          <LocationOnIcon></LocationOnIcon>
                        </a>
                        <p>
                          Hajee Mohammad Danesh Science & Technology University,
                          Dinajpur
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="footer-head3">
                  <div className="footer-three">
                    <h3>Important Links</h3>
                    <div className="main-footer-links">
                      <div className="footer-links">
                        <ul>
                          <li>
                            <a href="#">Home</a>
                          </li>
                          <li>
                            <a href="#">About Us</a>
                          </li>
                          <li>
                            <a href="#">Portfolio</a>
                          </li>
                          <li>
                            <a href="#">Our Team</a>
                          </li>
                          <li>
                            <a href="#">Blog</a>
                          </li>
                        </ul>
                      </div>
                      <div className="footer-links">
                        <ul>
                          <li>
                            <a href="#">Pricing</a>
                          </li>
                          <li>
                            <a href="#">Gallery</a>
                          </li>
                          <li>
                            <a href="#">Feedback</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* <!-- Min-Footer Section Start --> */}
      <div class="footer-inner">
        {/* <!-- <h3>Copyright © 2023. All rights reserved by <a href="#"><span> EEE CLUB OF HSTU</span></a></h3> --> */}
        <h3>
          <img
            src="images/16logo.png"
            alt="logo"
            height="120px"
            width="120px"
          />
          POWERED BY © NOIKOSSHO'16
        </h3>
      </div>
      {/* <!-- Min-Footer Section End --> */}
    </div>
  );
};

export default ClassRoutine;
