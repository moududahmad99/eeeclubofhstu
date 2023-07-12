import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../../stylesheets/Signup/Signup.css";

const Signup = () => {
  return (
    <div>
      <div class="about about-after position-relative">
        <div class="container">
          <div class="row about-text text-center text-white">
            <h3 className="text-uppercase">Signup</h3>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------- */}

      <div class="container">
        <form id="form" action="/">
          <h2>Create Account</h2>

          <div class="input-box">
            <label for="username">Full name*</label>
            <input
              id="username"
              name="username"
              placeholder="Enter your name"
              type="text"
            />
            <div class="error"></div>
          </div>
          <div class="input-box">
            <label for="email">Email*</label>
            <input
              id="email"
              name="email"
              placeholder="Enter your email"
              type="text"
            />
            <div class="error"></div>
          </div>

          <div class="input-box">
            <label class="details">batch*</label>

            <select class="department" name="Department" id="lang">
              <option value="null">Select your batch</option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>
              <option value="2005">2005</option>
              <option value="2004">2004</option>
              <option value="2003">2003</option>
              <option value="2002">2002</option>
              <option value="2001">2001</option>
              <option value="2000">2000</option>
              <option value="1999">1999</option>
            </select>
          </div>

          <div class="input-box">
            <label class="details">Department*</label>
            {/* <!-- <input type="text" placeholder="Enter your Home disctrct" /> --> */}

            <select class="department" name="Department">
              <option value="null">Select department/faculty</option>
              <option value="Computer Science and Engineering">
                Computer Science and Engineering
              </option>
              <option value="Electrical and Electronic Engineering">
                Electrical and Electronic Engineering
              </option>
              <option value="Electronics and Communication Engineering">
                Electronics and Communication Engineering
              </option>

              <option value="Business Studies">
                {" "}
                Faculty of Business Studies
              </option>

              <option value="Fisheries"> Faculty of Fisheries</option>

              {/* <option value=Veterinary and Animal Science"> Faculty of Veterinary and Animal Science</option> */}
              <option value="agriclture">Faculty of agriclture</option>
              <option value="Engineering"> Faculty of Engineering</option>
              <option value="Science">Faculty of Science</option>
              <option value="Social Science and Humanities">
                Faculty of Social Science and Humanities
              </option>

              <option value="others">others</option>
            </select>
          </div>
          <div class="input-box">
            <label class="details">Student Id*</label>
            <input
              type="number"
              id="userid"
              name="userid"
              placeholder="Enter your id"
            />
          </div>

          <div class="input-box">
            <label class="details">Phone Number</label>
            <input type="number" placeholder="Enter your phone" />
          </div>
          <div class="input-box">
            <label class="details">Home District</label>

            <select class="district" name="Home District" id="lang">
              <option value="javascript">Select your district</option>

              <option value="Bagerhat">Bagerhat</option>
              <option value="Bandarban">Bandarban</option>
              <option value="Barguna">Barguna</option>
              <option value="Barisal">Barisal</option>
              <option value="Bhola">Bhola</option>
              <option value="Bogra">Bogra</option>
              <option value="Brahmanbaria">Brahmanbaria</option>
              <option value="Chandpur">Chandpur</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Chuadanga">Chuadanga</option>
              <option value="Comilla">Comilla</option>
              <option value="Cox'sBazar">Cox'sBazar</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Dinajpur">Dinajpur</option>
              <option value="Faridpur">Faridpur</option>
              <option value="Feni">Feni</option>
              <option value="Gaibandha">Gaibandha</option>
              <option value="Gazipur">Gazipur</option>
              <option value="Gopalganj">Gopalganj</option>
              <option value="Habiganj">Habiganj</option>
              <option value="Jaipurhat">Jaipurhat</option>
              <option value="Jamalpur">Jamalpur</option>
              <option value="Jessore">Jessore</option>
              <option value="Jhalokati">Jhalokati</option>
              <option value="Jhenaidah">Jhenaidah</option>
              <option value="Khagrachari">Khagrachari</option>
              <option value="Khulna">Khulna</option>
              <option value="Kishoreganj">Kishoreganj</option>
              <option value="Kurigram">Kurigram</option>
              <option value="Kushtia">Kushtia</option>
              <option value="Lakshmipur">Lakshmipur</option>
              <option value="Lalmonirhat">Lalmonirhat</option>
              <option value="Madaripur">Madaripur</option>
              <option value="Magura">Magura</option>
              <option value="Manikganj">Manikganj</option>
              <option value="Maulvibazar">Maulvibazar</option>
              <option value="Meherpur">Meherpur</option>
              <option value="Munshiganj">Munshiganj</option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Naogaon">Naogaon</option>
              <option value="Narail">Narail</option>
              <option value="Narayanganj">Narayanganj</option>
              <option value="Narsingdi">Narsingdi</option>
              <option value="Natore">Natore</option>
              <option value="Nawabganj">Nawabganj</option>
              <option value="Netrokona">Netrokona</option>
              <option value="Nilphamari">Nilphamari</option>
              <option value="Noakhali">Noakhali</option>
              <option value="Pabna">Pabna</option>
              <option value="Panchagarh">Panchagarh</option>
              <option value="Patuakhali">Patuakhali</option>
              <option value="Pirojpur">Pirojpur</option>
              <option value="Rajbari">Rajbari</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Rangamati">Rangamati</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Satkhira">Satkhira</option>
              <option value="Shariatpur">Shariatpur</option>
              <option value="Sherpur">Sherpur</option>
              <option value="Sirajganj">Sirajganj</option>
              <option value="Sunamganj">Sunamganj</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Tangail">Tangail</option>
              <option value="Thakurgaon">Thakurgaon</option>
            </select>
          </div>

          <div class="input-box">
            <label for="password">Password*</label>
            <input id="password" name="password" type="password" />
            <div class="error"></div>
          </div>
          <div class="input-box">
            <label for="password2">Confirm Password*</label>
            <input id="password2" name="password2" type="password" />
            <div class="error"></div>
          </div>

          <div class="input-box">
            <label for="password2">Upload photo*</label>
            <input type="file" name="profile_photo" placeholder="uplaod" />
          </div>

          <button type="submit">Sign Up</button>
        </form>
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

export default Signup;
