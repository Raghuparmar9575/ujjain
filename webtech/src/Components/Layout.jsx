import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Layout = () => {
  return (
    <div className="layout">
      <Row>
        <Col xs={12} sm={12} md={12}>
          <h6>
            {" "}
            When using card groups with footers, their content will
            automatically line up. When using card groups with footers, their
            content will automatically line up.
          </h6>
        </Col>
      </Row>
    </div>
  );
};

export default Layout;
