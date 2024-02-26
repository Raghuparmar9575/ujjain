import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function Slider() {
  return (
    <MDBCarousel showControls>
      <MDBCarouselItem itemId={1}>
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/174/16/desktop-wallpaper-donating-blood-vectors-illustrations-for-blood-donor.jpg"
          className="d-block w-100"
          alt="..."
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img
          src="https://mdbootstrap.com/img/new/slides/042.jpg"
          className="d-block w-100"
          alt="..."
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/174/16/desktop-wallpaper-donating-blood-vectors-illustrations-for-blood-donor.jpg"
          className="d-block w-100"
          alt="..."
        />
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
