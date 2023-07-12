import React from "react";
import "../../stylesheets/Advisors/Advisors.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Advisors = () => {
  return (
    <React.Fragment>
      <div className="about about-after position-relative">
        <div className="container">
          <div className="row about-text text-center text-white">
            <h3 className="text-uppercase">Advisors of EEE Club of HSTU</h3>
          </div>
        </div>
      </div>

      <div className="advisor-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="advisor-part">
                <img
                  className="card-img-top"
                  src="images/jamilsir.jpg"
                  alt="Card image cap"
                />

                <h5 className="text-center advisor-text">
                  Dr. Md. Zamil Sultan
                </h5>
                <h6 className=" text-center advisor-text">Professor</h6>
                <hr />
                <p className="text-center ">Contact Info</p>

                <a className="text-dark advisor-text">
                  {/* <i className="fa-solid fa-phone"></i> */}
                  <LocalPhoneIcon></LocalPhoneIcon>
                  +8801724216846 <br />
                </a>

                <a className="text-dark advisor-text">
                  {/* <i className="fa-solid fa-envelope"></i> */}
                  <EmailIcon></EmailIcon>
                  <small>
                    {" "}
                    mdzamilsultan@hstu.ac.bd <br />
                  </small>
                </a>

                <div className="message-btn text-center ">
                  <Button variant="contained" className="muiBtn">
                    See More
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="advisor-part">
                <img
                  className="card-img-top"
                  src="images/faruksir45.jpg"
                  alt="Card image cap"
                />

                <h5 className="text-center advisor-text">Md. Faruk Kibria</h5>
                <h6 className=" text-center advisor-text">
                  Associate Professor
                </h6>
                <hr />
                <p className="text-center ">Contact Info</p>

                <a className="text-dark advisor-text">
                  {/* <i className="fa-solid fa-phone"></i> */}
                  <LocalPhoneIcon></LocalPhoneIcon>
                  +8801724216846 <br />
                </a>

                <a className="text-dark advisor-text">
                  {/* <i className="fa-solid fa-envelope"></i> */}
                  <EmailIcon></EmailIcon>
                  <small>
                    {" "}
                    mdzamilsultan@hstu.ac.bd <br />
                  </small>
                </a>

                <div className="message-btn text-center ">
                  <Button variant="contained" className="muiBtn">
                    See More
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="advisor-part">
                <img
                  className="card-img-top"
                  src="images/safiqsir.jpg"
                  alt="Card image cap"
                />

                <h5 className="text-center advisor-text">Md. Safiqul Islam</h5>
                <h6 className=" text-center advisor-text">
                  Assistant Professor
                </h6>
                <hr />
                <p className="text-center ">Contact Info</p>

                <a className="text-dark advisor-text">
                  {/* <i className="fa-solid fa-phone"></i> */}
                  <LocalPhoneIcon></LocalPhoneIcon>
                  +8801713163306 <br />
                </a>

                <a className="text-dark advisor-text">
                  {/* <i className="fa-solid fa-envelope"></i> */}
                  <EmailIcon></EmailIcon>
                  <small>
                    safiqul_eee@hstu.ac.bd <br />
                  </small>
                </a>

                <div className="message-btn text-center ">
                  <Button variant="contained" className="muiBtn">
                    See More
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="advisor-part">
                <img
                  className="card-img-top"
                  src="images/t6.jpg"
                  alt="Card image cap"
                />

                <h5 className="text-center advisor-text">Md Rony Tota</h5>
                <h6 className=" text-center advisor-text">Professor</h6>
                <hr />
                <p className="text-center ">Contact Info</p>

                <a className="text-dark advisor-text">
                  {/* <i className="fa-solid fa-phone"></i> */}
                  <LocalPhoneIcon></LocalPhoneIcon>
                  +8801724216846 <br />
                </a>

                <a className="text-dark advisor-text">
                  {/* <i className="fa-solid fa-envelope"></i> */}
                  <EmailIcon></EmailIcon>
                  <small>
                    {" "}
                    mdzamilsultan@hstu.ac.bd <br />
                  </small>
                </a>

                <div className="message-btn text-center ">
                  <Button variant="contained" className="muiBtn">
                    See More
                  </Button>
                </div>
              </div>
            </div>
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
    </React.Fragment>
  );
};

export default Advisors;
