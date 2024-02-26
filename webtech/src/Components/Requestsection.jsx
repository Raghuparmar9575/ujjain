import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { IoIosPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiMaleFemale } from "react-icons/bi";
import { Link } from "react-router-dom";

function Requestsection(props) {
  return (
    <Card style={{ width: "10rem", margin: "10px" }} key={props.id}>
      <Card.Header>
        <IoIosPerson /> {props.name}
      </Card.Header>
      <ListGroup variant="flush">
        {props.gender ? (
          <ListGroup.Item>
            {" "}
            <BiMaleFemale /> &nbsp;
            {props.gender}
          </ListGroup.Item>
        ) : null}
        <ListGroup.Item>
          Group :<span className="span-sec"> {props.group}</span> <br />
          Unit : <span className="span-sec">{props.units}</span>
        </ListGroup.Item>
        <ListGroup.Item>
          Require date <br /> {props.required}
        </ListGroup.Item>
        <ListGroup.Item>
          <FaPhoneAlt /> <Link>{props.mobile}</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <FaLocationDot /> &nbsp; {props.address}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Requestsection;
