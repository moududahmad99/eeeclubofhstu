import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ClassRoutine = () => {
  return (
    <div>
      <div className="about about-after position-relative">
        <div className="container">
          <div className="row about-text text-center text-white">
            <h3 className="text-uppercase">
              Publications section EEE Club of HSTU
            </h3>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row publications mt-5">
          <div class="col-lg-6">
            <a href="#1">
              <h3>Publications by Teachers</h3>
            </a>
          </div>
          <div class="col-lg-6">
            <a href="#2">
              <h3>Publications by Students</h3>
            </a>
          </div>
        </div>
      </div>

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
