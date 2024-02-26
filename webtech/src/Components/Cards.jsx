import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBCardGroup,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Cards(props) {
  return (
    <MDBCardGroup style={{ width: "10rem" }}>
      <MDBCard>
        <MDBCardImage src={props.imgsrc} position="top" alt="..." />
        <MDBCardBody>
          <MDBCardTitle>
            <Link to={props.to}>
              <h5>{props.title}</h5>
            </Link>
          </MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  );
}
