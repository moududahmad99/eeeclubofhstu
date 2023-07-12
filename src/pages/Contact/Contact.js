import React from "react";
import Iframe from "react-iframe";
import { TextField } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  return (
    <div>
      <div class="about about-after position-relative">
        <div class="container">
          <div class="row about-text text-center text-white">
            <h3 className="text-uppercase">Contact with Of EEE Club</h3>
          </div>
        </div>
      </div>

      {/* <!-- Contact Section Start --> */}
      <div className="container">
        <div className="row">
          <h3 className="text-center  my-5">Get In Touch</h3>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="contact-map">
              <div
                id="map-container-google-3"
                className="z-depth-1-half map-container-3 m-5"
              >
                <Iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d34204.685639633324!2d88.6512584168689!3d25.693671557968923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m5!1s0x39e4ad0b5d200fa7%3A0x2e0c8f8bb049efa2!2sHajee%20Mohammad%20Danesh%20Science%20%26%20Technology%20University%2C%20N508!3m2!1d25.6986802!2d88.65617069999999!4m0!5e0!3m2!1sen!2sbd!4v1666447185436!5m2!1sen!2sbd"
                  width="400"
                  height="400"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <TextField
              fullWidth
              label="Your Name"
              id="fullWidth"
              className="mt-5"
            />
            <TextField
              fullWidth
              label="Email"
              id="fullWidth"
              className="mt-3"
            />
            <TextField
              fullWidth
              label="Subject"
              id="fullWidth"
              className="mt-3"
            />
            <TextField
              id="filled-multiline-static"
              label="Message"
              multiline
              rows={4}
              fullWidth
              margin="normal"
            />
          </div>
        </div>
      </div>
      {/* Contact Section End  */}

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

export default Contact;
