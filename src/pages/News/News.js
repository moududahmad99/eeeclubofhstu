import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../../stylesheets/News/News.css";
import { Button } from "@mui/material";

const News = () => {
  return (
    <React.Fragment>
      <div class="about about-after position-relative">
        <div class="container">
          <div class="row about-text text-center text-white">
            <h3 className="text-uppercase">News and Events Of EEE Club</h3>
          </div>
        </div>
      </div>

      {/* Main Part */}

      <div className="news">
        <div className="container">
          <div className="row new-main mt-5">
            <div className="newsNevent-main col-lg-12 my-5">
              <div className="news-title">
                <h3>News </h3>
              </div>
              <div className="newsNevent-cards">
                <div className="news-card">
                  <img
                    className="card-img-top"
                    src="images/eventsNew.jpg"
                    alt="Card image"
                  />
                  <div className="news-body">
                    <p className="card-text">Project Hub 2019</p>
                    <p>18 May,2019</p>
                    <a href="#">
                      Read More... <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>

                <div className="news-card">
                  <img
                    className="card-img-top"
                    src="images/exhibition.jpg"
                    alt="Card image"
                  />
                  <div className="news-body">
                    <p className="card-text">Exhibition 2022</p>
                    <p>18 May, 22</p>
                    <a href="#">
                      Read More... <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="notice-button1 mt-5">
                {/* <a href="#" type="button" className="btn btn-primary">view more
                  <i className="fa-solid fa-arrow-right"></i>
                </a> */}
                <Button variant="contained" className="mb-5">
                  View More
                </Button>
              </div>
            </div>
          </div>

          <div class="events-title text-center my-5">
            <h3>Events</h3>
          </div>

          <div class="row justify-content-evenly mt-4 events">
            <div class="events-card col-lg-5 my-5">
              <img
                class="card-img-top"
                src="images/eventsNew.jpg"
                alt="Card image"
              />
              <div class="events-body">
                <p class="card-text mt-4">Heading...</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, nemo.
                </p>
                <a href="#">
                  Read More... <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div class="events-card col-lg-5 my-5">
              <img
                class="card-img-top"
                src="images/eventsNew.jpg"
                alt="Card image"
              />
              <div class="events-body">
                <p class="card-text mt-4">Heading...</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, nemo.
                </p>
                <a href="#">
                  Read More... <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="row justify-content-evenly mt-4 events">
            <div class="events-card col-lg-5">
              <img
                class="card-img-top"
                src="images/eventsNew.jpg"
                alt="Card image"
              />
              <div class="events-body">
                <p class="card-text mt-4">Heading...</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, nemo.
                </p>
                <a href="#">
                  Read More... <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <div class="events-card col-lg-5">
              <img
                class="card-img-top"
                src="images/eventsNew.jpg"
                alt="Card image"
              />
              <div class="events-body">
                <p class="card-text mt-4">Heading...</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, nemo.
                </p>
                <a href="#">
                  Read More... <i class="fa-solid fa-arrow-right"></i>
                </a>
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

export default News;
