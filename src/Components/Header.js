import React from "react";
import { FaHome } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom/";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container>
        <Nav.Link>
          <Link className="logotext" to="/">
            
            Marvel<sub className="logotextsmall">The</sub>Gym
          </Link>
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link>
              {" "}
              <Link to="/" className="Rightmenu">
                {" "}
                <FaHome size={30} className="pb-2" />{" "}
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/aboutus" className="Rightmenu">
                {" "}
                About Us{" "}
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/contactus" className="Rightmenu">
                Contact Us
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/login" onClick={props.login} className="Rightmenu">
                Admin Login
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
