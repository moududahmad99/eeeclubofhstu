import React from "react";
import "../stylesheets/MainNavbar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ErrorPage from "./ErrorPage";
import Homepage from "./Homepage/Homepage";
import About from "./About/About";
import Admission from "./Academics/Admission";
import ClassRoutine from "./Academics/ClassRoutine";
import Courses from "./Academics/Courses";
import ResearchArea from "./Research/ResearchArea";
import Publications from "./Research/Publications";
import Thesis from "./Research/Thesis";
import Advisors from "./Advisors/Advisors";
import News from "./News/News";
import Library from "./Library/Library";
import Students from "./Students/Students";
import Contact from "./Contact/Contact";
import Signup from "./Signup/Signup";

function MainNavbar() {
  return (
    <>
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container className="justify-content-center">
            {/* <Navbar.Brand ><Link to="/">EEE-LOGO </Link></Navbar.Brand> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto navSec">
                <Nav.Link>
                  {" "}
                  <Link className="navItems" to="/">
                    Home{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <Link className="navItems" to="/about">
                    About{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <Link className="navItems" to="/advisors">
                    Advisors{" "}
                  </Link>
                </Nav.Link>

                <NavDropdown
                  title="ACADEMICS"
                  id="collasible-nav-dropdown"
                  style={{ color: "white" }}
                >
                  <Link className="academics_dropdown" to="/admission">
                    ADMISSION{" "}
                  </Link>
                  <Link className="academics_dropdown" to="/class-routine">
                    CLASS ROUTINE{" "}
                  </Link>
                  <Link className="academics_dropdown" to="/courses">
                    COURSES{" "}
                  </Link>
                </NavDropdown>

                <NavDropdown
                  title="RESEARCH"
                  id="collasible-nav-dropdown"
                  style={{ color: "white" }}
                >
                  <Link className="academics_dropdown" to="/research-area">
                    Reseach Area{" "}
                  </Link>
                  <Link className="academics_dropdown" to="/publications">
                    Publications{" "}
                  </Link>
                  <Link className="academics_dropdown" to="/thesis">
                    Thesis
                  </Link>
                </NavDropdown>

                <Nav.Link>
                  {" "}
                  <Link className="navItems" to="/news">
                    News{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <Link className="navItems" to="/library">
                    Library{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <Link className="navItems" to="/students">
                    Students{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <Link className="navItems" to="/contact">
                    Contact{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <Link className="navItems" to="/signup">
                    Signup{" "}
                  </Link>
                </Nav.Link>

                {/* <li className="nav-item">
                  <a href="#" className="nav-link">Academics</a>
                  <ul >
                    <li><a href="admission.html" className="nav-link"><Link className="" to="/admission">Admission</Link> </a></li>
                    <li><a href="className_routine.html" className="nav-link" />className Routine</li>
                    <li><a href="className_routine.html" className="nav-link" />courses</li>
                  </ul>
                </li> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* <nav>
          <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
           <Link to="/about">About </Link>
          </li>
        
        </ul>

        </nav> */}

        <Routes>
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/advisors" element={<Advisors />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/class-routine" element={<ClassRoutine />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/research-area" element={<ResearchArea />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/thesis" element={<Thesis />} />
          <Route path="/news" element={<News />} />
          <Route path="/library" element={<Library />} />
          <Route path="/Students" element={<Students />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default MainNavbar;
