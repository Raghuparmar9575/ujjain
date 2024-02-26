import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaHome } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { FaShareAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="mt-5 bg-dark sticky-bottom">
      <Row className="footer">
        <Col as={NavLink} to="/Home" className="footer-col">
          <FaHome />
          <p>Home</p>
        </Col>
        <Col className="footer-col" as={NavLink} to="/Register">
          <BiDonateHeart />
          <p>Donate</p>
        </Col>
        <Col className="footer-col" as={NavLink} to="/Member">
          <FaUsers />
          <br />
          Bank
        </Col>
        <Col className="footer-col" as={NavLink} to="/Home">
          <FaShareAlt />
          <br />
          share
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
