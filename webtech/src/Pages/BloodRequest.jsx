import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Requestsection from "../Components/Requestsection";

const BloodRequest = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/Request`)
      .then((res) => {
        console.log("res : ", res);
        setdata(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container ">
      <div className="row justify-content-center mt-5">
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
              gender={item.gender}
              required={item.rdate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BloodRequest;
