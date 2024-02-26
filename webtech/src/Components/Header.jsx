import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";
import { MdPersonAddAlt1 } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";

import { useState } from "react";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavItemClick = () => {
    setExpanded(false); // Close the Navbar when a NavItem is clicked
  };
  const Logout = () => {
    localStorage.removeItem("LoginData");
    window.alert("are you sure");
  };
  return (
    <>
      <Navbar
        expand="lg"
        sticky="top"
        fixed="top"
        expanded={expanded}
        onToggle={setExpanded}
      >
        <Container>
          <Navbar.Brand to="/">
            <p className="mt-3">
              <strong>WeSupport</strong>
            </p>
          </Navbar.Brand>
          <h4 className="user-name">
            Welcome <span className="span"></span>
          </h4>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" onClick={handleNavItemClick}>
              <Nav.Link as={NavLink} to="/Home">
                <FaHome />
                &nbsp;Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/">
                <IoMdPerson />
                &nbsp;My Profile
              </Nav.Link>
              <Nav.Link as={NavLink} to="/Request">
                <FaArrowCircleDown />
                &nbsp;Request
              </Nav.Link>
              <Nav.Link as={NavLink} to="/Register">
                <MdPersonAddAlt1 />
                &nbsp; Register
              </Nav.Link>
              <Nav.Link as={NavLink} to="/">
                <FaHistory />
                &nbsp; History
              </Nav.Link>
              <Nav.Link as={NavLink} to="/">
                <IoLanguageSharp />
                &nbsp;Language
              </Nav.Link>

              <NavDropdown title="Page" id="basic-nav-dropdown">
                <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item to="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/" onClick={Logout}>
                <RiLogoutCircleLine />
                &nbsp;Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
