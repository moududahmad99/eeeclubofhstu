import { Button, TextField } from "@mui/material";
import React from "react";
import "../../stylesheets/Homepage/Homepage.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Iframe from "react-iframe";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../../stylesheets/Responsive.css";

const Homepage = () => {
  return (
    <>
      {/* this is start of header section */}

      <div className="heading">
        <div className=" row width-100 col-12 section-top">
          <div className="col-2 eee-logo">
            <img src="images/top-logo1.jpg" alt="" className="img-fluid " />
          </div>
          <div className=" col-8 top-text">
            <h1>EEE CLUB OF HSTU</h1>
            <h2>Department of Electrical and Electronics Engineering</h2>
            <h3>Hajee Mohammad Danesh Science & Technology University</h3>
          </div>
          <div className=" col-2 hstu-logo">
            <img src="images/top-logo2.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      {/* this is the end of header section */}

      {/* Banner Area */}

      <div class="row width-100 banner mt-3">
        <h1>EEE CLUB OF HSTU</h1>
        <h4>
          A place for learning, discovery, innovation, expression and discourse
        </h4>
      </div>

      {/*  start of about section */}

      <div id="about">
        <div className="container">
          <div className="boom">
            <div className="about-card">
              <div className="about-desc w-100">
                <h3>
                  Welcome To Department of Electrical and Electronics
                  Engineering
                </h3>
                <p>
                  Bangladesh University of Engineering and Technology (BUET) has
                  now eighteen teaching departments under five faculties, and
                  among the five faculties, the Faculty of Electrical and
                  Electronic Engineeration in the year 1982 being formed through
                  a process of segregating the Faculty of Engineering.
                </p>
                <div className="message-btn">
                  {/* <a href="#" type="button" className="btn btn-primary text-center">Read more
                    <i className="fa-solid fa-arrow-right"></i>
                  </a> */}
                  <Button variant="contained">See More</Button>
                </div>
              </div>
            </div>
            <div className="about-img img-fluid">
              <img src="images/about-img.jpg" alt="about" />
            </div>
          </div>
        </div>
      </div>

      {/*  end of about section */}

      <div className="news">
        <div className="container d-flex">
          <div className="row">
            <div className="newsNevent-main col-lg-8 col-md-6 col-12 my-5">
              <div className="news-title">
                <h3>News</h3>
              </div>
              <div className="newsNevent-cards">
                <div className="news-card">
                  <img
                    className="card-img-top"
                    src="images/gallery-4.jpg"
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
                    src="images/gallery-2.jpg"
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
                <Button variant="contained">View More</Button>
              </div>
            </div>

            <div className="notice justify-content-center col-lg-4 col-md-6 col-12">
              <div className="notice-title mt-5">
                <h3>Notice Board</h3>
              </div>
              <div className="notice-main">
                <div className="notice-card1">
                  <div className="card-1">
                    <div className="calendar-part">
                      <h3>04</h3>
                      <h4>July</h4>
                      <h5>2022</h5>
                    </div>
                    <div className="text-part">
                      <a href="#">
                        <h2>PhD Admission Result</h2>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="notice-card1">
                  <div className="card-1">
                    <div className="calendar-part">
                      <h3>34</h3>
                      <h4>Aug</h4>
                      <h5>2022</h5>
                    </div>
                    <div className="text-part">
                      <a href="#">
                        <h2>PhD Viva Notice</h2>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="notice-button2">
                  {/* <a href="#" type="button" className="btn btn-primary">view more
                  <i className="fa-solid fa-arrow-right"></i>
                </a> */}
                  <Button variant="contained">View More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------- OUr Gallery Start ---------------------------- */}

      <div id="gallery">
        <div className="container">
          <div className="gallery-title">
            <h3>OUR GALLERY</h3>
          </div>
          <div className="gallery-main">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="gallery-img">
                  {/* <a href="#"> */}
                  <div className="gallery-overlay">
                    <img src="images/g0.jpg" alt="about-img" />
                    <div className="gallery-overlay-icon">
                      {/* <a><i className="fa-solid fa-image"></i></a> */}
                      <a href="#">
                        <PhotoSizeSelectActualIcon></PhotoSizeSelectActualIcon>
                      </a>
                    </div>
                  </div>
                  {/* </a> */}
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="gallery-img">
                  {/* <a href="#"> */}
                  <div className="gallery-overlay">
                    <img src="images/g1.jpg" alt="about-img" />
                    <div className="gallery-overlay-icon">
                      {/* <a href="#"><i className="fa-solid fa-image"></i></a> */}
                      <a href="#">
                        <PhotoSizeSelectActualIcon></PhotoSizeSelectActualIcon>
                      </a>
                    </div>
                  </div>
                  {/* </a> */}
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="gallery-img">
                  {/* <a href="#"> */}
                  <div className="gallery-overlay">
                    <img src="images/g11.jpg" alt="about-img" />
                    <div className="gallery-overlay-icon">
                      {/* <a href="#"><i className="fa-solid fa-image"></i></a> */}
                      <a href="#">
                        <PhotoSizeSelectActualIcon></PhotoSizeSelectActualIcon>
                      </a>
                    </div>
                  </div>
                  {/* </a> */}
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="gallery-img">
                  {/* <a href="#"> */}
                  <div className="gallery-overlay">
                    <img src="images/g12.jpg" alt="about-img" />
                    <div className="gallery-overlay-icon">
                      {/* <a href="#"><i className="fa-solid fa-image"></i></a> */}
                      <a href="#">
                        <PhotoSizeSelectActualIcon></PhotoSizeSelectActualIcon>
                      </a>
                    </div>
                  </div>
                  {/* </a> */}
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="gallery-img">
                  {/* <a href="#"> */}
                  <div className="gallery-overlay">
                    <img src="images/g13.jpg" alt="about-img" />
                    <div className="gallery-overlay-icon">
                      {/* <a href="#"><i className="fa-solid fa-image"></i></a> */}
                      <a href="#">
                        <PhotoSizeSelectActualIcon></PhotoSizeSelectActualIcon>
                      </a>
                    </div>
                  </div>
                  {/* </a> */}
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="gallery-img">
                  {/* <a href="#"> */}
                  <div className="gallery-overlay">
                    <img src="images/g14.jpg" alt="about-img" />
                    <div className="gallery-overlay-icon">
                      {/* <a href="#"><i className="fa-solid fa-image"></i></a> */}
                      <a href="#">
                        <PhotoSizeSelectActualIcon></PhotoSizeSelectActualIcon>
                      </a>
                    </div>
                  </div>
                  {/* </a> */}
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="gallery-img">
                  {/* <a href="#"> */}
                  <div className="gallery-overlay">
                    <img src="images/g2.jpg" alt="about-img" />
                    <div className="gallery-overlay-icon">
                      {/* <a href="#"><i className="fa-solid fa-image"></i></a> */}
                      <a href="#">
                        <PhotoSizeSelectActualIcon></PhotoSizeSelectActualIcon>
                      </a>
                    </div>
                  </div>
                  {/* </a> */}
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="gallery-img">
                  <a href="#">
                    <div className="gallery-overlay">
                      <img src="images/g9.jpg" alt="about-img" />
                      <div className="gallery-overlay-icon">
                        {/* <a href="#"><i className="fa-solid fa-image"></i></a> */}
                        <a href="#">
                          <PhotoSizeSelectActualIcon></PhotoSizeSelectActualIcon>
                        </a>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="gallery-img">
                  {/* <a href="#"> */}
                  <div className="gallery-overlay">
                    <img src="images/g5.jpg" alt="about-img" />
                    <div className="gallery-overlay-icon">
                      {/* <a href="#"><i className="fa-solid fa-image"></i></a> */}
                      <a href="#">
                        <PhotoSizeSelectActualIcon></PhotoSizeSelectActualIcon>
                      </a>
                    </div>
                  </div>
                  {/* </a> */}
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="gallery-img">
                  <a href="#">
                    <div className="gallery-overlay">
                      <img src="images/g7.jpg" alt="about-img" />
                      <div className="gallery-overlay-icon">
                        {/* <a href="#"><i className="fa-solid fa-image"></i></a> */}
                        <a href="#">
                          <PhotoSizeSelectActualIcon></PhotoSizeSelectActualIcon>
                        </a>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="gallery-img">
                  {/* <a href="#"> */}
                  <div className="gallery-overlay">
                    <img src="images/g8.jpg" alt="about-img" />
                    <div className="gallery-overlay-icon">
                      {/* <a href="#"><i className="fa-solid fa-image"></i></a> */}
                      <a href="#">
                        <PhotoSizeSelectActualIcon></PhotoSizeSelectActualIcon>
                      </a>
                    </div>
                  </div>
                  {/* </a> */}
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="gallery-img">
                  {/* <a href="#"> */}
                  <div className="gallery-overlay">
                    <img src="images/g9.jpg" alt="about-img" />
                    <div className="gallery-overlay-icon">
                      {/* <a href="#"><i className="fa-solid fa-image"></i></a> */}
                      <a href="#">
                        <PhotoSizeSelectActualIcon></PhotoSizeSelectActualIcon>
                      </a>
                    </div>
                  </div>
                  {/* </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------- OUr Gallery End ---------------------------- */}

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
      <a href="#" className="upArrow">
        <ArrowUpwardIcon></ArrowUpwardIcon>
      </a>
      {/* <!-- Min-Footer Section End --> */}
    </>
  );
};

export default Homepage;
