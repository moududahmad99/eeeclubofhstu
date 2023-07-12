import React from "react";
import "../../stylesheets/About/About.css";
import { Button } from "@mui/material";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const About = () => {
  return (
    <React.Fragment>
      {/* <!-- About Section Start --> */}
      <div className="about">
        <div className="container">
          <div className="row about-text about-after">
            <h3 className="text-uppercase">About EEE Club of HSTU</h3>
          </div>
        </div>
      </div>

      {/* ------------------ warning [maybe egulo link up kore component kore add korte hobe] -------------------   */}

      {/*  start of about section */}

      <div id="about">
        <div className="container">
          <div className="boom">
            <div className="about-card">
              <div className="about-desc">
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

      {/* <!-- Message Section Start --> */}
      <div id="message">
        <div className="container">
          <div className="message-main">
            <div className="message-img pt-3">
              <img src="images/p.jpg" alt="zamil sultan" />
            </div>
            <div className="message-text">
              <h3>Message from the President</h3>
              <h6>Professor and Chairman </h6>
              <h4>Dr. Md. Zamil Sultan </h4>
              <h6>Department of Electrical and Electronic Engineering, HSTU</h6>
              <p>
                Department of Electrical and Electronic Engineering (EEE) is one
                of the most demanding and leading departments in Hajee Mohammad
                Danesh Science and Technology University (HSTU). We have
                well-equipped modern laboratories where the students can learn
                and demonstrate their theoretical knowledge. The EEE department
                possesses knowledgeable and experienced teachers who are
                well-noted in their respective fields of teaching and research.
                Our teachers are also involved in many testing and development
                projects of the national as expert consultants. We always try to
                maintain a congenial environment among students and teachers in
                our department. The department of EEE...
              </p>
              <div className="message-btn">
                {/* <a href="#" type="button" className="btn btn-primary">See More
                  <i className="fa-solid fa-arrow-right"></i>
                </a> */}
                <Button variant="contained">See More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Message Section End --> */}

      {/* <!-- Both-Message Section Start --> */}
      <div className="both-message">
        <div className="container">
          <div className="both-main">
            <div className="row">
              <div className="col-lg-6">
                <div className="both-part1">
                  <div className="message-img">
                    <a href="#">
                      <img
                        src="images/gallery-4.jpg"
                        alt="Muhammad Ruhul Amin"
                      />
                    </a>
                  </div>
                  <div className="message-text">
                    <h3>Message from Vice president</h3>

                    <h4>Muhammad Ruhul Amin</h4>
                    <h6>Department of EEE, HSTU</h6>
                    <p>
                      Department of Electrical and Electronic Engineering (EEE)
                      is one of the most demanding and leading departments ithe
                      national as expert consultants. We always try to maintain
                      a congenial environment among students and teachers in our
                      department. The department of EEE...
                    </p>
                    <div className="message-btn">
                      {/* <a href="#" type="button" className="btn btn-primary">More
                    <i className="fa-solid fa-arrow-right"></i>
                  </a> */}
                      <Button variant="contained">See More</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="both-part2">
                  <div className="message-img">
                    <a href="#">
                      <img src="images/gallery-4.jpg" alt="Sourav Ahmed" />
                    </a>
                  </div>
                  <div className="message-text">
                    <h6>Message from General Sectretary</h6>

                    <h4>Sourav Ahmed</h4>
                    <h6>Department of EEE, HSTU</h6>
                    <p>
                      Department of Electrical and Electronic Engineering (EEE)
                      is one of the most demanding and leading departments ithe
                      national as expert consultants. We always try to maintain
                      a congenial environment among students and teachers in our
                      department. The department of EEE...
                    </p>
                    <div className="message-btn">
                      {/* <a href="#" type="button" className="btn btn-primary"> More
                    <i className="fa-solid fa-arrow-right"></i>
                  </a> */}
                      <Button variant="contained">See More</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Both-Message Section End --> */}

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

export default About;
