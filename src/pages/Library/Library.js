import * as React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button, TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../../stylesheets/Library/Library.css";

const Library = () => {
  return (
    <React.Fragment>
      <div class="about about-after position-relative">
        <div class="container">
          <div class="row about-text text-center text-white">
            <h3 className="text-uppercase">Library section Of EEE Club</h3>
          </div>
        </div>
      </div>

      <div id="student py-5">
        <div class="container">
          <div class="row justify-content-center">
            {/* <div className='login-form'>

            </div> */}
            <div class="col-lg-6">
              <Button variant="contained" fullWidth className="mt-5">
                Login
              </Button>
              <TextField
                fullWidth
                id="filled-basic"
                label="Email or Username"
                variant="filled"
                margin="normal"
              />
              <TextField
                fullWidth
                id="filled-basic"
                label="Password"
                variant="filled"
                margin="normal"
              />
              <div className="contact-password text-center">
                <a href="" className="mx-4">
                  Forgot Password?
                </a>
                <FormControlLabel
                  className="mx-4"
                  control={<Checkbox defaultChecked />}
                  label="Remind me later"
                />
              </div>
              <a>
                <Button variant="outlined" fullWidth margin="normal">
                  Sign Up
                </Button>
              </a>
              <div className="signup-link my-3 text-center">
                <p>
                  Don't have an account? <a href="">Sign Up</a>
                </p>
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

export default Library;
