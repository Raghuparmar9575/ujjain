import React, { useEffect, useState } from "react";
import Slider from "../Components/Slider";
import Cards from "../Components/Cards";
import Requestsection from "../Components/Requestsection";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/Request`)
      .then((res) => {
        // console.log("res : ", res);
        setdata(res.data.slice(0, 2));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log("value : ", data);
  return (
    <>
      <div className="mb-3">
        <img
          height={100}
          width="100%"
          src="https://cdn.vectorstock.com/i/preview-1x/79/53/banner-with-red-blood-cellis-vector-41517953.jpg"
          alt=""
        />
      </div>

      <div className="bg-danger mt-2 p-2">
        <div className="scrolling-text">
          Your scrolling text goes here Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Modi tenetur harum, commodi, voluptatem dignissimos
          enim quidem eaque dolor in tempore culpa itaque dolorum, cumque
          cupiditate est vero. Magni, dolores expedita?
        </div>
      </div>
      <div className="row justify-content-center">
        <Cards
          to="/Request"
          title="Request"
          imgsrc="https://i.pinimg.com/236x/11/43/91/114391f1c3f4468f858a2c0b4777f6c1.jpg"
        />
        <Cards
          to="/Register"
          title="Donate"
          imgsrc="https://render.fineartamerica.com/images/rendered/default/poster/8/8/break/images/artworkimages/medium/3/blood-donor-donation-design-a-blood-donor-day-saved-my-life-blood-donation-christian-blood-donor-sara-crazy.jpg"
        />
      </div>
      <div className="container ">
        <div className="row justify-content-center">
          {data.map((item) => {
            return (
              <Requestsection
                key={item.id}
                id={item.id}
                name={item.name}
                group={item.bgroup}
                units={item.units}
                address={item.address}
                mobile={item.mobile}
                required={item.rdate}
              />
            );
          })}
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="danger mt-3"
            onClick={() => navigate("/bloodrequest")}
            className="Button"
          >
            More Requests
          </Button>
        </div>
      </div>
      <div className="row justify-content-center">
        <Cards
          title="Request"
          imgsrc="https://static.vecteezy.com/system/resources/thumbnails/008/826/851/small/abstract-initial-letter-mz-logo-in-black-color-isolated-in-white-background-applied-for-clothing-brand-logo-also-suitable-for-the-brands-or-companies-that-have-an-initial-name-zm-vector.jpg"
        />
        <Cards
          title="Donate"
          imgsrc="https://static.vecteezy.com/system/resources/thumbnails/008/826/851/small/abstract-initial-letter-mz-logo-in-black-color-isolated-in-white-background-applied-for-clothing-brand-logo-also-suitable-for-the-brands-or-companies-that-have-an-initial-name-zm-vector.jpg"
        />
      </div>
    </>
  );
};

export default Home;
